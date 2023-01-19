import React from "react";
import classNames from "classnames";
import "components/Button.scss";

// Button component
// props: {
//   confirm: String,
//   danger: String,
//   onClick: Function,
//   disabled: Boolean,
// }
export default function Button(props) {
   const buttonClass = classNames("button", {
     "button--confirm": props.confirm,
     "button--danger": props.danger
   });
 
   return (
     <button
       className={buttonClass}
       onClick={props.onClick}
       disabled={props.disabled}
     >
       {props.children}
     </button>
   );
 }