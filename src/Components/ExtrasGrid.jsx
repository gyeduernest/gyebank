import { Grid, Col, Card, Title, Text, Metric, Badge } from "@tremor/react";
import { Converter } from "./Converter";
import FinanceGoal from "./FinanceGoal";
import { Alertdialog } from "./Alertdialog";

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
    <FinanceGoal/>
    
  </Card>
  </Col>
  <Col>
    <Card>
      <div className="flex justify-between">
      <Title>Financial Advice</Title>
      <Badge className="flex">Get Pro</Badge>
      </div>
      <div>
    <Alertdialog  CTA="Get advice" title="Feature is not Avaliable" message="you cannot unlock this feature until you pay a fee to enable you gain access"  />      
      </div>
    </Card>
  </Col>
  <Card>
      <div className="flex justify-between">
      <Title>Get a Dollar Account</Title>
      <Badge className="flex">Get Pro</Badge>
      </div>
      <div>
    <Alertdialog CTA="Create Account" title="Feature is not Avaliable" message="you cannot unlock this feature until you pay a fee to enable you gain access"  />      
      </div>
    </Card>
  
</Grid>

  </div>
);
}