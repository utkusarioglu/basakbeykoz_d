import React, { createRef }  from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux';
import { setRef } from './appActions';

import AppView from '../../components/app/AppView';
import { RootState } from '../../store/rootReducer';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const mapState = (state: RootState) => ({
    refs: state.app.refs,
})

const mapDispatch = { 
    setRef,
}

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function App(props: Props) {
    const {refs, setRef} = props;

    if(!refs.body) {
        setRef({
            type: 'body',
            ref: createRef<OverlayScrollbarsComponent>(),
        });
    }

    return (
        <Router>
            <AppView refs={refs}/>
        </Router>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(App);
