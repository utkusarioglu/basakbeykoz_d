import React from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { setDisplaying, setIsMenuOpen } from "../../features/app/appActions";
import { connect, ConnectedProps } from "react-redux";
import { Env } from "../../common/@types-common";
import "./_logo.component.scss";

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});
const mapDispatch = {
  setDisplaying,
  setIsMenuOpen,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {
  withTitle: boolean;
}
type Props = OwnProps & PropsFromRedux;

function Logo(props: Props) {
  const { setDisplaying, setIsMenuOpen, refs, withTitle } = props;
  const uploads = process.env.REACT_APP_UPLOADS_DIR;
  const { REACT_APP_HOME_SLUG } = process.env as Env;

  const linkClick = () => {
    setIsMenuOpen(false);
    setDisplaying({
      slug: REACT_APP_HOME_SLUG,
    });
    refs.body?.current?.osInstance()?.scroll(0, 500, "easeInOutSine");
  };

  const logoName = withTitle
    ? "logo-inline-color-w-title.svg"
    : "logo-inline-color.svg";

  return (
    <div className="Logo">
      <div className="Logo-decor" />
      <Link onClick={linkClick} to="/">
        <div className="Logo-logo">
          <img src={uploads + "/" + logoName} alt="logo" />
        </div>
      </Link>
    </div>
  );
}

export default connector(Logo);
