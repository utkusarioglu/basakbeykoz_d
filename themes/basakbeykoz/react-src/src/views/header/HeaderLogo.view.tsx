import React from "react";
// import { useSelector } from "react-redux";
import Logo from "./Logo.view";
import Cta from "./Cta.view";
// import {
//   selectIsDisplayingSlug,
//   selectRefs,
// } from "../../features/app/appActions";

interface Props {}

function HeaderLogo(props: Props) {
  // const isDisplayingSlug = useSelector(selectIsDisplayingSlug);
  // const refs = useSelector(selectRefs);
  const useCta = false;

  return useCta ? <Cta /> : <Logo {...{ withTitle: false }} />;
}

export default HeaderLogo;
