import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { ERROR_CODES } from "../features/wordpress/constants";
export type FSA<T> = FSASuccess<T> | FSAFailure;

interface FSASuccess<T> {
  type: string;
  payload: T;
  state: "success";
}

interface FSAFailure {
  type: string;
  error: ERROR_CODES;
  state: "fail";
}

export type DispatchMethod<T> = (vars: FSA<T>) => void;

export interface ISetRef {
  type: "body" | "latestPosts" | "testimonials";
  ref: React.RefObject<OverlayScrollbarsComponent>;
}
