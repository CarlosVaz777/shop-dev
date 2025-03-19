import { ProductsGrid, Title } from "@/components";
import { Category } from "@/interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

/*Creamos la Props para obtener el id */
interface Props {
  params: {
    id: Category;
  }
}


export default function CategoryUser({params}: Props) {

  /* Destructurar el id o los tiopos de datos que obtengamos*/
  const { id } = params;

  /**Obtener los productos por genero mediante el id y utilizando filter */
  const products = seedProducts.filter( product => product.gender === id );

  const labels: Record<Category, string > = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos',
  }

  // if(id === 'kids'){
  //   /*Función notFound propia de Next */
  //   notFound();
  // }

  return (
     <>
          <Title
            title={`Articulos de ${ labels[id] }`}
            subtitle="Todos los Productos"
            className="mb-2"
          />
    
          <ProductsGrid 
            products={ products }  
          />
        </>
  );
}
