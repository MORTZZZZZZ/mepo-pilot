"use client" ;

import {useState} from "react" ;
import {Timeline} from "@/components/Timeline" ;

const INITIAL_STEPS = ["分析任务", "搜索代码", "修改文件", "运行测试", "完成"] ;

export default function Home() {
  const [steps, setSteps] = useState(INITIAL_STEPS) ;
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold">MepoPilot</h1>
      <p className="mt-2 text-gray-600">一个 Coding Agent 工作台</p>

      <button className="mt-4 rounded bg-black px-4 py-2 text-white"
      onClick={() => setSteps([...steps,"新的一步"])}>加一步</button>
      <Timeline items={steps}/>
    </main>
  ) ;
}