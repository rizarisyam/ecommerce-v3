import axios from "axios";

const state = {
    cartItems: [],
};

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
    },
};

const actions = {
    getCartItems({ commit }) {
        axios.get("https://fakestoreapi.com/carts").then((res) => {
            commit("UPDATE_CART_ITEMS", res.data);
        });
    },
};

const getters = {
    cartItems: (state) => state.cartItems,
};

const cartModule = {
    state,
    mutations,
    actions,
    getters,
};

export default cartModule;
