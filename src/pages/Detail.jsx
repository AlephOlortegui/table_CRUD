import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Spinner } from "../components/Spinner"
import { NotFound } from "./NotFound"

export const Detail = () => {
  const {id} = useParams()
  const {data: user, isPending, error} = useFetch(`http://localhost:8000/employee/${id}`)

  return (
    <>
    {isPending ? (<Spinner />) : error ? (<NotFound />) : (
      <div className="card">
        <div className="card-header text-start">Contact Details</div>
        <div className="card-body">
            <p className="card-text">The Employee name is : <b>{user.username}</b></p>
            <p className="card-text">Email is : {user.email}</p>
            <p className="card-text">Phone is : {user.phone}</p>
            <button className="btn btn-danger me-3"><i className="bi bi-trash-fill"></i></button>
            <button className="btn btn-info ms-3"><i className="bi bi-pencil-fill"></i></button>
        </div>
      </div>
    )}
    </>
  )
}
