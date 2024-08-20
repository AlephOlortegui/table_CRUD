import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useFormFx } from "../hooks/useFormFx";
import { Form } from "../components/Form";
import { NotFound } from "./NotFound";
import { Spinner } from "../components/Spinner";

export const Edit = () => {
  const {id} = useParams();

  const {data: user, setData, handleSubmit, handleChange} = useFormFx(`http://localhost:8000/employee/${id}`,'PUT',-1)
  const {isPending, error} = useFetch(`http://localhost:8000/employee/${id}`,setData)

  return (
    <>
      {isPending ? (<Spinner />) : 
        error ? (<NotFound />) :
        (<Form title="Edit" data={user} 
                  handleChange={handleChange} 
                  handleSubmit={handleSubmit}/>)
      }
    </>
  )
}
