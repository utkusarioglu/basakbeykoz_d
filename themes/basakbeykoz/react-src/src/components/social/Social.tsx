import React from "react";
import { connect } from 'react-redux';

import "./_social.scss";
import { RootState } from "../../store/rootReducer";
import SocialItem from './SocialItem';

const mapState = (state: RootState) => ({
    socialItems: state.social.items,
});

const mapDispatch = {}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Social(props: Props) {

    const socialItems = props.socialItems;

    const socialComponents = socialItems.map((item) => {
        return <SocialItem item={item} />
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

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Social);

