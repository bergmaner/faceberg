import React, { useState } from "react";
import { Avatar, Divider, IconButton } from "@material-ui/core";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import EditUserDetails from "./EditUserDetails";

const Container = styled.div`
  margin-right: 5px;
  @media screen and (max-width: 600px) {
    margin: 0px;
  }
`;

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const changeModeToFalse = () =>{
    setEditMode(false);
  } 
  
  return (
    <Container className="outer">
    {!editMode ? <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Avatar />
          <div style={{ marginLeft: 5 }}>Kacper Berg</div>
        </div>
        <IconButton onClick={() => setEditMode(true)}>
          <EditIcon />
        </IconButton>
      </div>
      <Divider style={{ marginBottom: 10 }} />
      <div>
        <h4 style={{ margin: "5px 0px" }}>About Me</h4> 
        <div>Kolorowy Ziomo 2115</div>
      </div>
      </>
        :
  <EditUserDetails handleClick = {changeModeToFalse}/>
    }
    </Container>
  
  
  );
};
export default Profile;
