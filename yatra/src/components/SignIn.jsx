import { useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { OtpCheck } from "./OtpCheck";

export function SignIn() {
  const [display, setDisplay] = useState(false);
  const [number, setNumber] = useState("");

  const handleChange = ({ target }) => {
    setNumber(target.value);
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <OtpCheck
        Number={number}
        display={display}
        handleDisplay={handleDisplay}
      />
      <Header />
      <Body
        display={display}
        handleDisplay={handleDisplay}
        handleChange={handleChange}
        number={number}
      />
    </div>
  );
}
