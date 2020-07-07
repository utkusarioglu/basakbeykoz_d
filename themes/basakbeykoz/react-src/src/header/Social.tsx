import React from "react";
import ReactGA from "react-ga";
import "./_social.scss";



function Social() {

    const socialLinks = [
        {
            title: "Instagram",
            link: 'https://www.instagram.com/basak_beykoz/',
            icon: process.env.REACT_APP_UPLOADS_DIR + "/instagram.svg",
        },
        {
            title: "LinkedIn",
            link: 'https://www.linkedin.com/in/basakbeykoz/',
            icon: process.env.REACT_APP_UPLOADS_DIR + "/linkedin.svg",
        },
    ]

    const socialComponents = socialLinks.map((link) => {
        return (
            <ReactGA.OutboundLink
                eventLabel={link.title}
                to={link.link}
                target="_blank"
                // trackerNames={['tracker2']}
            >
                <img 
                    className="Social-icon"
                    src={link.icon}
                    title={link.title} 
                    alt={link.title}></img>
                
            </ReactGA.OutboundLink>    
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
