import { Link } from "react-router-dom"
import { Spinner } from "../components/Spinner"
import { useFetch } from "../hooks/useFetch"
import { useState } from "react"
import { AlertMsg } from "../components/AlertMsg"
import { Title } from "../components/Title"

export const Table = () => {
  const {data, isPending, error} = useFetch('http://localhost:8000/employee')
  const [query, setQuery] = useState('')

  const filterTable = (data) => { 
    return data.filter(item => {
      return (
        item.username.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.phone.includes(query)
      )
    })
   }
  return (
    <>
      <div className="row justify-content-between align-items-center my-4">
          <div className="col-5">
              <Title className="text-start pb-1">Table page</Title>
          </div>
          <div className="col-7">
              <input type="text" value={query} className='form-control'
                  placeholder='Serach by name, email or phone'
                  onChange={(e) => setQuery(e.target.value)}/>
          </div>
      </div>
      <table className="table table-hover">
        <thead className='table-secondary'>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
           {/* some data from json-server */}
           {isPending ? (
            <tr>
              <td colSpan={5}>
                <Spinner />
              </td>
            </tr>
           ) : (error || filterTable(data).length === 0) ? (
            <tr>
              <td colSpan={5}>
                <AlertMsg />
              </td>
            </tr>
           ) : (
            <>
              {filterTable(data).map((row,index) => (
                <tr key={row.id}>
                    <td>{index+1}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    {/* Details button down here */}
                    <td>
                        <Link to={`/details/${row.id}`}  className="btn btn-primary btn-sm">
                            <i className="bi bi-info-circle-fill"></i>
                        </Link>
                    </td>
                </tr>
              ))}
            </>
           )}
        </tbody>
      </table>
    </>
  )
}
