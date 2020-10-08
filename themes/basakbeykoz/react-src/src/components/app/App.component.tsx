import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { RootState } from "../../store/rootReducer";

import Spinner from "../../features/spinner/Spinner";
import AppRoutes from "../../features/app/AppRoutes";
import Footer from "../../features/footer/Footer";

import Header from "../header/Header.component";
import Logo from "../header/Logo.component";
import Social from "../social/Social.component";
import NavFixedView from "../nav/NavFixed.component";

import "./_app.component.scss";

interface OwnProps {
  refs: RootState["app"]["refs"];
}

type Props = OwnProps;

function App(props: Props) {
  const { refs } = props;
  return (
    <div className="App">
      <Spinner />
      <NavFixedView />
      <Header />
      <div className="App-wideScreenControls">
        <Logo withTitle={false} />
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

export default App;
