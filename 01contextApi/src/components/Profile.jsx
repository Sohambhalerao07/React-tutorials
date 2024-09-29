import { useContext } from "react"
import React  from 'react'
import UserContext from "../context/Context"


function Profile() {
    const{user}=  useContext(UserContext) 

 if(!user) return <div>Plesase login</div>
 
 return <div>Welcome {user.username}</div>
}

export default Profile
