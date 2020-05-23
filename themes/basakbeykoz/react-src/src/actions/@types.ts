export interface DispatchVars {
    type: string,
    data?: any,
    error?: string,
}

export type DispatchMethod = (vars:DispatchVars) => void
