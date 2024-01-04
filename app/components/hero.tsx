import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
export async function getData() {
    const query = "*[_type =='heroImage'][0]"
    const data = await client.fetch(query)
    return data
}
export default async function Hero() {
    const data = await getData()
    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl  lg:px-8">
            <div className="mb-8 flex flex-warp justify-between mb-mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="text-4xl font-bold sm:text-6xl mb-4 sm:mb-8">
                        Top Fashion for a top price!
                    </h1>
                    <p className="leading-relaxed xl:text-lg text-gray-500">
                        We sell only the most exclusive and top quality products for you.
                        We are the best so come shop with us.
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16">
                        <Image
                            src={urlFor(data.image2).url()}
                            className="h-full w-full object-cover object-center"
                            alt="Great image"
                            width={500}
                            height={500} />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
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
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                    <Link
                        href="/Men"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Men
                    </Link>
                    <Link
                        href="/Women"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Women
                    </Link>
                    <Link
                        href="/Teens"
                        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                        Teens
                    </Link>
                </div>
            </div>
        </section>
    )
} 