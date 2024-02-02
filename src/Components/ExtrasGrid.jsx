import { Grid, Col, Card, Title, Text, Metric } from "@tremor/react";
import { Converter } from "./Converter";
import FinanceGoals from "./FinanceGoals";

export function ExtrasGrid (){
  return(

  <div className=" py-5 flex justify-center  lg:pl-40">
<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 lg:pl-40">
  <Col numColSpan={1} numColSpanLg={1}>
    <Card>
      <Converter/>
    </Card>
  </Col>

  <Col numColSpanLg={2} numColSpan={1}>
  <Card >
    <FinanceGoals/>
    
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