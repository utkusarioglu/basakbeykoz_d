import React, { useEffect, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../wp/menuActions";
import { fetchPost, fetchCategoryPosts } from '../wp/postActions';
import { fetchPage } from "../wp/pageActions";
import CSS from 'csstype';
import { wpMenuItem } from '../wp/@types-wp'

interface ReduxProps {
    fetchMenu: typeof fetchMenu,
    fetchPost: typeof fetchPost,
    fetchCategoryPosts: typeof fetchCategoryPosts,
    fetchPage: typeof fetchPage,
}



const styles: { [className: string]: CSS.Properties} = {
    nav: {
    },
    navItem: {
        padding: "0 15px",
        textDecoration: "none",
        color: "black",
    }
}

// !HACK any used as type for props
function Nav(props: ReduxProps & any): React.FunctionComponentElement<ReduxProps> {
    const fetchMenu = props.fetchMenu; 
    useEffect(() => {
        fetchMenu();
    }, [fetchMenu])

    const menuOnClick = (e: SyntheticEvent, url: string) => {
        e.preventDefault();
        
        const params = url.split("?")[1];
        if (params) {
            const [type, id] = params.split("=");
            switch (type) {

                case "page_id":
                    props.fetchPage(id)
                    break;
                
                case "p":
                    props.fetchPost(id)
                    break;

                case "cat":
                    props.fetchCategoryPosts(id)
                    break
                
                    default:
                    console.error("unrecognized param type:", type, id)
            }
        } else {
            props.fetchPage(54)
        }
    }

    const menuItems: JSX.Element[] = props.menu
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
        <nav style={styles.nav}>
            {menuItems}
        </nav>
    )
}

// !HACK any used as type
const mapStateToProps = (state: any) => ({
    menu: state.menu.items
});

export default connect(mapStateToProps, { 
    fetchMenu, 
    fetchPost, 
    fetchPage,
    fetchCategoryPosts,
})(Nav);
