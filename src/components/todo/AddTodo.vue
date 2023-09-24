<template>
  <div class="input-group mb-3">
    <!-- {{ newTodo }} -->
    <input
      type="text"
      v-model="newTodo.title"
      class="form-control"
      placeholder="Enter new todo here ...."
    />
    <button class="input-group-text btn btn-primary" 
            @click="addNewTodo(newTodo)"
            id="basic-addon2">Add Todo</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return{
            newTodo: {
                title: ""
            }
        }
    },
    computed:{
        
    },
    methods: {
        ... mapActions(['addNewTodo']),
    },
    
};
</script>
