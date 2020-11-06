import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { fetchSingular } from '../wordpress/singularActions';
import { setFetching, setDisplaying } from '../app/appActions';
import config from '../../../config';
import { findBySlug, getSlugOnload } from './slugged.logic';

import CanvasLayout from '../../layout/canvas/Canvas.layout';

const { HOME_SLUG } = config;

const mapState = (state: RootState) => ({
  singular: state.singular,
  isDisplayingStatus: state.app.isDisplaying.status,
  isDisplayingSlug: state.app.isDisplaying.slug,
  isDisplayingActive: state.app.isDisplaying.active,
  isFetching: state.app.isFetching,
  refs: state.app.refs,
});
const mapDispatch = {
  fetchSingular,
  setFetching,
  setDisplaying,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
interface OwnProps {}
type Props = OwnProps & PropsFromRedux;
interface Params {
  slug: string;
}

function SluggedFeature({
  refs,
  setFetching,
  setDisplaying,
  fetchSingular,
  isDisplayingSlug,
  isDisplayingActive,
  isDisplayingStatus,
  singular,
}: Props) {
  const paramSlug = useParams<Params>().slug || HOME_SLUG;

  if (paramSlug !== isDisplayingSlug) {
    setDisplaying({
      slug: paramSlug,
    });
  }
  const timestampedSingular = findBySlug(singular, isDisplayingSlug);

  useEffect(() => {
    const anHourAgo = Date.now() - 1000 * 60;
    if (
      timestampedSingular === undefined ||
      (timestampedSingular.data.state === 'success' &&
        timestampedSingular.loadTime < anHourAgo)
    ) {
      setFetching(true);
      if (config.NODE_ENV === 'development') {
        setTimeout(() => {
          fetchSingular(isDisplayingSlug);
        }, 1000);
      } else {
        fetchSingular(isDisplayingSlug);
      }
    } else {
      if (timestampedSingular.data.state === 'success') {
        const {
          slug,
          title,
          type,
          content,
          thumbnail,
          excerpt,
        } = timestampedSingular.data;
        setDisplaying({
          status: 200,
          active: {
            slug,
            title,
            type,
            content,
            thumbnail,
            excerpt,
          },
        });
      } else {
        setDisplaying({
          status: 404,
          slug: timestampedSingular.data.slug,
        });
      }
      setFetching(false);
    }
  }, [
    timestampedSingular,
    isDisplayingSlug,
    fetchSingular,
    setFetching,
    setDisplaying,
  ]);

  if (isDisplayingStatus === 404) {
    setFetching(false);
    return <Redirect {...{ to: '/404' }} />;
  }

  return (
    <CanvasLayout
      {...{
        ...isDisplayingActive,
        onLoad: getSlugOnload(isDisplayingSlug, refs),
      }}
    />
  );
}

export default connector(SluggedFeature);
