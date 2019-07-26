import { useState } from "react";

type ButtonType =
  | "number"
  | "operator"
  | "equal"
  | "clear"
  | "percentage"
  | "posneg";
type OperatorValue = "+" | "-" | "*" | "/";
type ValueType = number | string | OperatorValue;

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState<ValueType>(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleTap = (type: ButtonType, value?: ValueType) => {
    switch (type) {
      case "number":
        if (currentValue === "0") {
          setCurrentValue(`${value}`);
        } else {
          setCurrentValue(oldValue => `${oldValue}${value}`);
        }
        break;
      case "operator":
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue("");
        break;
      case "equal":
        const result = ((op: ValueType) => {
          const firstValue = parseFloat(previousValue);
          const secondValue = parseFloat(currentValue);
          switch (op) {
            case "+":
              return firstValue + secondValue;
            case "-":
              return firstValue - secondValue;
            case "*":
              return firstValue * secondValue;
            case "/":
              return firstValue / secondValue;
            default:
              return firstValue;
          }
        })(operator);
        setCurrentValue(result.toString());
        setOperator(null);
        setPreviousValue(null);
        break;
      case "clear":
        setCurrentValue("0");
        setOperator(null);
        setPreviousValue(null);
        break;
      case "posneg":
        setCurrentValue(`${-parseFloat(currentValue)}`);
        break;
      case "percentage":
        setCurrentValue(`${parseFloat(currentValue) / 100}`);
        break;

      default:
        break;
    }
  };

  return {
    currentValue,
    operator,
    previousValue,
    handleTap
  };
};
