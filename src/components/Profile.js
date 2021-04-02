import React from "react";
const Profile = (props) => {
  return(
    <div>
    <div className="profile">
      <h2>My Profile</h2>
      <table style={{width:800}}>
        <tbody>
          <tr>
            <th>NIM</th>
            <th>{props.nim}</th>
          </tr>
          <tr>
            <th>NAMA</th>
            <th>{props.nama}</th>
          </tr>
            <tr>
            <th>TANGGAL LAHIR</th>
            <th>{props.ttl}</th>
            </tr>
          <tr>
            <th>EMAIL</th>
            <th>{props.email}</th>
            </tr>
            <tr>
            <th>AGAMA</th>
            <th>{props.agama}</th>
            </tr>
            <tr>
            <th>JURUSAN</th>
            <th>{props.jurusan}</th>
            </tr>
            <tr>
            <th>PROGRAM STUDI</th>
            <th>{props.prodi}</th>
            </tr>
            <tr>
            <th>PHOTO</th>
            <th><img alt="mypict" src={props.photo}></img> </th>
            </tr>
         
        </tbody>
      </table>
    </div>
  </div>
  )
  }
  export default Profile;