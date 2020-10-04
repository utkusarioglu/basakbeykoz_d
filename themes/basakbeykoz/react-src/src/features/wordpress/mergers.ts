import {
  SluggedTimestampedSingular,
  wpSingularItem,
  singularTypes,
} from "./@types-wp";

export function filterByType<T extends string[]>(
  items: wpSingularItem[],
  type: singularTypes,
  time: number
): SluggedTimestampedSingular {
  return items.reduce(
    (filteredObjects: SluggedTimestampedSingular, singular: wpSingularItem) => {
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
