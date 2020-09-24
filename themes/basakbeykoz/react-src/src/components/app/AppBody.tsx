import React, { createRef }  from 'react'
import { connect } from 'react-redux';
import { Route, Switch, } from 'react-router-dom'
import { setRef } from '../../features/app/appActions';

import BlogRoute from "../../routes/BlogRoute";
import CreditsRoute from "../../routes/CreditsRoute";
import BodyRoute from "../../routes/BodyRoute";

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import Footer from '../footer/Footer';
import { RootState } from '../../store/rootReducer';

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

function AppBody(props: Props) {
    const blog_slug = process.env.REACT_APP_BLOG_SLUG as string;
    const {refs, setRef } = props;
    if(!refs.body) {
        setRef({
            type: 'body',
            ref: createRef<OverlayScrollbarsComponent>(),
        });
    }

    return (
        <OverlayScrollbarsComponent 
            ref={refs.body}
            className="App-scrollWindow"
            options={{
                paddingAbsolute: true,
                scrollbars: {
                    autoHide: 'leave'
                }
            }}>
            <div className="App-scrollingElements">
                <Switch>
                    <Route 
                        exact 
                        path={"/credits"}>
                        <CreditsRoute />
                    </Route>
                    <Route 
                        exact 
                        path={"/" + blog_slug}>
                        <BlogRoute />
                    </Route>
                    <Route exact path="/:slug?">
                        <BodyRoute />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </OverlayScrollbarsComponent>
    )
}

export default connect<StateProps, DispatchProps, OwnProps>(
    // @ts-ignore
    mapState, mapDispatch)(AppBody);
