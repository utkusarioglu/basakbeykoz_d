import React, { useEffect, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { fetchMenu } from "../actions/menuActions";

interface ReduxProps {
    fetchMenu: () => void,
}

interface wpMenuItem {
    ID: number,
    title: string,
    slug: string,
}

// !HACK any used as type for props
function Header(props: any): React.FunctionComponentElement<ReduxProps> {
    const fetchMenu = props.fetchMenu; 
    useEffect(() => {
        fetchMenu();
    }, [fetchMenu])

    const menuOnClick = (e: SyntheticEvent) => {
        e.preventDefault();
        alert("click");
    }

    const menuItems: JSX.Element[] = props.menu
        .map((item: wpMenuItem) => {
            return (
                <a  key={item.ID} 
                    href={item.slug || 'home'}
                    onClick={(e) => menuOnClick(e)}>
                        {item.title}
                    </a>
            )
        })

    return (
        <header>
            <h1>BasakBeykoz</h1>
            {menuItems}
        </header>
    )
}

// !HACK any used as type
const mapStateToProps = (state: any) => ({
    menu: state.menu.items
});

export default connect(mapStateToProps, { fetchMenu })(Header);