import React , {useEffect , useState} from 'react'
import axios from 'axios'
import './css.css'

function UserList() {
    const [ users , setUsers]=useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(Response=>setUsers(Response.data))
    }, [])
  return (
    <div>
        <h2>list of users</h2>
        <ul>
            <li>
            {users&&users.map(e=><h1>{e.name}</h1>)}
            </li>
        </ul>
      
    </div>
  )
}

export default UserList
