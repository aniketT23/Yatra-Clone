import { useState } from "react";
import styled from "styled-components";
import { P, Arrow } from "./OtpCheck";

export function SignupBox() {
  return (
    <LBox>
      <div>
        <Arrow>
          <i className="fas fa-arrow-left"></i>
        </Arrow>
        <Form>
          <label>MOBILE NUMBER</label>
          <Input value="" />
          <label>EMAIL ID</label>
          <Input placeholder="Enter Your Email Id" />
          <label>CREATE PASSWORD</label>
          <Input placeholder="Enter your Password" />
          <label>FULL NAME</label>
          <select>
            <option>Title</option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
            <option>Dr.</option>
          </select>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <input type="checkbox" />
          <label>
            I would like to be kept informed of Special Promotions and offers by
            Yatra.
          </label>
          <input type="checkbox" />
          <label>I would like to get What'sApp notifications.</label>
        </Form>
        {/* <P>
          By proceeding, you agree with our
          <a href="https://www.yatra.com/online/terms-of-service.html">
            {" "}
            Terms of Service
          </a>
          ,{" "}
          <a href="https://www.yatra.com/online/privacy-policy.html">
            {" "}
            Privacy Policy
          </a>{" "}
          &
          <a href="https://www.yatra.com/online/yatra-user-agreement.html">
            Master User Agreement.
          </a>
        </P> */}
      </div>
    </LBox>
  );
}

const LBox = styled.div`
  padding: 1%;
  width: 44%;
  margin: 4% auto;
  height: 550px;
  background: white;
  box-shadow: 1px 1px 4px silver;
  & > div {
    width: 90%;
    margin: auto;
  }
`;

const Form = styled.form`
  color: #666;
`;

const Input = styled.input`
  width: 90%;
  padding: 2%;
  margin: 3% auto;
`;
