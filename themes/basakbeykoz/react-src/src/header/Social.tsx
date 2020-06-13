import React from "react";
import { CSSStyles } from "../app/@types-app";

const styles: CSSStyles = {
    social: {
        position: "fixed",
        top: "var(--accent-thickness)",
        right: 0,
        zIndex: 10,
        display: "grid",
        alignItems: "center",
        gridColumnGap: "calc( var(--accent-thickness) / 2)",
        gridAutoFlow: "column",
    },
    decor: {
        width: "var(--accent-thickness)",
        height: "var(--head-section-height)",
        background: "var(--blue)",
        right: 0,
    },
    socialItem: {
        height: "50px",
        width: "50px",
        padding: "10px 10px 10px 10px",
        filter: "var(--blue-filter)",
    },
    socialList: {
        display: "flex",
        flexDirection: "row",
        justifyItems: "right",
        // paddingTop: "var(--accent-thickness)",
        // paddingBottom: "var(--accent-thickness)",
        // paddingRight: "var(--accent-thickness)",
        paddingLeft: 0,
    },
}

function Social() {

    const socialLinks = [
        {
            title: "Instagram",
            link: 'https://www.instagram.com/something',
            icon: process.env.REACT_APP_UPLOADS_DIR + "/instagram.svg",
        },
        {
            title: "LinkedIn",
            link: 'https://www.linkedin.com/something',
            icon: process.env.REACT_APP_UPLOADS_DIR + "/linkedin.svg",
        },
    ]

    const socialComponents = socialLinks.map((link) => {
        return (
            <a 
                key={link.title}
                href={link.link} 
                target="blank">
                <img 
                    style={styles.socialItem} 
                    src={link.icon}
                    title={link.title} 
                    alt={link.title}></img>
            </a>
                
        )
    })

    return (
        <div style={styles.social}>
            <div style={styles.socialList}>
                {socialComponents}
            </div>
            <div style={styles.decor} />
        </div>
    )
}

export default Social
