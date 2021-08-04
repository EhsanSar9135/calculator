import React, { useState } from "react";
import { Button, Container, Current, Previous, Screen } from "../styles";

const Calculator = () => {
   const [current, setCurrent] = useState("");
   const [previous, setPrevious] = useState("");
   const [operation, setOperation] = useState("");

   const appendValue = (e) => {
      const value = e.target.getAttribute("data");
      if (value === "." && current.includes(".")) return null;
      setCurrent(current + value);
   };
   const deleteHandler = () => {
      setCurrent(current.slice(0, -1));
   };
   const allClearHandler = () => {
      setCurrent("");
      setPrevious("");
      setOperation("");
   };
   const chooseOperation = (e) => {
      if (!current) return;
      if (previous) {
         let value = compute();
         setPrevious(value);
      } else {
         setPrevious(current);
      }
      setCurrent("");
      setOperation(e.target.getAttribute("data"));
   };
   const compute = () => {
      let result;
      let previousNumber = parseFloat(previous);
      let currentNumber = parseFloat(current);

      switch (operation) {
         case "÷":
            return (result = previousNumber / currentNumber);
         case "×":
            return (result = previousNumber * currentNumber);
         case "+":
            return (result = previousNumber + currentNumber);
         case "-":
            return (result = previousNumber - currentNumber);
         default:
            return;
      }
      return result;
   };
   const equals = () => {
      let value = compute();
      if (value === undefined || value === null) return;
      setCurrent(value);
      setPrevious("");
      setOperation("");
   };
   return (
      <Container>
         <Screen>
            <Previous>
               {previous} {operation}
            </Previous>
            <Current>{current}</Current>
         </Screen>
         <Button onClick={allClearHandler} gridSpan={2} control>
            AC
         </Button>
         <Button onClick={deleteHandler} control>
            DEL
         </Button>
         <Button onClick={chooseOperation} data="÷" operation>
            ÷
         </Button>
         <Button data="7" onClick={appendValue}>
            7
         </Button>
         <Button data="8" onClick={appendValue}>
            8
         </Button>
         <Button data="9" onClick={appendValue}>
            9
         </Button>
         <Button onClick={chooseOperation} data="×" operation>
            ×
         </Button>
         <Button data="4" onClick={appendValue}>
            4
         </Button>
         <Button data="5" onClick={appendValue}>
            5
         </Button>
         <Button data="6" onClick={appendValue}>
            6
         </Button>
         <Button onClick={chooseOperation} data="+" operation>
            +
         </Button>
         <Button data="1" onClick={appendValue}>
            1
         </Button>
         <Button data="2" onClick={appendValue}>
            2
         </Button>
         <Button data="3" onClick={appendValue}>
            3
         </Button>
         <Button onClick={chooseOperation} data="-" operation>
            -
         </Button>
         <Button data="." onClick={appendValue} control dot>
            .
         </Button>
         <Button data="0" onClick={appendValue}>
            0
         </Button>
         <Button
            onClick={chooseOperation}
            data="="
            gridSpan={2}
            operation
            equals={equals}
         >
            {" "}
            ={" "}
         </Button>
      </Container>
   );
};

export default Calculator;
