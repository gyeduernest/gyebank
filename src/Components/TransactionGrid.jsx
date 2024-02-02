import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import TranasactionTable from "./Transactiondata";


export function TransactionGrid() {

  return(
    <div className="flex justify-center">
      
<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 ">

  
  <Col numColSpan={2} numColSpanLg={2}>
    <Card>
      <TranasactionTable/>
    </Card>
  </Col>
    
</Grid>

    </div>
);
  }