import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className='d-flex justify-content-around align-items-center'>
      <div className="title d-flex">
        <h1 className="me-3">Crud Operations</h1>
        <img src="/vite.svg" alt="vite-logo" className="vite-logo"/>
      </div>
      <nav>
        <Link className='mx-3' to="/">Home</Link>
        <Link className='mx-3' to="/">Create</Link>
      </nav>
    </header>
  )
}
