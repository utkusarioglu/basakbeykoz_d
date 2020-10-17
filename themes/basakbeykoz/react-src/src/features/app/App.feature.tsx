import React, { createRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRef, selectRefs } from "./appActions";
import AppView from "../../views/app/App.view";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

interface Props {}

function AppFeature(props: Props) {
  const dispatch = useDispatch();
  const refs = useSelector(selectRefs);

  if (!refs.body) {
    dispatch(
      setRef({
        type: "body",
        ref: createRef<OverlayScrollbarsComponent>(),
      })
    );
  }

  return (
    <Router>
      <AppView {...{ refs }} />
    </Router>
  );
}

export default AppFeature;
