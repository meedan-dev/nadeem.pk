import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OutlinedCard from "./Person";
import hassan_nadeem from "./profile_pictures/hassan_nadeem.jpg";
import usman_nadeem from "./profile_pictures/usman_nadeem.png";
import ar_nadeem from "./profile_pictures/ar_nadeem.png";
import nadeem_hafeez from "./profile_pictures/nadeem_hafeez.jpg";
import momina_nadeem from "./profile_pictures/momina_nadeem.jpg"
import { Tree, TreeNode } from "react-organizational-chart";
import TypeAnimation from "react-type-animation";
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
// import FamilyTree from "./FamilyTree";

const FamilyTree = () => (
  <div>
    <Grid container   sx={{
    display: 'grid',
    columnGap: 1,
    rowGap: 1,
    gridTemplateColumns: 'repeat(5, 1fr)',
  }}
  
  >
    <Grid item>
    {NadeemHafeez}
    </Grid>
    <Grid item>
    {HassanNadeem}
    </Grid>
    <Grid item>
    {UsmanNadeem}
    </Grid>
    <Grid item>
    {MominaNadeem}
    </Grid>
    <Grid item>
    {AbdulRahmanNadeem}
    </Grid>
  </Grid>

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

const MominaNadeem = (
  <OutlinedCard
    name="Momina Nadeem"
    title="Fashion Industry"
    profile_picture={momina_nadeem}
    description=""
  />
);
const names = [
  "Hassan Nadeem",
  "Usman Nadeem",
  "Momina Nadeem",
  "AbdulRahman Nadeem",
];

const TypingHeader = () => {
  const delay = 5000;
  const sequence = names
    .map((name, i) => {
      return [name, delay];
    })
    .flat();

  return (
    <div style={{ width: "20em" }}>
      <TypeAnimation
        cursor={true}
        sequence={sequence}
        wrapper="h2"
        repeat={Infinity}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Nadeem's</h3>
        <TypingHeader />

        <FamilyTree />
      </header>
    </div>
  );
}

export default App;
