import { useState } from 'react'
import React from 'react'
import { loginAPICall, saveLoggedInUser, storeToken } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

function LoginComponent() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate()

    async function handleLoginForm(e) {
        e.preventDefault()
        // const  loginObj = {username, password}
        // console.log(loginObj)

        await loginAPICall(username, password).then((response) => {
            console.log(response.data)

            // const token = 'Basic ' + window.btoa(username + ":" + password);
            const token = 'Bearer ' + response.data.accessToken;

            const role = response.data.role;

            storeToken(token)

            saveLoggedInUser(username, role)

            navigator("/todos")

            // 登录后 regiter 和 login 消失
            window.location.reload(false);
        }).catch((error) => {
            // console.error(error)
            console.error('Login error:', error);
        })

    }

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>User Login Form</h2>
                    </div>

                    <div className='card-body'>
                        <form >
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Username:</label>

                                <div className='col-md-9'>
                                    <input type="text"
                                        name='username' className='form-control'
                                        placeholder='Enter Username' value={username}
                                        onChange={(e) => {setUsername(e.target.value)}}
                                    />
                                </div>

                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Password:</label>

                                <div className='col-md-9'>
                                    <input type="password"
                                        name='name' className='form-control'
                                        placeholder='Enter Password' value={password}
                                        onChange={(e) => {setPassword(e.target.value)}}
                                    />
                                </div>

                            </div>

                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={(e) => handleLoginForm(e)}>Submit</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default LoginComponent