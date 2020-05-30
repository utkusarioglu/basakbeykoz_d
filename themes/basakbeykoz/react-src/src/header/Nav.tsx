import React, { useEffect, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../wp/menuActions";
import { fetchPost, fetchCategoryPosts } from '../wp/postActions';
import { isDisplaying, isFetching } from '../app/appActions'
import { fetchPage } from "../wp/pageActions";
import CSS from 'csstype';
import { wpMenuItem } from '../wp/@types-wp'
import { RootState } from '../app/rootReducer'

const mapState = (state: RootState) => ({
    menu: state.menu,
    isDisplaying: state.app.isDisplaying,
    pages: state.pages.single,
});

const mapDispatch = { 
    isFetching,
    isDisplaying,
    fetchMenu, 
    fetchPost, 
    fetchPage,
    fetchCategoryPosts,
}

interface OwnProps { }
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

// TODO better static typing for style elements
const styles: { [className: string]: CSS.Properties} = {
    navDecor: {
        width: "var(--accent-thickness)",
        height: "100%",
        background: "var(--yellow)",
        position: "absolute",
        right: 0,
    },
    navWrap: {
        padding: "5px",
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
    },
    navList: {
        display: "flex",
        flexDirection: "column",
        padding: "30px 30px 30px 0",
    },
    navItem: {
        padding: "10px 15px",
        textDecoration: "none",
        fontSize: "24px",
        textAlign: "right",
        color: "var(--blue)",
    }
}

function Nav(
    props: Props
): React.FunctionComponentElement<Props> {
    const fetchMenu = props.fetchMenu; 
    useEffect(() => {
        fetchMenu("nav");
    }, [fetchMenu])

    const menuOnClick = (e: SyntheticEvent, url: string) => {
        e.preventDefault();


        // console.log("props", props)
        
        const params = url.split("?")[1];
        if (params) {
            const [type, id] = params.split("=");
            const id_int = parseInt(id);

            props.isFetching(true);
            
            switch (type) {
                
                case "page_id":
                    props.isDisplaying({
                        type: "page",
                        id: id_int,
                    });

                    // props.fetchPage(id_int)
                    break;
                
                case "p":
                    props.isDisplaying({
                        type: "post",
                        id: id_int,
                    });
                    props.fetchPost(id_int)
                    break;

                case "cat":
                    props.fetchCategoryPosts(id_int)
                    break
                
                    default:
                    console.error("unrecognized param type:", type, id)
            }
        } else {
            const home_id = parseInt(process.env.REACT_APP_HOME_ID as string)

            props.isDisplaying({
                type: "page",
                id: home_id,
            })    

            // props.fetchPage(home_id);
        }
    }

    const menuItems: JSX.Element[] = props.menu.items
        .map((item: wpMenuItem) => {
            return (
                <a  key={item.ID} 
                    href={item.url}
                    style={styles.navItem}
                    onClick={(e) => menuOnClick(e, item.url)}>
                        {item.title}
                    </a>
            )
        })

    return (
        <div style={styles.navWrap}>
            <div style={styles.navDecor} />
            <nav style={styles.navList}>
                {menuItems}
            </nav>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore
    mapState, mapDispatch, )(Nav);
