import { createStore } from "vuex";
import product from "@/Store/modules/product";
import cart from "@/Store/modules/cart";
import category from "@/Store/modules/category";

export default createStore({
    modules: {
        product,
        cart,
        category,
    },
});
