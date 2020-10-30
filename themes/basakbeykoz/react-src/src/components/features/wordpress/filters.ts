import {
  SluggedTimestampedSingular,
  wpSingularArchiveItem,
  WpSingularTypes,
} from './@types-wordpress';

export function filterByType<T extends string[]>(
  items: wpSingularArchiveItem[],
  type: WpSingularTypes,
  time: number
): SluggedTimestampedSingular {
  return items.reduce(
    (
      filteredObjects: SluggedTimestampedSingular,
      singular: wpSingularArchiveItem
    ) => {
      if (singular.state === 'success' && singular.type === type) {
        filteredObjects[singular.slug] = {
          loadTime: time,
          data: singular,
        };
      }
      return filteredObjects;
    },
    {}
  );
}
