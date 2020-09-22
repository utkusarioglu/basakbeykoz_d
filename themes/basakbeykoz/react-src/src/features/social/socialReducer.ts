import stateMap from "../../store/@types-state";

const initialState: stateMap['social'] = {
    items: [
        {
            title: "Instagram",
            link: 'https://www.instagram.com/basak_beykoz/',
            icon: process.env.REACT_APP_UPLOADS_DIR + "/instagram.svg",
        },
        {
            title: "LinkedIn",
            link: 'https://www.linkedin.com/in/basakbeykoz/',
            icon: process.env.REACT_APP_UPLOADS_DIR + "/linkedin.svg",
        },
    ]
}

export default function (
    state = initialState,
): stateMap['social'] {
    return state;
}