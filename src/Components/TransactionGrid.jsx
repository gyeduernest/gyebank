import { Grid, Col, Card, Title, Text, Metric } from "@tremor/react";
import TranasactionTable from "./Transactiondata";
import TransactionList from "../Charts/TransactionList";
import AddTransaction from "../Charts/AddTransaction";

export function TransactionGrid (){
  return(

  <div className=" py-5 flex justify-center  lg:pl-40">
<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 lg:pl-40">
  <Col numColSpan={1} numColSpanLg={1}>
    <Card className="">
    <AddTransaction/>
          
    </Card>
  </Col>

  <Col numColSpanLg={2} numColSpan={1}>
  <Card >
    <TransactionList/>
    
  </Card>
  </Col>
</Grid>

  </div>
);
}