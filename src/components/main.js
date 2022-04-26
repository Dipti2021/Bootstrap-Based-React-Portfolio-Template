import React, { useState } from "react";
import Contact from "./contact";
import Homepage from "./homepage";
import Projects from "./projects";
import Header from "./header";

//styling from react-bootstrap

const Main = () => {
  const [active, setActive] = useState(false);

  const renderPage = () => {
    if (active === "home") {
      return <Homepage />;
    }
    if (active === "contact") {
      return <Contact />;
    }
    if (active === "projects") {
      return <Projects />;
    }
  };
  const handlePageChange = (page) => setActive(page);

  return (
    <div>
      <Header active={active} onSelect={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default Main;
