import { SignUpForm } from "./signup-form";
import { LoginForm } from "./login-form";
import { Verification } from "./verification-form";

export const App: React.FC = () => {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {/* <SignUpForm /> */}
      <Verification />
    </div>
  );
};
