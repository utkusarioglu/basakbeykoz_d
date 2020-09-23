import React from 'react';
import "./_footer.scss";
import { Link } from "react-router-dom";

interface Props {}

function Footer(props: Props): React.FunctionComponentElement<Props> {
    const up = process.env.REACT_APP_UPLOADS_DIR as string;
    return (
        <div className="Footer">
            <div className="Footer-art">
                <img
                    className="Footer-art-fg"
                    alt="Footer decoration" 
                    src={up + "/footer-art-fg.svg"} 
                    />
            </div>
            <Link
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

export default Footer
