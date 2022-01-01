import React from "react";
import { Button } from "../button";
import { Input } from "../input/input.component";
import { FaMobile } from "react-icons/fa";

export const SignUpForm: React.FC = () => {
  return (
    <form>
      <div className="form-inner">
        <h2> Sign up </h2>
        <p>Sign up to continue with the process</p>

        <div className="form-group">
          <Input
            type="text"
            placeholder="Enter Phone Number"
            rightIcon={<FaMobile />}
          />
          <Input mt="16px" type="text" placeholder="First name " />
          <Input mt="16px" type="text" placeholder="Last name " />
        </div>
        <Button mt="24px">Next</Button>
      </div>
    </form>
  );
};
