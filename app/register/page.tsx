import Container from "../component/Container";
import FormWrap from "../component/FormWrap";
import Input from "../component/input/Input";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <RegisterForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default Register;
