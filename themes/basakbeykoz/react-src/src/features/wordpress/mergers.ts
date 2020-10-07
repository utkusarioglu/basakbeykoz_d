import {
  SluggedTimestampedSingular,
  wpSingularItemSuccess,
  WpSingularTypes,
} from "./@types-wp";

export function filterByType<T extends string[]>(
  items: wpSingularItemSuccess[],
  type: WpSingularTypes,
  time: number
): SluggedTimestampedSingular {
  return items.reduce(
    (
      filteredObjects: SluggedTimestampedSingular,
      singular: wpSingularItemSuccess
    ) => {
      if (singular.type === type) {
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
