import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import UserImages from "../containers/UserImages"
import axios from "axios"
import { Container, Button } from "reactstrap"

const MyProfilePage = () =>{
  const [user, setUser] = useState({})
  const history = useHistory()

  useEffect(()=>{
    document.title="My Profile"
    axios.get(`https://insta.nextacademy.com/api/v1/users/me`, 
    {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(result => {
        setUser(result.data)
      })
      .catch(error => {
        console.log('ERROR: ', error)
    })
  },[])
  console.log(user)
  return (
    <Container>
      {
        user ?
        <div className="text-center m-3">
          <img src={user.profile_picture} alt={user.username} width="150" className="rounded-circle img-thumbnail img-fluid" />
          <h3>@ {user.username}</h3>
        </div>
        : null
      }
      <Button onClick={()=>{history.push("/upload")}}>Upload image!</Button>
      <UserImages userId={user.id}/>
    </Container>
  )
}

export default MyProfilePage