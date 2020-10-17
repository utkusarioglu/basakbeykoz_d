import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FooterView from "../../views/footer/Footer.view";
import { selectRefs, setIsMenuOpen } from "../app/appActions";

interface Props {}

function FooterFeature(props: Props) {
  const dispatch = useDispatch();
  const refs = useSelector(selectRefs);
  const navClickActions = () => {
    dispatch(setIsMenuOpen(false));
    refs.body?.current?.osInstance()?.scroll(0, 500, "easeInOutSine");
  };

  return <FooterView {...{ navClickActions }} />;
}

export default FooterFeature;
