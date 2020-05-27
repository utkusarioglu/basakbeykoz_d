import React from 'react';
import CSS from "csstype";

interface Props {}

const styles: {[className: string]: CSS.Properties } = {
    footerContainer: {
        width: "100vw",
        background: "#113366",
        minHeight: "50px", 
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
    },
    footerYearName: {
        color: "white"
    }
}

function Footer(props: Props): React.FunctionComponentElement<Props> {
    return (
        <div style={styles.footerContainer}>
            <span style={styles.footerYearName}>
                { new Date(Date.now()).getFullYear()} - Basak Beykoz
            </span>
        </div>
    )
}

export default Footer
