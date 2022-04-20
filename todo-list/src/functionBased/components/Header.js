import React from "react";

function Header() {
  const headerStyle = {
    padding: "0px 0",
    lineHeight: "1.5em",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#EB4511",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        CR7 Todos
      </h1>
    </header>
  );
}

export default Header;
