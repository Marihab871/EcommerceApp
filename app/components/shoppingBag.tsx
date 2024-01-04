"use client"


import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingBag() {
    const {handleCartClick} = useShoppingCart()
    return (
        <Button className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:w-24 md:h-24 rounded-none border-b-0" variant={"outline"} onClick={()=>handleCartClick()}> 
            <ShoppingBagIcon />
        </Button>
    )
}