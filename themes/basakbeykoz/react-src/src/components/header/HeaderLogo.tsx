import React from "react";
import { RootState } from "../../store/rootReducer";
import { connect } from "react-redux";
import Logo from "./Logo";
import Cta from "./Cta";
import "./_logo.scss";

const mapState = (state: RootState) => ({
  isDisplayingSlug: state.app.isDisplaying.slug,
  refs: state.app.refs,
});

const mapDispatch = {};

interface OwnProps {}
type DispatchProps = typeof mapDispatch;
type StateProps = ReturnType<typeof mapState>;
type Props = DispatchProps & StateProps & OwnProps;

function HeaderLogo(props: Props): React.FunctionComponentElement<Props> {
  // const { isDisplayingSlug, refs } = props;
  // const { REACT_APP_HOME_SLUG } = process.env;
  // const isAtHome = isDisplayingSlug === REACT_APP_HOME_SLUG;
  // const [useCta, setUseCta] = useState(false);
  // const [engagementHappened, setEngagementHappened] = useState(false);

  // useEffect(() => {
  //   if (isAtHome) {
  //     if (engagementHappened) {
  //       setUseCta(false);
  //     } else {
  //       setUseCta(true);
  //       setEngagementHappened(true);
  //     }
  //   } else {
  //     setUseCta(false);
  //     setEngagementHappened(true);
  //   }
  // }, [isAtHome, engagementHappened]);

  // refs.body?.current
  //   ?.osInstance()
  //   ?.options("callbacks.onScroll", (e: Event) => {
  //     if (isAtHome && window.innerWidth < 800) {
  //       const scroll = refs.body?.current?.osInstance()?.scroll();
  //       if (scroll && scroll.position.y < window.innerHeight) {
  //         setUseCta(true);
  //         // setEngagementHappened(true);
  //       } else {
  //         setUseCta(false);
  //         setEngagementHappened(true);
  //       }
  //     }
  //   });

  // console.log(
  //   "isAtHome:",
  //   isAtHome,
  //   "\nuseCta:",
  //   useCta,
  //   "\nengagementHappened",
  //   engagementHappened
  // );
  const useCta = false;

  return useCta ? <Cta /> : <Logo />;
}

export default connect<StateProps, DispatchProps, OwnProps>(
  //@ts-ignore
  mapState,
  mapDispatch
)(HeaderLogo);
