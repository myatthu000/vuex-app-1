import { createStore } from "vuex";
import Todo from "./modules/Todo";

const store = createStore({
    modules: {
        todo: Todo
    }
})

export default store;