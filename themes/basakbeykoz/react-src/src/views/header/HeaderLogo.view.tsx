import React from 'react';
import { RootState } from '../../store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';
import Logo from './Logo.view';
import Cta from './Cta.view';

const mapState = (state: RootState) => ({
  isDisplayingSlug: state.app.isDisplaying.slug,
  refs: state.app.refs,
});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function HeaderLogo(props: Props) {
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

  return useCta ? <Cta /> : <Logo {...{ withTitle: false }} />;
}

export default connector(HeaderLogo);
