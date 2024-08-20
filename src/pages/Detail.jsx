import { Link, useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Spinner } from "../components/Spinner"
import { NotFound } from "./NotFound"

export const Detail = () => {
  const {id} = useParams()
  const {data: user, isPending, error} = useFetch(`http://localhost:8000/employee/${id}`)
  //Handle Delete - after deleting the data I want to redirect
  const navigateTo = useNavigate()

  const handleDelete = async () => { 
    try {
      const response = await fetch(`http://localhost:8000/employee/${id}`, {
        method: 'DELETE',
      });
  
      /* verifica que la respuesta sea exitosa
      lo que garantiza que la redirección solo ocurrirá después de una eliminación exitosa. */
      if (!response.ok) {
        throw new Error('Failed to delete the employee');
      }
  
      navigateTo('/');
    } catch (err) {
      console.error('Error during deletion:', error);
      // Aquí podrías mostrar un mensaje de error en la UI
    }
  }

  return (
    <>
    {isPending ? (<Spinner />) : error ? (<NotFound />) : (
      <div className="card">
        <div className="card-header text-start">Contact Details</div>
        <div className="card-body">
            <p className="card-text">The Employee name is : <b>{user.username}</b></p>
            <p className="card-text">Email is : {user.email}</p>
            <p className="card-text">Phone is : {user.phone}</p>
            {/* handle Delete & Edit */}
            <button className="btn btn-danger me-3" onClick={handleDelete}><i className="bi bi-trash-fill"></i></button>
            <Link to={`/edit/${user.id}`}  className="btn btn-info ms-3"><i className="bi bi-pencil-fill"></i></Link>
        </div>
      </div>
    )}
    </>
  )
}
