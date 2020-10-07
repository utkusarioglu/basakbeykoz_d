import { GeneralSingularItemforView } from "../wordpress/@types-wp";

export interface IsDisplaying {
  status: 200 | 404;
  slug: string;
  loadTime: number;
  active: GeneralSingularItemforView;
}
