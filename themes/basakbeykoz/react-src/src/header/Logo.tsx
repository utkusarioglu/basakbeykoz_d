import React from "react";
import { Link } from "react-router-dom";
import { RootState } from "../store/rootReducer";
import { setDisplaying, setIsMenuOpen } from '../features/app/appActions'
import { connect } from "react-redux";
import "./_logo.scss";

const mapState = (state: RootState) => ({
    menu: state.menu.items
});

const mapDispatch = {
    setDisplaying,
    setIsMenuOpen,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Logo(props: Props): React.FunctionComponentElement<Props> {

    const { setDisplaying, setIsMenuOpen } = props;
    const uploads = process.env.REACT_APP_UPLOADS_DIR;
    const home_slug = process.env.REACT_APP_HOME_SLUG as string

    const linkClick = () => {
        setIsMenuOpen(false)
        setDisplaying({
            slug: home_slug
        })        
    }

    return (
        <div className="Logo">
            <div className="Logo-decor" />
            <Link
                onClick={linkClick}
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
