import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
export type FSA<T>  = FSASuccess<T> | FSAFailure

interface FSASuccess<T> {
    type: string,
    payload: T,
    state: 'success',
}

interface FSAFailure {
    type: string,
    error: string,
    state: "fail"
}

export type DispatchMethod<T> = (vars:FSA<T>) => void

export interface ISetRef {
    type: 'body' | 'latestPosts' | 'testimonials';
    ref: React.RefObject<OverlayScrollbarsComponent>;
}
