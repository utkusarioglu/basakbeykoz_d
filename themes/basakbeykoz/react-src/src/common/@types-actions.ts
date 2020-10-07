import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { ERROR_CODES } from "../features/wordpress/constants";
import ACTION_TYPES from "./actionTypes";
export type FSA<T> = FSASuccess<T> | FSAFailure;

interface FSASuccess<T> {
  type: ACTION_TYPES;
  payload: T;
  state: "success";
}

interface FSAFailure {
  type: ACTION_TYPES;
  error: ERROR_CODES;
  state: "fail";
}

export type DispatchMethod<T> = (vars: FSA<T>) => void;

export interface ISetRef {
  type: "body" | "latestPosts" | "testimonials";
  ref: React.RefObject<OverlayScrollbarsComponent>;
}
