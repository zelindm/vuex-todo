<template>
    <div class="hello">
        <h1>ToDo List (:</h1>
        <input v-model="input" @keyup.enter="addTask">
        <button class="btn" @click="addTask">Add Task</button>
        <ul>
            <li v-for="task in tasks">
                <i @click="(task.complete = !task.complete)" :class="['fa', task.complete ? 'fa-check-square-o' : 'fa-square-o']"></i>
                <span :class="{'complete': task.complete}">{{ task.title }}</span>
                <i class="fa fa-ban" @click="removeTask(task._id)"></i>
            </li>
        </ul>
        <button class="btn btn-orange" @click="clearCompleteTasks">Clear Complete</button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'ToDo',
        data() {
            return {
                input: ''
            }
        },
        methods: {
            addTask: function () {
                if(this.input === '') {
                    return;
                }

                this.$store.dispatch('addTask', {
                    task: this.input
                });

                this.input = '';
            },
            removeTask: function (id) {
                this.$store.dispatch('removeTask', {
                    id: id
                });
            },
            clearCompleteTasks: function () {
                this.$store.dispatch('clearCompleteTasks');
            },
        },
        computed: {
            ...mapState([
                'tasks',
            ])
        }
    }
</script>

<style scoped>
    h1 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
        width: 500px;
        margin: 6px auto;
        text-align: left;
    }

    li {
        margin: 10px 0;
    }

    i {
        cursor: pointer;
        width: 15px;
    }

    input {
        width: 400px;
        padding: 10px;
    }

    .fa-ban {
        float: right;
    }

    .btn {
        background: #42b983;
        box-sizing: border-box;
        color: #fff;
        border: 0;
        padding: 12px 16px;
        cursor: pointer;
    }
    .btn:hover {
        background: #2e835f;
    }

    .complete {
        text-decoration: line-through;
        color: #ccc;
    }

    .btn-orange {
        background: orange;
    }

    .btn-orange:hover {
        background: #ca8200;
    }

</style>
