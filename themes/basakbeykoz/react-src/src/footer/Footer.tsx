import React from 'react';
import CSS from "csstype";

interface Props {}

const styles: {[className: string]: CSS.Properties } = {
    footerContainer: {
        width: "160px",
        height: "160px",
        background: "#113366",
        padding: "15px",
        display: "grid",
        justifyItems: "end",
        alignItems: "end",
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    footerYearName: {
        color: "var(--white)",
        textAlign: "right"
    }
}

function Footer(props: Props): React.FunctionComponentElement<Props> {
    return (
        <div style={styles.footerContainer}>
            <span style={styles.footerYearName}>
            ♡<br />{ new Date(Date.now()).getFullYear()}<br />Basak Beykoz
            </span>
        </div>
    )
}

export default Footer
