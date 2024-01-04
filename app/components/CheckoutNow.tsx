"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./addToBag";

export default function CheckoutNow({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  const product = {
    name,
    price,
    description,
    currency,
    image,
    price_id,
  };
  function byNow(price_id: string) {
    checkoutSingleItem(price_id);
  }

  return (
    <Button
      onClick={() => {
        byNow(price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}
