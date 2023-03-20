import React, { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
   const [userList , setUserList] = useState([]);

   useEffect(()=>{
      axios.get('https://randomuser.me/api/?results=20').then(
        (response)=>{
          setUserList(response.data.results);
          console.log(response.data.results);
        }
      )
   },[]);
    return(
      <>
        <div className="main">
          <h1>User Details</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <table className="list-group">
            <thead>
             <tr className="list-group-item">
              <th>Results..</th>
             </tr>
            </thead>
            <tbody>
             {userList.map((elem, idx)=>{
              return(
                <tr className="list-group-item">
                  <td className="p-3">{idx + 1}</td>
                  <td  className="p-3">
                    <img src={elem.picture.large} alt="p"/>
                  </td>
                   <td  className="p-3">
                    <h4>{elem.username}</h4>
                  </td> 
                  <td  className="p-3">
                    <h4>{elem.gender}</h4>
                  </td>
                  <td  className="p-3">
                    <h4>{elem.email}</h4>
                  </td>
                </tr>
              )
             })}
            </tbody>
          </table>
        </div>
      
      </>
    )
}

export default Users