import React from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { setDisplaying, setIsMenuOpen } from "../../features/app/appActions";
import { connect } from "react-redux";
import "./_logo.scss";

const mapState = (state: RootState) => ({
  refs: state.app.refs,
});

const mapDispatch = {
  setDisplaying,
  setIsMenuOpen,
};

interface OwnProps {
  withTitle: boolean;
}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function Logo(props: Props): React.FunctionComponentElement<Props> {
  const { setDisplaying, setIsMenuOpen, refs, withTitle } = props;
  const uploads = process.env.REACT_APP_UPLOADS_DIR;
  const home_slug = process.env.REACT_APP_HOME_SLUG as string;

  const linkClick = () => {
    setIsMenuOpen(false);
    setDisplaying({
      slug: home_slug,
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

export default connect<StateProps, DispatchProps, OwnProps>(
  //@ts-ignore
  mapState,
  mapDispatch
)(Logo);
