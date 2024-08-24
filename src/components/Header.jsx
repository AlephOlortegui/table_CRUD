// import { Link } from "react-router-dom"
import { ActiveLink } from "./ActiveLink"
import { ThemeBtn } from "./ThemeBtn"
import { Title } from "./Title"

export const Header = () => {
  return (
    <header className='d-flex justify-content-around align-items-center mb-4'>
      <div className="title d-flex">
        <Title className="me-3">Crud Operations</Title>
        <img src="/vite.svg" alt="vite-logo" className="vite-logo"/>
      </div>
      <nav>
        {/* <Link className='mx-3' to="/">Home</Link>
        <Link className='mx-3' to="/create">Create</Link> */}
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/create">Create</ActiveLink>
      </nav>
      <ThemeBtn />
    </header>
  )
}
