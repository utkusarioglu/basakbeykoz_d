import React from 'react';
import "./_footer.scss";
import { Link } from "react-router-dom";

interface Props {
    navClickActions: () => void;
}

function FooterView(props: Props): React.FunctionComponentElement<Props> {
    const { REACT_APP_UPLOADS_DIR } = process.env;
    const {navClickActions} = props;
    return (
        <div className="Footer">
            <div className="Footer-art">
                <img
                    className="Footer-art-fg"
                    alt="Footer decoration" 
                    src={REACT_APP_UPLOADS_DIR + "/footer-art-fg.svg"} 
                    />
            </div>
            <Link
                onClick={navClickActions}
                to="/credits">
                <div className="Footer-credits">
                    <span className="Footer-yearAndName">
                        ♡<br />{ new Date(Date.now()).getFullYear()}<br />Basak Beykoz
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default FooterView
