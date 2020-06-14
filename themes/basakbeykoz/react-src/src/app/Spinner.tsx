import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CSSStyles } from "./@types-app";
import { RootState } from "./rootReducer";

const mapState = (state: RootState) => ({
    isFetching: state.app.isFetching,
})

const mapDispatch = {}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>
type Props = DispatchProps & StateProps & OwnProps;

const styles: CSSStyles = {
    spinnerContainer: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "none",
        justifyItems: "center",
        gridRowGap: "1em",
        gridTemplateRows: "45% 65%",
        zIndex:11,
        backgroundColor: "rgba(255,255,255, 0.3)",
    },
    logo: {
        alignSelf: "end",
        height: "60px",
        filter: "var(--blue-filter)"
        // marginBottom: "100px"
    },
    loadingText: {
        alignSelf: "top",
        color: "var(--blue)",
        fontSize: "25px"
    }
}

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
        <div style={{...styles.spinnerContainer, display}}>
            <img 
                src={ uploadsDir + "/logo-inline-black.svg"}
                alt="Basak Beykoz"
                style={styles.logo}
                ></img>
            <p 
                style={styles.loadingText}
                >{ loadingMessage }</p>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore,
    mapState, mapDispatch)(Spinner);
