import { SluggedTimestampedSingular, wpSingularItem,singularTypes } from "./@types-wp";

export function filterByType<T extends string[]>(
    items: wpSingularItem[], 
    type: singularTypes,
    time: number,
): SluggedTimestampedSingular {
    return items.reduce((
            p: SluggedTimestampedSingular, 
            c: wpSingularItem
        ) => {
            if(c.type === type) {
                p[c.slug] = { 
                    loadTime: time,
                    data: c
                };
            }
            return p;
        }, {});
}