import { simplifieldProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type =='product'][0...4] | order(_createdAt desc) {
        _id,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name,
        "imageUrl":images[1].asset->url
    }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function Newest() {
  const data: simplifieldProduct[] = await getData();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm-py-24 lg:max-w-7xl lg:px-8 ho">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {" "}
            Our Newest products
          </h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1">
            See all{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (product && (
            <div key={product._id} className="group relative ease-out duration-300 hover:scale-125  hover:p-4">
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="Product Image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm justify-between">{product.name}</h3>
                    <p className="mt-1 text-gray-500 text-sm ">
                      {product.categoryName}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </div>
                </div>
              </Link>
            </div>
          )))}
        </div>
      </div>
    </div>
  );
}
