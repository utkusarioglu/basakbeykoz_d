import React from 'react';
import { ISocialItem } from '../../features/social/@types-social';
import ReactGA from "react-ga";
import './_socialIcon.scss';

interface OwnProps {
    item: ISocialItem;
}

type Props = OwnProps;

function SocialItem(props: Props) {

    const { item } = props;

    return (
        <ReactGA.OutboundLink
            eventLabel={item.title}
            to={item.link}
            target="_blank"
        >
            <img 
                className="Social-icon"
                src={item.icon}
                title={item.title} 
                alt={item.title}></img>
            
        </ReactGA.OutboundLink>    
    )
}

export default SocialItem;