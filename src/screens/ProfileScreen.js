import React, { Component } from "react";
import Profile from "../components/Profile";

export default class ProfileScreen extends Component {
  render() {
    return (
      <Profile nim="1841720075" nama="MOCHAMMAD ADAM'S ARZAQI"
      email="arzaqiadam45@gmail.com" agama="Islam"
      ttl="Malang, 17-02-2000" jurusan="Teknologi Informasi" prodi="D4 Teknik Informatika" 
      photo="/images/adam.jpeg"></Profile>
    );
  }
}
