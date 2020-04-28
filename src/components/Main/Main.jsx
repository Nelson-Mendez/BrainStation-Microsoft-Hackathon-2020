import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Info from "../Info/Info";
import LeftBar from "../LeftBar/LeftBar";
import "./Main.scss";
export default function Main(Props) {
  return (
    <section>
      <article className="asside">
        <Sidebar />
        <div className="content">
          <LeftBar />
          <Info />
        </div>
      </article>
    </section>
  );
}
