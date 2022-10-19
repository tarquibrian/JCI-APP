import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Panel from "../../components/Panel/Panel";
import { user_list } from "../../Data/users_list";

const Profile = () => {
  console.log(user_list[0])
  return (
    <>
      <Dashboard>
        <Panel>
          <h1>PERFIL JCI</h1>
          
        </Panel>
      </Dashboard>
    </>
  );
};

export default Profile;
