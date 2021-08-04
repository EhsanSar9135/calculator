import React from "react";
import { Button, Container, Current, Previous, Screen } from "../styles";

const Calculator = () => {
   return (
      <Container>
         <Screen>
            <Previous>10 +</Previous>
            <Current>5</Current>
         </Screen>
         <Button gridSpan={2} control>
            AC
         </Button>
         <Button control>DEL</Button>
         <Button operation>÷</Button>
         <Button>7</Button>
         <Button>8</Button>
         <Button>9</Button>
         <Button operation>×</Button>
         <Button>4</Button>
         <Button>5</Button>
         <Button>6</Button>
         <Button operation>+</Button>
         <Button>1</Button>
         <Button>2</Button>
         <Button>3</Button>
         <Button operation>-</Button>
         <Button control></Button>
         <Button>0</Button>
         <Button gridSpan={2} operation>
            {" "}
            ={" "}
         </Button>
      </Container>
   );
};

export default Calculator;
