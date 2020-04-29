import React from "react";
import "./Sidebar.scss";
import bell from '../../assets/svg/bell.svg';
import bubble from '../../assets/svg/bubble.svg';
import people from '../../assets/svg/people.svg';
import file from '../../assets/svg/files.svg';
import gear from '../../assets/svg/gear.svg';

import question from '../../assets/svg/question.svg';
import Icon from "../Icon/Icon";

const tabList = [
  {
    image: bell,
    title: "Activity"

  },
  {
    image: bubble,
    title: "Chat"
  },
  {
    image: people,
    title: "Teams"
  },
  {
    image: file,
    title: "Files"
  },
  {
    image: gear,
    title: "Productivity"
  }
]

const helpList = [
  {
    image: question,
    title: "Help"
  }
]


export default function Sidebar(Props) {
  return (
    <aside className="sidebar">
      <div>
        {
          tabList.map(tab => <Icon icon={tab}/>)
        }
      </div>
      <div>
        {
          helpList.map(help => <Icon icon={help}/>)
        }
      </div>
    </aside>
  );
}
