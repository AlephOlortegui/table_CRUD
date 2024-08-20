export const Form = ({title, data, handleChange,handleSubmit}) => {
  const {username, email, phone} = data;
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className="text-center py-2">{title}</h1>
      <div className="form-floating mb-3">
          <input type="text" placeholder="Name" id="fName" required
          className='form-control' name='username'
          value={username}
          onChange={handleChange}/>
          <label htmlFor="fName">Name</label>
      </div>
      <div className="form-floating mb-3">
          <input type="email" id="fEmail" placeholder='my@xample.com' required 
          className='form-control' name='email'
          value={email}
          onChange={handleChange}/>
          <label htmlFor="fEmail">Email</label>
      </div>
      <div className="form-floating mb-3">
          <input type="text" placeholder="(203)-423-2534" id="fNumber" required
          className='form-control' name='phone'
          value={phone}
          onChange={handleChange}/>
          <label htmlFor="fNumber">Number</label>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="submit">Submit Information</button>
      </div>
    </form>
  )
}
