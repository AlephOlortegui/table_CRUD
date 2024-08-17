# Crud table

## In order to use json-server

```bash
  npx json-server --watch the_path --port 8000
```

- Port 8000 because React is already using the port 3000
- And `the_path` is the path, where is located your fake data base

### In my case the path would it be
```bash
  npx json-server --watch src/data/db.json --port 8000
```
- ***You need to start json-server before starting react!***

## Packages
```bash
 npm i react-router-dom json-server bootstrap-icons bootstrap
```

# Problems I run to
- in App.js WE CANNOT USE
ThemeContext and ThemeProvider in the same component it crashes the app.

- dependencie array un useFormFx, I put the whole code inside of
useEffect


# useReducer and LS problem
- I did:
```bash
  const [isDark, dispatch] = useReducer(ThemeReducer, null, ()=>{
    const LS_theme = localStorage.getItem('theme');
    return LS_theme ? Boolean(LS_theme) : false;
  })
```
- and everytime I refreshed the page "isDArk" was true all the time
- [FCC](https://www.freecodecamp.org/news/javascript-string-to-boolean/)

- [ReactDocs](https://es.react.dev/reference/react/useReducer)
  ```bash
    function createInitialState(username) {
      // ...
    }

    function TodoList({ username }) {
      const [state, dispatch] = useReducer(reducer, username, createInitialState);
      // ...
      
 -  En el ejemplo anterior, createInitialState toma un argumento
  username. Si tu inicializador no necesita ninguna información 
  para calcular el estado inicial, puedes pasar null como 
  segundo argumento a useReducer.```

## ChatGPT

- By using null as the second argument to useReducer, you allow the reducer to use the value 
returned by the initializer function (the third argument) as the initial state. This ensures 
that the value from localStorage will be correctly used to initialize isDark without any 
implicit conversions to true.

- inspect the page and do
```bash
  console.log(Boolean("false")) = true!
```
### How to Parse a String to a Boolean with the Identity Operator (===)
- [FCC](https://www.freecodecamp.org/news/javascript-string-to-boolean/)

