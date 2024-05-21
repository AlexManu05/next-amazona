import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((x) => x.slug === params.slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="my-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3 ">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>

        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-2xl py-4">{product.name}</h1>
            </li>
            <li>
              <p className="italic">{product.description}</p>
            </li>
            <li>
              <p>Marime: {product.size}</p>
            </li>
            <li className="divider"></li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0 ">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Pret</div>
                <div>{product.price} RON</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Disponbil</div>
                <div>
                  {product.inStock === true ? "In stoc" : "Nu este in stoc"}
                </div>
              </div>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary w-full" type="button">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
