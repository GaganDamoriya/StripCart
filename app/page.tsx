import Container from "./component/Container";
import HeroBanner from "./component/HeroBanner";
import Carousel from "./component/carousel/Carousel";
import { products } from "./utils/Product";
export default function Home() {
  return (
    <div>
      <div className="flex  mx-2">
        <HeroBanner />
      </div>
      <h1 className="text-4xl p-3 font-semibold">Trending</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product: any) => {
          return <Carousel data={product} />;
        })}
      </div>
    </div>
  );
}
