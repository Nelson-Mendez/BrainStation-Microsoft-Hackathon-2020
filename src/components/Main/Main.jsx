import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Info from "../Info/Info";
import LeftBar from "../LeftBar/LeftBar";
import MyTeam from "../MyTeam/MyTeam";
import "./Main.scss";
export default function Main(Props) {
  return (
    <article className="asside">
      <Sidebar />
      <Info>
        <LeftBar />
        <MyTeam />
        {/* <Info /> */}
      </Info>
    </article>
  );
}
