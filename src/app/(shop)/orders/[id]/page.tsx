
import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  }
}


export default function Orders( { params }: Props ) {

  const { id } = params;

  //Todo: Verificar cliente
  //redirect(/)

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      
      <div className="flex flex-col w-[1000px] ">

        <Title title={ `Orden #${ id }` }/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">

            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
              )
            }>
              <IoCardOutline size={ 30 }/>
              {/* <span className="mx-2"> Pendiente de Pago</span> */}
              <span className="mx-2"> Orden pagada</span>
            </div>

          {/* Items de carrito */}
          {
            productsInCart.map( product => (

              <div key={ product.slug } className="flex mb-5">
                {/* Se obtiene la imagen de los productos */}
                <Image 
                  src={ `/products/${ product.images[0] }` }
                  width={ 100 }
                  height={ 100 }
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  alt={ product.title }
                  className="mr-5 rounded"
                />

                <div>

                  {/* Se obtiene el titulo y precio */}
                  <p>{ product.title }</p>
                  <p>${ product.price } x 3</p>
                  <p className="font-bold">Subtotal: ${ product.price * 3 }</p>

                  <button className="underline mt-3">
                    Remover
                  </button>

                </div>

              </div>

             ) )
          }
          </div>


          {/* Checkout - resumen de la orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Carlos Vazquez</p>
              <p>Av Bomganbilias 123</p>
              <p>Col. Centro</p>
              <p>Izúcar de Matamoros</p>
              <p>Ciudad de México</p>
              <p>CP. 12345</p>
              <p>123-234-34-56</p>
            </div>

            {/* Divider */}
            <div 
              className="w-full h-0.5 rounded bg-gray-200 mb-10"
            />

            <h2 className="text-2xl mb-2">Resumen de la Orden</h2>

            <div className="grid grid-cols-2">

              <span>No. productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Iva (16%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>

            </div>

            <div className="mt-5 mb-2 w-full">

              <div className={
                clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  }
                )
              }>
                <IoCardOutline size={ 30 }/>
                {/* <span className="mx-2"> Pendiente de Pago</span> */}
                <span className="mx-2"> Orden pagada</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
