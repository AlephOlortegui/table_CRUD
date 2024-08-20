import { Form } from "../components/Form"
import { useFormFx } from "../hooks/useFormFx"

export const Create = () => {
  const {data, 
    handleChange, 
    handleSubmit} = useFormFx('http://localhost:8000/employee', 'POST', "/")

  return (
    <Form title="Create" data={data} handleChange={handleChange} handleSubmit={handleSubmit}/>
  )
}
