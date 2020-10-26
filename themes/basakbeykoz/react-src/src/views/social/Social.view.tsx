import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import SocialItem from './SocialItem.view';
import './_social.view.scss';

const mapState = (state: RootState) => ({
  socialItems: state.social.items,
});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function Social({ socialItems }: Props) {
  const socialComponents = socialItems.map((item) => {
    return (
      <SocialItem
        {...{
          key: item.title,
          ...item,
        }}
      />
    );
  });

  return (
    <div {...{ className: 'Social' }}>
      <div {...{ className: 'Social-list' }}>{socialComponents}</div>
      <div {...{ className: 'Social-decor' }} />
    </div>
  );
}

export default connector(Social);
