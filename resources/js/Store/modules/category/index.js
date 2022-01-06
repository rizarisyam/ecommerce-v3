import axios from "axios";

const state = {
    categoryItems: [],
};

const mutations = {
    UPDATE_CATEGORY_ITEMS(state, payload) {
        state.categoryItems = payload;
    },
};

const actions = {
    getCategoryItems({ commit }) {
        axios
            .get("api/categories")
            .then((res) => {
                // console.log(res);
                commit("UPDATE_CATEGORY_ITEMS", res.data);
            })
            .catch((err) => console.log(err));
    },
};

const getters = {
    categoryItems: (state) => state.categoryItems,
};

const category = {
    state,
    mutations,
    actions,
    getters,
};

export default category;
