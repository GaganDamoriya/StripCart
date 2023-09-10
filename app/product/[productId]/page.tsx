import { items } from "@/app/utils/item";
import ProductDetails from "./ProductDetails";
import Container from "@/app/component/Container";

const Productt = () => {
  return (
    <>
      <Container>
        <ProductDetails data={items} />
      </Container>
    </>
  );
};

export default Productt;
