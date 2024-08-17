import { Spinner } from "../components/Spinner"
import { useFetch } from "../hooks/useFetch"

export const Table = () => {
  const {data, isPending, error} = useFetch('http://localhost:8000/employee')
  return (
    <>
      <div className="row justify-content-between align-items-center my-4">
          <div className="col-5">
              <h1 className="text-start pb-1">Table page</h1>
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
           ) : error ? (
            <tr>
              <td colSpan={5}>
                <AlertMsg />
              </td>
            </tr>
           ) : (
            <>
              {data.map((row,index) => (
                <tr key={row.id}>
                    <td>{index+1}</td>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>
                        <button className="btn btn-primary btn-sm">
                            <i className="bi bi-info-circle-fill"></i>
                        </button>
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
