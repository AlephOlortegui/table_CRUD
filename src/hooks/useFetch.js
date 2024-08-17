import { useEffect, useState } from "react"

export const useFetch = (uri) => {
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
      setData(data);
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
  }, [uri])
  

  return {data, isPending, error}
}