import { Title } from "@tremor/react"
import { Flex, ProgressBar, Text } from "@tremor/react";
import { useContext, useState } from "react";
import AddFinanceGoal from "./AddFinanceGoal";
import { GlobalContext } from "../ContextApi/GlobalState";



export default function FinanceGoal() {
const {goals} = useContext(GlobalContext);
const {deleteGoal} = useContext(GlobalContext);
  return (
    <div className="bg-white">
        <Title className="mb-5 text-black">
          Finance Goals
        </Title>
        <div className="mb-3 bg-white " >
          <div className=" bg-white">
                  {goals.map((goal) => (
                    <div>
                      <ul className="mb-5 border  px-5 py-5 rounded-lg bg-white text-black">
                          <li key={goal.id} className="text-black">
                          <div className="flex  justify-between">
                          <h4 className="text-black">{goal.goalname}</h4> 
                          <button onClick={() => deleteGoal(goal.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-white">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                          </button>
                          </div>
              
                        <p className="text-xs text-black pr-24 mb-3">{goal.description}</p>
                          <Flex>
                            <Text className="text-black">{goal.rangeValue}</Text>
                          </Flex>
                          <ProgressBar value={goal.rangeValue} color="blue" className="mt-3 bg-slate-300"  />
                          </li>
                          </ul>
                        </div>

                  ))}
          </div>

        <AddFinanceGoal/>
        </div>
    </div>
  )
}
