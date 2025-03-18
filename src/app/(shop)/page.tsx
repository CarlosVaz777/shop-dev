import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;


export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los Productos"
        className="mb-2"
      />

      <ProductsGrid 
        products={ products }  
      />
    </>
  );
}
