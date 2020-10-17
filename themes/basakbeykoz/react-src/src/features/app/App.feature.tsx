import React, { createRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { boundSetRef } from "./appActions";
import AppView from "../../views/app/App.view";
import { RootState } from "../../store/rootReducer";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  setRef: boundSetRef,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function AppFeature(props: Props) {
  const { refs, setRef } = props;

  if (!refs.body) {
    setRef({
      type: "body",
      ref: createRef<OverlayScrollbarsComponent>(),
    });
  }

  return (
    <Router>
      <AppView refs={refs} />
    </Router>
  );
}

export default connector(AppFeature);
