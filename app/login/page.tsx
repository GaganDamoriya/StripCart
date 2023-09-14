import Container from "../component/Container";
import FormWrap from "../component/FormWrap";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <LoginForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default Login;
