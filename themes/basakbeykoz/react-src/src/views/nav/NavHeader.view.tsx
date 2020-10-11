import React from "react";
import Nav from "../../features/nav/Nav.feature";
import "./_navHeader.view.scss";

function NavView() {
  return (
    <div className="NavHeaderView">
      <Nav />
    </div>
  );
}

export default NavView;
