import { notFound } from "next/navigation";

/*Creamos la Props para obtener el id */
interface Props {
  params: {
    id: string;
  }
}


export default function CategoryUser({params}: Props) {

  /* Destructurar el id o los tiopos de datos que obtengamos*/
  const { id } = params;

  if(id === 'kids'){
    /*Función notFound propia de Next */
    notFound();
  }

  return (
    <div >
      <h1>Categorías { id }</h1>
    </div>
  );
}
