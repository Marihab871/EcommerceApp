import Link from "next/link";
import ShoppingBag from "./shoppingBag";
export function Navbar() {
  const link = [
    ["Home", "/"],
    ["Men", "/Men"],
    ["Women", "/Women"],
    ["Teens", "/Teens"],
  ];
  return (
    <div className="border-b border-gray w-full flex flex-row justify-center mb-8">
      <nav className="w-full md:max-w-8xl flex justify-between items-center mx-auto">
        <div className="text-4xl font-semibold px-8 lg:px-32 py-3">
          <Link href='/'><span className="text-primary">CloShor</span></Link>
        </div>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {link.map(([title, url],idx) => {
            return (
              <div key={idx} className="font-semibold style-none hover:text-primary">
                <Link href={url}>{title}</Link>
              </div>
            );
          })}
        </nav>
        <div className="flex divide-x px-32">
          <ShoppingBag />
        </div>
      </nav>
    </div>
  );
}
