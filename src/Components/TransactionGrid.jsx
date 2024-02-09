import { Grid, Col, Card } from "@tremor/react";
import TransactionList from "../Charts/TransactionList";
import AddTransaction from "../Charts/AddTransaction";

export function TransactionGrid (){
  return(

  <div className=" py-5 flex justify-center  lg:pl-40  text-black">
<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 lg:pl-40  text-black">
  <Col numColSpan={1} numColSpanLg={1}>
    <Card className=" bg-white text-black">
    <AddTransaction/>
          
    </Card>
  </Col>

  <Col numColSpanLg={2} numColSpan={1} className=" text-black">
  <Card className="bg-white text-black" >
    <TransactionList/>    
  </Card>
  </Col>
</Grid>

  </div>
);
}