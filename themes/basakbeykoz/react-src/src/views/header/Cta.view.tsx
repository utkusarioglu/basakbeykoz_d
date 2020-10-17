import React from "react";
import { useSelector } from "react-redux";
import { selectRefs } from "../../features/app/appActions";
import "./_cta.view.scss";

interface Props {}

function Cta(props: Props) {
  const refs = useSelector(selectRefs);
  const ctaAction = () =>
    refs.body?.current
      ?.osInstance()
      ?.scroll(
        document.getElementsByClassName("wp-block-group")[1] as HTMLElement,
        1000,
        "easeOutExpo"
      );

  return (
    <div {...{ className: "Cta" }}>
      <div {...{ className: "Cta-button", onClick: ctaAction }}>
        <div {...{ className: "Cta-text" }}>Bir adım atın</div>
      </div>
    </div>
  );
}

export default Cta;
