<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note';

    const noteStore = useNoteStore();

const handleSubmit = () => {
    noteStore.addNote(title.value);
    title.value = '';
}


const title = ref('');

</script>

<template>

<form class="note-form" @submit.prevent="handleSubmit">
    <input type="text" class="note-title" placeholder="Nueva nota" v-model="title">
    <button class="create-button">+</button>
</form>

</template>

<style scoped>
.note-form {
    width: 400px;
    background-color: lightgreen;
    border: 2px solid rgb(141, 141, 201);
    border-radius: 3px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;
}
.note-title {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    width: 100%;
    margin: 0 20px;
    flex-grow: 1;
    font-weight: bold;
}
.create-button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: green;
    columns: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}


</style>