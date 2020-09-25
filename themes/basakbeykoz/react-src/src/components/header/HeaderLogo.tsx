import React from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { setDisplaying, setIsMenuOpen } from '../../features/app/appActions'
import { connect } from "react-redux";
// import Cta from './Cta';
import "./_logo.scss";

const mapState = (state: RootState) => ({
    menu: state.menu.items,
    isDisplayingSlug: state.app.isDisplaying.slug,
    refs: state.app.refs,
});

const mapDispatch = {
    setDisplaying,
    setIsMenuOpen,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function HeaderLogo(props: Props): React.FunctionComponentElement<Props> {

    const { 
        // isDisplayingSlug, 
        setDisplaying, 
        setIsMenuOpen, 
        refs 
    } = props;
    const {
        REACT_APP_UPLOADS_DIR: uploads,
        REACT_APP_HOME_SLUG: home_slug,
    } = process.env
    // const [ useCta, setUseCta ] = useState(false);

    const linkClick = () => {
        setIsMenuOpen(false)
        setDisplaying({
            slug: home_slug
        });
        refs.body?.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
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
    // const scrollWait = 
    // const isAtHome = isDisplayingSlug === home_slug;
    // useEffect(() => {
    //     // let useCta = false;
    //     if (isAtHome) {
    //         // const scrollCounter =
    //          setInterval(() => {
    //             const pageY = refs.body?.current?.osInstance()?.scroll().position.y as number;
    //             // console.log('isatpagetop', isAtPageTop);
    //             setUseCta(pageY < 200);
    //         }, 1000)
    
    //     }
    // }, [isAtHome, refs.body])


    // return useCta 
    //     ? (<Cta />) 
    //     : Logo;
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(HeaderLogo);
