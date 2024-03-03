import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
export async function getData() {
    const query = "*[_type =='heroImage'][0]"
    const data = await client.fetch(query)
    return data
}

export const dynamic = "force-dynamic";

export default async function Hero() {
    const data = await getData()
    return (
        <section className=" w-screen min-h-full mx-auto max-w-2xl  px-4 sm:pb-6 lg:max-w-7xl lg:px-8 sm:bg-primary">
            <div className="mb-8 flex flex-warp md:mb-16  justify-between">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="text-4xl font-bold sm:text-6xl mb-4 sm:mb-8">
                        Top Fashion for a top price!
                    </h1>
                    <p className="leading-relaxed xl:text-lg">
                        We sell only the most exclusive and top quality products for you.
                        We are the best so come shop with us.
                    </p>
                </div>
                <div className="mb-12  w-full md:mb-16 lg:w-2/3 hidden sm:flex">
                    <div className="sm:relative left-12 top-12 z-10 sm:-ml-12 overflow-hidden rounded-lg  bg-gray-100 shadow-lg md:left-16 md:top-16 ">
                        <Image
                            src={urlFor(data.image2).url()}
                            className="h-full w-full object-cover object-center"
                            alt="Great image"
                            width={500}
                            height={500} />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
                        <Image
                            src={urlFor(data.image1).url()}
                            className="h-full w-full object-cover object-center"
                            width={500}
                            height={500}
                            alt="Great Image"
                        ></Image>
                    </div>
                </div>
            </div>
                   </section>
    )
} 