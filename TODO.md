# Edit jsx
```bash 

  const {data: user, setData, handleSubmit, handleChange} = useFormFx(`http://localhost:8000/employee/${id}`,'PUT',-1)
  const {isPending, error, data1} = useFetch(`http://localhost:8000/employee/${id}`,setData)
  console.log(data1, user)

```
- preguntar a chatGPT dale todo 
- si! setData es importante por ahora
- como es posible la comunicacion de SetData? y afecta esto?
