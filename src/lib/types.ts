export type StepType = "plan" | "tool_call" | "tool_result" | "error" ;

export interface Step {
    seq: number ;
    type: StepType ;
    toolName?: string ;
    payload: Record<string, unknown> ;
    tokensIn?: number ;
    durationInMs?: number ;
}

export interface Session {
    id: string ;
    task: string ;
    mode: "fix" | "test" | "review" ;
    status: "running" | "done" | "aborted" ;
    steps: Step[] ;
}