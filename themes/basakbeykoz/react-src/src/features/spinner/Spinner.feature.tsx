import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import SpinnerView from '../../views/spinner/Spinner.view';

const mapState = (state: RootState) => ({
  isFetching: state.app.isFetching,
});
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;

function SpinnerFeature({ isFetching }: Props) {
  const loadingMessages = [
    'Hemen geliyor',
    'Tazeden gelsin',
    'Ailecek yukluyoruz',
    'Sayfa bizden, okumak sizden',
    'Aaa negezel yukluyo',
  ];

  // selects a random message from loading messages array
  const loadingMessage =
    loadingMessages[Math.floor(Math.random() * (loadingMessages.length - 1))] +
    '...';

  return (
    <SpinnerView
      {...{
        display: isFetching ? 'grid' : 'none',
        loadingMessage,
      }}
    />
  );
}

export default connector(SpinnerFeature);
