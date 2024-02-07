import { Title } from "@tremor/react"
import { Card, Flex, ProgressBar, Text } from "@tremor/react";



export default function FinanceGoal() {
    





  return (
    <div className="">
        <Title className="mb-5">
          Finance Goals
        </Title>
        <div className="mb-3" >
            <ol>
            <li>
          <Card className="">
            <div className="flex justify-between">
            <h4 className="text-"> Goal Name</h4> 
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
            </button>
            </div>

          <p className="text-xs text-slate-600 pr-24 mb-3">This Goal is to save 9000ghc before december 1st</p>
            <Flex>
              <Text> 9,012</Text>
              <Text> 20,000</Text>
            </Flex>
            <ProgressBar value={45} color="blue" className="mt-3"  />
          </Card>
            </li>
            </ol>
        </div>




        <input type="text" placeholder="Goal Name...." className="mb-3 input input-bordered input-primary w-full " />
        <br />
        <input type="text" placeholder="brief Description...."  className=" input input-bordered input-primary w-full mb-3 " />
        <br />
        <input type="range" placeholder="brief Description...."  value={10} className=" input-bordered input-primary w-full mb-3" />
        
       <div className="w-full btn btn-primary">Add Goal</div>
        


    </div>
  )
}
