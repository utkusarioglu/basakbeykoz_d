import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { RootState } from "../../store/rootReducer";

import Spinner from "../../features/spinner/Spinner";
import AppRoutes from "../../features/app/AppRoutes";
import Footer from "../../features/footer/Footer";

import Header from "../header/Header";
import Logo from "../header/Logo";
import Social from "../social/Social";
import NavFixedView from "../nav/NavFixedView";

import "./_app.scss";

interface OwnProps {
  refs: RootState["app"]["refs"];
}

type Props = OwnProps;

function AppView(props: Props) {
  const { refs } = props;
  return (
    <div className="App">
      <Spinner />
      <NavFixedView />
      <Header />
      <div className="App-wideScreenControls">
        <Logo />
        <Social />
      </div>
      <OverlayScrollbarsComponent
        ref={refs.body}
        className="App-scrollWindow"
        options={{
          paddingAbsolute: true,
          scrollbars: {
            autoHide: "leave",
          },
          //   callbacks: {
          //       onScroll: (e) => {
          //           e?.target.scrollTop()
          //     },
          //   },
        }}
      >
        <div className="App-scrollingElements">
          <AppRoutes />
          <Footer />
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
}

export default AppView;
