import { Chance } from 'chance';
import { DisplayTypes } from '../../wordpress/@types-wordpress';
import { IsDisplaying, ISetRef, SET_REF_TYPES } from '../@types-app';

export function mockIsDisplaying(): IsDisplaying {
  const chance = Chance();
  return {
    status: chance.pickone([200, 404]),
    loadTime: chance.timestamp(),
    slug: chance.sentence().replace(' ', '_'),
    active: {
      type: chance.pickone<DisplayTypes>(['native', 'post', 'page']),
      slug: chance.sentence().replace(' ', '_'),
      title: chance.sentence(),
      thumbnail: chance.url({ extensions: ['gif', 'jpg', 'png'] }),
      content: chance.paragraph(),
      excerpt: chance.paragraph(),
    },
  };
}

export function mockExhaustiveSetRef(): ISetRef[] {
  const testPayloads: ISetRef[] = [];
  for (const ref in SET_REF_TYPES) {
    testPayloads.push({
      //@ts-ignore leaving ts enum type checking issues aside for preserving my sanity
      type: SET_REF_TYPES[ref],
      //@ts-ignore the value here is not that important
      ref: null,
    });
  }
  return testPayloads;
}
