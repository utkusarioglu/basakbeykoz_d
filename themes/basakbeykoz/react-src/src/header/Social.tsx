import React from "react";
import "./_social.scss";



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
                    className="Social-icon"
                    src={link.icon}
                    title={link.title} 
                    alt={link.title}></img>
            </a>       
        )
    })

    return (
        <div className="Social">
            <div className="Social-list">
                {socialComponents}
            </div>
            <div className="Social-decor" />
        </div>
    )
}

export default Social
