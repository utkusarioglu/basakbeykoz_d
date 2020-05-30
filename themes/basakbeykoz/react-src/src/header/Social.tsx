import React from "react";
import CSS from "csstype";

const styles: {[className: string]: CSS.Properties} = {
    socialItem: {
        height: "50px",
        width: "50px",
        padding: "10px 10px 10px 10px",
        filter: "invert(20%) sepia(6%) saturate(6426%) hue-rotate(153deg) brightness(98%) contrast(89%)",
    },
    socialList: {
        display: "flex",
        flexDirection: "row",
        justifyItems: "right",
        paddingTop: "var(--accent-thickness)",
        paddingBottom: "var(--accent-thickness)",
        paddingRight: "var(--accent-thickness)",
        paddingLeft: 0,
    },
    socialWrap: {
        position: "fixed",
        top: "var(--accent-thickness)",
        right: 0,
    },
    socialDecor: {
        width: "var(--accent-thickness)",
        height: "100%",
        background: "var(--blue)",
        position: "absolute",
        right: 0,
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
            <a href={link.link} target="blank">
                <img 
                    style={styles.socialItem} 
                    src={link.icon}
                    title={link.title} 
                    alt={link.title}></img>
            </a>
                
        )
    })

    return (
        <div style={styles.socialWrap}>
            <div style={styles.socialDecor} />
            <div style={styles.socialList}>
                {socialComponents}
            </div>
        </div>
    )
}

export default Social
