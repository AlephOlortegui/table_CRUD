import { useEffect, useState } from "react"

export const useFetch = (uri, setSomething=null) => { // setSomthing for Edit.jsx
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async (uri) => { 
    try {
      let res = await fetch(uri)
      if(!res.ok){
        throw Error('could not fetch the data for that resource')
      }
      let data = await res.json();
      //console.log(data)
      //setData(data);
        if(setSomething) setSomething({...data})
        else setData(data)
      setIsPending(false);
      setError(false);
    } catch (err) {
      console.log(err)
      setIsPending(false)
      setError(true)
    }
  }

  useEffect(() => {
    fetchData(uri)
  
    /* return () => {
      second
    } */
  }, [uri, setSomething])
  

  return {data, isPending, error}
}
