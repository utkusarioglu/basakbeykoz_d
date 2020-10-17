import React from "react";
import { Link } from "react-router-dom";
import {
  selectRefs,
  setDisplaying,
  setIsMenuOpen,
} from "../../features/app/appActions";
import { useSelector, useDispatch } from "react-redux";
import { Env } from "../../common/@types-common";
import "./_logo.view.scss";

interface Props {
  withTitle: boolean;
}

function Logo(props: Props) {
  const dispatch = useDispatch();
  const { REACT_APP_HOME_SLUG, REACT_APP_UPLOADS_DIR } = process.env as Env;
  const { withTitle } = props;
  const refs = useSelector(selectRefs);

  const linkClick = () => {
    dispatch(setIsMenuOpen(false));
    dispatch(
      setDisplaying({
        slug: REACT_APP_HOME_SLUG,
      })
    );
    refs.body?.current?.osInstance()?.scroll(0, 500, "easeInOutSine");
  };

  const logoName = withTitle
    ? "logo-inline-color-w-title.svg"
    : "logo-inline-color.svg";

  return (
    <div {...{ className: "Logo" }}>
      <div {...{ className: "Logo-decor" }} />
      <Link {...{ onClick: linkClick, to: "/" }}>
        <div {...{ className: "Logo-logo" }}>
          <img
            {...{ src: REACT_APP_UPLOADS_DIR + "/" + logoName, alt: "logo" }}
          />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
