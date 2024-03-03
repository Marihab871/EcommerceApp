import Image from "next/image";

export default function Whychooseus() {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-8 text-center">
            {" "}
            Why Choose Us
          </h2>
      <div className="flex justify-center flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
          <Image
            width={100}
            height={500}
            src="/medal.png"
            alt="Why choose us"
            className="w-32 "
          />
          <div className="text-lg font-medium text-center">BEST QUALITY</div>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
          <Image
            width={100}
            height={500}
            src="/trolley.png"
            alt="Why choose us"
            className="w-32 "
          />
          <div className="text-lg font-medium text-center">FREE SHIPING</div>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center">
          <Image
            width={100}
            height={500}
            src="/delivery.png"
            alt="Why choose us"
            className="w-32 "
          />
          <div className="text-lg font-medium text-center">FAST DELIVERY</div>
        </div>
      </div>
    </section>
  );
}
