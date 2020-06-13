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
