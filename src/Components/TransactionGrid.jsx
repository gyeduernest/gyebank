import { Grid, Col, Card, Title, Text, Metric } from "@tremor/react";
import TranasactionTable from "./Transactiondata";

export function TransactionGrid (){
  return(

  <div className=" py-5 flex justify-center  lg:pl-40">
<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 lg:pl-40">
  <Col numColSpan={1} numColSpanLg={1}>
    <Card>
          <div className="flex mb-10 justify-center">
              <button className="btn btn-lg btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
Send Money</button>  
          </div>      
          <div className="flex justify-center">

              <button className="btn btn-lg btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
        </svg>
                
                Deposit Money
                
              </button>  
          </div>      
    </Card>
  </Col>

  <Col numColSpanLg={2} numColSpan={1}>
  <Card >
    <TranasactionTable/>
    
  </Card>
  </Col>
  <Col>
    <Card>
      <Title>Title</Title>
      <Metric>KPI 3</Metric>
    </Card>
  </Col>
  <Card>
    <Text>Title</Text>
    <Metric>KPI 4</Metric>
  </Card>
  <Card>
    <Text>Title</Text>
    <Metric>KPI 5</Metric>
  </Card>
</Grid>

  </div>
);
}