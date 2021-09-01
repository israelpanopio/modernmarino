import React from "react";

const About = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "Right",
          alignItems: "Right",
          height: "100vh"
        }}
      >
        <h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
      </div>
    </div>
  );
};

export default About;
