import { createStore } from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";

const store = createStore({
    state,
    getters,
    mutations,
})

export default store