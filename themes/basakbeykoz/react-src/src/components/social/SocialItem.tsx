import React from 'react';
import { connect } from 'react-redux';
import { ISocialItem } from '../../features/social/@types-social';
import {setIsMenuOpen} from '../../features/app/appActions';
import ReactGA from "react-ga";
import { RootState } from "../../store/rootReducer";
import './_socialIcon.scss';

interface OwnProps {
    item: ISocialItem;
}

const mapState = (state: RootState) => ({
});

const mapDispatch = {
    setIsMenuOpen,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function SocialItem(props: Props) {

    const { item, setIsMenuOpen } = props;

    return (
        <ReactGA.OutboundLink
            eventLabel={item.title}
            onClick={() => setIsMenuOpen(false) }
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


export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(SocialItem);
