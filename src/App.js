import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import React, { useEffect, useState } from 'react';
import { Addtodo } from './MyComponents/Addtodo';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { About } from './MyComponents/About';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am deleted", todo);
    settodos(todos.filter((e) => { return e !== todo; }))
  }
  const addTodo = (title, desc) => {
    const isEmpty = Object.keys(todos).length === 0;
    let sno;
    { isEmpty === true ? sno = 0 : sno = todos[todos.length - 1].sno + 1; }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    settodos([...todos, myTodo])
    console.log(myTodo);
  }

  const [todos, settodos] = useState(initTodo);
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)); }, [todos])

  return (
    <>
    <BrowserRouter>
      <Header title="AmitKumar" searchBar={true} />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <>
              <Addtodo addTodo={addTodo} />
              <Todos todo={todos} onDelete={onDelete} />
            </>)
        }}>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
