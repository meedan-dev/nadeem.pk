import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OutlinedCard from "./Person";
import hassan_nadeem from "./profile_pictures/hassan_nadeem.png";
import usman_nadeem from "./profile_pictures/usman_nadeem.png";
import ar_nadeem from "./profile_pictures/ar_nadeem.png";
import nadeem_hafeez from "./profile_pictures/nadeem_hafeez.jpg";
import { Tree, TreeNode } from "react-organizational-chart";
// import FamilyTree from "./FamilyTree";

const FamilyTree = () => (
  <div>
    {NadeemHafeez}
    {HassanNadeem}
    {UsmanNadeem}
    {MominaNadeem}
    {AbdulRahmanNadeem}
  </div>
);

const NadeemHafeez = (
  <OutlinedCard
    name="Nadeem Hafeez"
    title="Business Man"
    profile_picture={nadeem_hafeez}
    description=""
  />
);

const HassanNadeem = (
  <OutlinedCard
    name="Hassan Nadeem"
    title="Software Engineer"
    profile_picture={hassan_nadeem}
    description=""
  />
);

const UsmanNadeem = (
  <OutlinedCard
    name="Usman Nadeem"
    title="Software Engineer"
    profile_picture={usman_nadeem}
    description=""
  />
);

const AbdulRahmanNadeem = (
  <OutlinedCard
    name="AbdulRahman Nadeem"
    title="Student"
    profile_picture={ar_nadeem}
    description=""
  />
);

const MominaNadeem = <div>Momina Nadeem</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Nadeem's</h3>

        <FamilyTree />
      </header>
    </div>
  );
}

export default App;
