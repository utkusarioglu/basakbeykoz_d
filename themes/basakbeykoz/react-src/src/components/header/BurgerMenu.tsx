import React from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../../features/wp/menuActions";
import { setDisplaying, setIsMenuOpen } from '../../features/app/appActions'
import { RootState } from '../../store/rootReducer';
import "./_burgerMenu.scss";

const mapState = (state: RootState) => ({
    menu: state.menu,
    isDisplaying: state.app.isDisplaying,
    isMenuOpen: state.app.isMenuOpen,
});

const mapDispatch = { 
    setDisplaying,
    fetchMenu, 
    setIsMenuOpen,
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function BurgerMenu(
    props: Props
): React.FunctionComponentElement<Props> {

    const uploadsDir = process.env.REACT_APP_UPLOADS_DIR as string;
    const { isMenuOpen, setIsMenuOpen } = props;

    return (
        <div className="BurgerMenu">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="BurgerMenu-burgerButton">
                <img 
                    alt="Menu"
                    src={uploadsDir + "/burger-menu.svg"} />
            </button>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(BurgerMenu);
