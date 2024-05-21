import { Product } from "@/lib/models/ProductModel";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.image}
            width={400}
            height={400}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="cad-title font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.description}</p>
        <p className="mb-2">{product.size}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">RON {product.price}</span>
        </div>
      </div>
    </div>
  );
}
