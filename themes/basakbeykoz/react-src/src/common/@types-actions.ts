export interface FSA<T> {
    type: string,
    payload?: T,
    error?: boolean,
    meta?: any,
}

export type DispatchMethod<T> = (vars:FSA<T>) => void
