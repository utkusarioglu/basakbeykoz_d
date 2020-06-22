import React, { useEffect, useState } from "react";
import "./_spinner.scss";
import { connect } from "react-redux";
// import { CSSStyles } from "./@types-app";
import { RootState } from "../app/rootReducer";

const mapState = (state: RootState) => ({
    isFetching: state.app.isFetching,
})

const mapDispatch = {}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>
type Props = DispatchProps & StateProps & OwnProps;

function Spinner(props: Props): React.FunctionComponentElement<Props> {

    // !TODO you use redux, useState shouldn't be here
    const [display, setDisplay] = useState("none");
    const uploadsDir = process.env.REACT_APP_UPLOADS_DIR;
    const loadingMessages = [
        "Hemen geliyor",
        "Tazeden gelsin",
        "Ailecek yukluyoruz",
        "Sayfa bizden, okumak sizden",
        "Aaa negezel yukluyo",
    ];

    useEffect(() => {
        if(props.isFetching) {
            setDisplay("grid");
        } else {
            setDisplay("none");
        }
    }, [props.isFetching]);

    // selects a random message from loading messages array
    const loadingMessage = loadingMessages[
        Math.floor(Math.random()*(loadingMessages.length - 1))
    ] + "...";

    return (
        <div 
            className="Spinner"
            style={{display}}>
            <img 
                src={ uploadsDir + "/logo-inline-black.svg"}
                alt="Basak Beykoz"
                className="Spinner-logo"/>
            <p 
                className="Spinner-loadMessage"
                >{ loadingMessage }</p>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore,
    mapState, mapDispatch)(Spinner);
