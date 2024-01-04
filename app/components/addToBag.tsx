"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id:string;
}

export default function AddToBag({
  name,
  description,
  price,
  currency,
  image,
  price_id
}: ProductCart) {

  const product = {
    name,
    price,
    description,
    currency,
    image,
    price_id
  };
  const { addItem, handleCartClick } = useShoppingCart();
  return <Button onClick={()=>{addItem(product),handleCartClick()}}>Add To Bag</Button>;
}
