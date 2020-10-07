import React from "react";
import { Link } from "react-router-dom";
import "./_footer.component.scss";

interface Props {
  navClickActions: () => void;
}

function FooterView(props: Props) {
  const { REACT_APP_UPLOADS_DIR } = process.env;
  const { navClickActions } = props;
  return (
    <div className="Footer">
      <div className="Footer-backdrop" />
      <div className="Footer-elements">
        <div className="Footer-elements-art">
          <img
            className="Footer-elements-art-fg"
            alt="Footer decoration"
            src={REACT_APP_UPLOADS_DIR + "/footer-art-fg.svg"}
          />
        </div>
        <Link onClick={navClickActions} to="/credits">
          <div className="Footer-elements-credits">
            <span className="Footer-elements-credits-yearAndName">
              ♡
              <br />
              {new Date(Date.now()).getFullYear()}
              <br />
              Başak Beykoz
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FooterView;
