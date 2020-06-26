import React, { Fragment as div } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../app/rootReducer";
import { setDisplaying } from '../app/appActions'
import { connect } from "react-redux";
import "./_logo.scss";

const mapState = (state: RootState) => ({
    menu: state.menu.items
});

const mapDispatch = {
    setDisplaying,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Logo(props: Props): React.FunctionComponentElement<Props> {

    const setDisplaying = () => {
        props.setDisplaying({
            slug: process.env.REACT_APP_HOME_SLUG as string
        })        
    }

    const uploads = process.env.REACT_APP_UPLOADS_DIR;

    return (
        <div className="Logo">
            <div className="Logo-decor" />
            <Link
                onClick={setDisplaying}
                to="/">
                <div 
                    className="Logo-logo"
                    >
                    <img 
                        src={ uploads + "/logo-inline-color.svg"}
                        alt="logo"/>
                </div>
            </Link>
        </div>
    );
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Logo);
