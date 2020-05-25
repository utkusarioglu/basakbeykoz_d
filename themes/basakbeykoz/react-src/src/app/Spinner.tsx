import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CSS from "csstype";
import { RootState } from "./rootReducer";

const mapState = (state: RootState) => ({
    isFetching: state.app.isFetching,
})

const mapDispatch = {}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>
type Props = DispatchProps & StateProps & OwnProps;

const styles: {[className: string]: CSS.Properties} = {
    spinnerContainer: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "none",
        justifyItems: "center",
        alignItems: "center",
    }
}

function Spinner(props: Props): React.FunctionComponentElement<Props> {

    const [display, setDisplay] = useState("none");

    useEffect(() => {
        if(props.isFetching) {
            setDisplay("grid");
        } else {
            setDisplay("none");
        }
    }, [props.isFetching]);

    return (
        <div style={{...styles.spinnerContainer, display}}>
            <h1>Thinking...</h1>
        </div>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore,
    mapState, mapDispatch)(Spinner);
