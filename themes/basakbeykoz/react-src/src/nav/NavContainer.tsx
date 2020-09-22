import React from "react";
import Nav from './Nav';
import { connect } from "react-redux";
import { setIsMenuOpen } from '../features/app/appActions'
import { RootState } from '../store/rootReducer';
import "./_navContainer.scss";

const mapState = (state: RootState) => ({
    isMenuOpen: state.app.isMenuOpen,
});

const mapDispatch = { 
    setIsMenuOpen,
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function NavContainer(
    props: Props
): React.FunctionComponentElement<Props> {

    const menuToggle = () => {
        props.setIsMenuOpen(!props.isMenuOpen)
    }

    return (
        <div 
            onClick={menuToggle}
            className={"NavContainer " + (props.isMenuOpen ? "open" : "") 
        }>
            <div className="NavContainer-mask" />
            <div className="NavContainer-decor" />
            <div className="NavContainer-list">
                <Nav />
            </div>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(NavContainer);
