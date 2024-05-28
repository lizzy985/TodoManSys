import { useState } from 'preact/hooks'
import React from 'react'
import { completeTodo, deleteTodo, getALLTodos, inCompleteTodo } from '../services/TodoService'
import { useEffect } from 'preact/hooks'
import { useNavigate } from 'react-router-dom'
import { isAdminUser } from '../services/AuthService'

function ListTodoComponents() {
  
    // const dummyDtata = [
    //     {
    //         "id": 1,
    //         "title": "Learn Java",
    //         "description": "Learn java with projects",
    //         "completed": false
    //     },
    //     {
    //         "id": 2,
    //         "title": "Learn React",
    //         "description": "Learn React with projects",
    //         "completed": false
    //     },
    //     {
    //         "id": 3,
    //         "title": "Learn Spring",
    //         "description": "Learn Spring with projects",
    //         "completed": false
    //     }
    // ]

    // 把dummyData 挂到todos
    // const [todos, setTodos] = useState(dummyDtata)
    const [todos, setTodos] = useState([])

    const navigator = useNavigate()

    const isAdmin = isAdminUser()

    //whenever you want to make a REST API call or Ajax call in a react functional component, you can use useEffect
    useEffect(() => {
        listTodos()
    }, [])

    function listTodos() {
        getALLTodos().then((response) => {
            setTodos(response.data);
        }).catch((error) => {
            console.error(error)
        })
    }
 
    function addNewTodo() {
        navigator('/add-todo')
    }

    function updateTodo(id) {
        console.log(id)
        navigator(`/update-todo/${id}`)//反引号 backtick symbol
    }

    function removeTodo(id){
        console.log(id)
        deleteTodo(id).then((response) => {
        listTodos()
        }).catch((error) => {
            console.error(error)
        })
    }

    function finishedTodo(id) {
        completeTodo(id).then((response) => {
            console.log(response.data);
            listTodos();
        }).catch((error) => {
            console.error(error)
        })
    }

    function markInCompleteTodo(id) {
        inCompleteTodo(id).then((response) => {
            console.log(response.data)
            listTodos()
        }).catch((error) => {
            console.error(error)
        })
    }
    
  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>

        {
            isAdmin && 
            <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
        }

        {/* 不能加括号 即addNewTodo()  页面直接跳转add-todo*/}
        {/* <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button> */}

        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => 
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'YES': 'NO'}</td> 
                                <td>
                                    {/*  此 updateTodo(todo.id) 并非TodoService的updateTodo*/}
                                    {
                                        isAdmin &&  
                                        <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                    }
                                    {
                                        isAdmin && 
                                        <button className='btn btn-danger' onClick={() => removeTodo(todo.id)} style={{marginLeft: "10px"}}>Delete</button>
                                    }
                                    
                                    <button className='btn btn-success' onClick={() => finishedTodo(todo.id)} style={{marginLeft: "10px"}}>Complete</button>
                                    <button className='btn btn-info' onClick={() => markInCompleteTodo(todo.id)} style={{marginLeft: "10px"}}>In Complete</button>
                                </td>   
                            </tr>
                            
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListTodoComponents