import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store/rootReducer";
import SpinnerView from '../../components/spinner/SpinnerView';

const mapState = (state: RootState) => ({
    isFetching: state.app.isFetching,
})

const mapDispatch = {}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>
type Props = DispatchProps & StateProps & OwnProps;

function Spinner(props: Props): React.FunctionComponentElement<Props> {

    // !TODO you use redux, useState shouldn't be   

    const { isFetching } = props;
    const loadingMessages = [
        "Hemen geliyor",
        "Tazeden gelsin",           
        "Ailecek yukluyoruz",
        "Sayfa bizden, okumak sizden",
        "Aaa negezel yukluyo",
    ];

    // selects a random message from loading messages array
    const loadingMessage = loadingMessages[
        Math.floor(Math.random()*(loadingMessages.length - 1))
    ] + "...";

    return (
        <SpinnerView 
            display={isFetching ? 'grid' : 'none'} 
            loadingMessage={loadingMessage} />
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    //@ts-ignore,
    mapState, mapDispatch)(Spinner);
