import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person";
import hassan_nadeem from "./profile_pictures/hassan_nadeem.jpg";
import usman_nadeem from "./profile_pictures/usman_nadeem.png";
import ar_nadeem from "./profile_pictures/ar_nadeem.png";
import nadeem_hafeez from "./profile_pictures/nadeem_hafeez.png";
import momina_nadeem from "./profile_pictures/momina_nadeem.jpg";
import palwisha_nadeem from "./profile_pictures/palwisha_nadeem.png";
import lubna_nadeem from "./profile_pictures/lubna_nadeem.jpg";
import TypeAnimation from "react-type-animation";
import Grid from "@mui/material/Grid";
import { hassan_nadeem_long_description } from "./long_descriptions/HassanNadeem";

const FamilyTree = () => (
  <div
    style={{
      width: "90%",
      height: "auto",
      overflow: "auto",
      alignItems: "center",
    }}
  >
    <Grid
      container
      columns={5}
      sx={{
        display: "grid",
        columnGap: 1,
        rowGap: 1,
        gridTemplateColumns: "repeat(7, 1fr)",
      }}
    >
      <Grid item xs={13} md>
        {NadeemHafeez}
      </Grid>
      <Grid item xs={13} md>
        {LubnaNadeem}
      </Grid>
      <Grid item xs={13} md>
        {HassanNadeem}
      </Grid>
      <Grid item xs={13} md>
        {PalwishaNadeem}
      </Grid>
      <Grid item xs={13} md>
        {UsmanNadeem}
      </Grid>
      <Grid item xs={13} md>
        {MominaNadeem}
      </Grid>
      <Grid item xs={13} md>
        {AbdulRahmanNadeem}
      </Grid>
    </Grid>
  </div>
);

const NadeemHafeez = (
  <Person
    name="Nadeem Hafeez"
    title="Business Man"
    profile_picture={nadeem_hafeez}
    description="Owns Nadeem Fruit Comission buissness"
    // long_description="Nadeem (Muhammad) Hafeez"
  />
);

const LubnaNadeem = (
  <Person
    name="Lubna Nadeem"
    title="Nadeem Home Minister"
    profile_picture={lubna_nadeem}
    description="Runs the Home"
    // long_description="Lubna (Inam Ul Haq) Nadeem"
  />
);

const HassanNadeem = (
  <Person
    name="Hassan Nadeem"
    title="Software Engineer"
    profile_picture={hassan_nadeem}
    description="Software Developer at Bloomberg"
    long_description={hassan_nadeem_long_description}
    email="me@hassannadeem.com"
    weblink="https://hassannadeem.com"
    twitter="https://twitter.com/MHassanNadeem"
    facebook="https://facebook.com/The.Hassan.Nadeem"
    github="https://github.com/MHassanNadeem"
    instagram="https://instagram.com/MHassanNadeem"
    linkedin="https://www.linkedin.com/in/mhassannadeem/"
  />
);

const UsmanNadeem = (
  <Person
    name="Usman Nadeem"
    title="Software Engineer"
    profile_picture={usman_nadeem}
    description="Compiler Engineer at Qualcomm"
    // long_description="Muhammad Usman Nadeem"
    linkedin="https://www.linkedin.com/in/unadeem/"
  />
);

const AbdulRahmanNadeem = (
  <Person
    name="AbdulRahman Nadeem"
    title="Student"
    profile_picture={ar_nadeem}
    description="Studying at FAST NU Lahore"
    weblink="https://ar.nadeem.pk"
    twitter="https://twitter.com/The_Ar_Nadeem"
    github="https://github.com/ar-nadeem"
    instagram="https://www.instagram.com/the.ar.nadeem/"
    linkedin="https://www.linkedin.com/in/abdulrahman-nadeem-0744b718a/"
  />
);

const MominaNadeem = (
  <Person
    name="Momina Nadeem"
    title="Fashion Industry"
    profile_picture={momina_nadeem}
    description="Marketing Executive at Fozia Khalid"
    weblink="https://momina.nadeem.pk"
    instagram="https://www.instagram.com/mominaverse/"
    linkedin="https://www.linkedin.com/in/momina-nadeem-b81a32162/"
  />
);

const PalwishaNadeem = (
  <Person
    name="Palwisha Nadeem"
    title="Artist"
    profile_picture={palwisha_nadeem}
    description="Taking time-off"
    // long_description="Palwisha (Ismail) Nadeem"
    instagram="https://www.instagram.com/monochromaticconfetti/"
    linkedin="https://www.linkedin.com/in/palwisha-nadeem/"
  />
);

const names = [
  "Hassan Nadeem",
  "Usman Nadeem",
  "Momina Nadeem",
  "AbdulRahman Nadeem",
  "Palwisha Nadeem",
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
