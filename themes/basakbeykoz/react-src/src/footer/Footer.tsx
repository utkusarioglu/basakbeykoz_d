import React from 'react';
import CSS from "csstype";

interface Props {}

const styles: {[className: string]: CSS.Properties } = {
    footerContainer: {
        width: "100vw",
        background: "Black",
        minHeight: "50px", 
        color: "white"
    }
}

function Footer(props: Props): React.FunctionComponentElement<Props> {
    return (
        <div style={styles.footerContainer}>
            Basak Beykoz
        </div>
    )
}

export default Footer
