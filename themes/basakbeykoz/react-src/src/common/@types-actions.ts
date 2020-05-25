export interface FSA {
    type: string,
    payload?: any,
    error?: boolean,
    meta?: any,
}

export type DispatchMethod = (vars:FSA) => void
