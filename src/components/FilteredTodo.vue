<template>
    <div>
        <!-- <span>{{ limit }}</span> -->
        <select name="" id="" class="form-select" @change="filterTodos(limit)" v-model="limit">
            <option value="" default>Default</option>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="70">70</option>
            <option value="100">100</option>
        </select>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            limit: null
        }
    },
    methods: {
        ...mapActions(['filterTodos'])
    }
}
</script>