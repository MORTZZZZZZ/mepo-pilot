"use client";
import { useState } from "react";
import { Timeline } from "@/components/Timeline";
import type { Step } from "@/lib/types";

const FAKE_STEPS: Step[] = [
  {
    seq: 1,
    type: "plan",
    payload: { text: "分析任务" }
  },
  {
    seq: 2, type: "tool_call", toolName: "search", payload: { q: "delete" } 
  }
] ;

export default function Home() {
  const [task, set Task ] = useState("") ;
  const [steps, setSteps] = useState<Step[]>(FAKE_STEPS) ;
}