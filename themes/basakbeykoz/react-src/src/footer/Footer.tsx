import React from 'react';
import "./_footer.scss";

interface Props {}

function Footer(props: Props): React.FunctionComponentElement<Props> {
    const up = process.env.REACT_APP_UPLOADS_DIR as string;
    return (
        <div className="Footer">
            <div className="Footer-art">
                <img
                    alt="Footer decoration" 
                    src={up + "/one-on-one.svg"} 
                    />
            </div>
            <div className="Footer-credits">
                <span className="Footer-yearAndName">
                    ♡<br />{ new Date(Date.now()).getFullYear()}<br />Basak Beykoz
                </span>
            </div>
        </div>
    )
}

export default Footer
