import React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { setDisplaying, setIsMenuOpen } from '../../features/app/appActions';
import { connect, ConnectedProps } from 'react-redux';
import config from '../../config';
import '../../styles/components/header/_logo.view.scss';

const { HOME_SLUG, UPLOADS_DIR } = config;

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

function Logo({ setDisplaying, setIsMenuOpen, refs, withTitle }: Props) {
  const linkClick = () => {
    setIsMenuOpen(false);
    setDisplaying({
      slug: HOME_SLUG,
    });
    refs.body?.ref.current?.osInstance()?.scroll(0, 500, 'easeInOutSine');
  };

  const logoName = withTitle
    ? 'inline-logo-w-color-title@100px.png'
    : 'inline-logo-w-color@100px.png';

  return (
    <div {...{ className: 'Logo' }}>
      <div {...{ className: 'Logo-decor' }} />
      <Link {...{ onClick: linkClick, to: '/' }}>
        <div {...{ className: 'Logo-logo' }}>
          <img {...{ src: UPLOADS_DIR + '/' + logoName, alt: 'logo' }} />
        </div>
      </Link>
    </div>
  );
}

export default connector(Logo);
