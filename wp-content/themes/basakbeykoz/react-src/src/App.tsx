import React, {useState} from "react";
import "./App.css";
import WPAPI, { WPRequest } from "wpapi";

import Header from "./components/Header";

interface wpMenuItem {
    title: string,
    slug: string,
}

function App() {
    
    // const [content, setContent] = useState("coming");
    // const [menu, setMenu] = useState("");
    
    // const wp = new WPAPI({endpoint: "./wp-json"})
    // wp.menus = wp.registerRoute("menus/v1", "/menus/(?P<term_id>)");

    // (wp.menus().termId(8) as WPRequest).get((err: Error, data: any) => {
    //     if(err) {
    //         setMenu("Something went wrong")
    //     } else {
    //         const menu_components = data.items.map((item: wpMenuItem) => {
    //             return <a href="{item.slug}">{item.title}</a>
    //         })
    //         console.log(data.items)
    //         setMenu(menu_components)
    //     }
    // })


    // wp.posts().get((err, data) => {
    //     if(err) {
    //         setContent("Something went wrong")
    //     } else {
    //         // console.log(data)
    //         setContent("Data gotten")
    //     }
    // })

    // fetch("./wp-json/menus/v1/menus/some-menu")
    //     .then((data) => data.json())
    //     .then((json) => {
    //         const links = json.items.map((item: wpMenuItem) => {
    //             return "a"
    //         })
    //         setContent(links)
    //     });

    const menu = "this is where the menu will be"

    return (
        <div className="App">
            <Header />
            <p>{menu}</p>
            {/* <p>{content}</p> */}
        </div>
    );
}

export default App;
