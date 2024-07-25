import { createContext } from "react";

export const CartContext = createContext({
    items: [], // not required, but helpful for intellisense
    addItemsToCart: () => {}, // not required, but helpful for intellisense
});

