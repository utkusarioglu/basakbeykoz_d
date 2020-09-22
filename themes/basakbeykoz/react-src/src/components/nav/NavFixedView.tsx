import React from "react";
import Nav from '../../features/nav/Nav';
import { connect } from "react-redux";
import { setIsMenuOpen } from '../../features/app/appActions'
import { RootState } from '../../store/rootReducer';
import "./_navFixedView.scss";

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

function NavFixedView(
    props: Props
): React.FunctionComponentElement<Props> {

    const menuToggle = () => {
        props.setIsMenuOpen(!props.isMenuOpen)
    }

    return (
        <div 
            onClick={menuToggle}
            className={"NavFixedView " + (props.isMenuOpen ? "open" : "") 
        }>
            <div className="NavFixedView-mask" />
            <div className="NavFixedView-decor" />
            <div className="NavFixedView-list">
                <Nav />
            </div>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(NavFixedView);
