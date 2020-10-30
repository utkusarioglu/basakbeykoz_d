import { SluggedTimestampedSingular } from '../wordpress/@types-wordpress';

export interface ISlugged {
  post: {
    fetchTime: number;
    items: SluggedTimestampedSingular;
  };
  page: {
    items: SluggedTimestampedSingular;
  };
}
