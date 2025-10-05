import Navbar from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

export default function Butiken() {
  return (
    <div>
      <Navbar />
      <div className="p-1 w-1/2 mx-auto text-center my-10">
        <p>
          Vill du beställ något? <br />
          Maila din beställning till: fargmagasinet@brafarg.se <br />
          Swish 123-0078600 eller Bankgiro 717-2521
        </p>
        <p>Här ska alla produkter listas som ProductCards</p>
        <div className="flex justify-center flex-wrap gap-6 py-8">
          <ProductCard
            imageUrl="/äggoljetempera.jpg"
            title="Äggoljetempera"
            description="Färg i påse 430:-"
          />
          <ProductCard
            imageUrl="/speedheater.jpg"
            title="Speedheater"
            description="Cobra: 2995 :-"
          />
          <ProductCard
            imageUrl="/linoljefärg.jpg"
            title="Linoljefärg"
            description="1 liter: 160 :-"
          />
        </div>
      </div>
    </div>
  );
}
