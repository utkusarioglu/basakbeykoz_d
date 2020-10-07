import { Env } from "../../common/@types-common";
import stateMap from "../../store/@types-state";

const { REACT_APP_UPLOADS_DIR } = process.env as Env;

const initialState: stateMap["social"] = {
  items: [
    {
      title: "Instagram",
      link: "https://www.instagram.com/basak_beykoz/",
      icon: REACT_APP_UPLOADS_DIR + "/instagram.svg",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/basakbeykoz/",
      icon: REACT_APP_UPLOADS_DIR + "/linkedin.svg",
    },
  ],
};

export default function (state = initialState): stateMap["social"] {
  return state;
}
