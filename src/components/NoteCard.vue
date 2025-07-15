<script setup>
import { defineProps } from 'vue';
import { useNoteStore } from '../stores/note';
const props = defineProps({
    note: Object
})

const noteStore = useNoteStore();

const deleteNote = () => {
    noteStore.removeNote(props.note.id); 
}

</script>


<template>

    <article class="note-card">
        <input type="text" class="card-title" v-model="note.title" placeholder="Nombre de la nota...">
        <button v-if="note.marked" @click="deleteNote" class="delete-button">Eliminar</button>
        <input type="checkbox" v-model="note.marked">
    </article>

</template>

<style scoped>
.note-card {
    width: 450px;
    background-color: lightblue;
    border: 3px solid #000022;
    border-radius: 10px;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;
}
[type="checkbox"] {
    cursor: pointer;
    transform: scale(2) translateX(-2px);
}
.card-title {
    background-color: rgb(79, 128, 79);
    border: none;
    margin: 0 20px;
    transition: all 0.2s ease-in-out;
    width: 310px;
    border-radius: 5px;
}
.card-title:focus {
    border: none;
    box-shadow: 0 0 7px;
}
.card-title::placeholder {
    color: rgb(97, 92, 92);
    padding: 5px;
}
.note-card:hover {
    border: 3px solid black;
    box-shadow: 0 0 10px;
}
.note-card:has(input:checked){
    border: 5px solid lightgray;
    background-color: lightgrey;
}
.delete-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding-left:10px;
    padding-right: 10px;
}
.delete-button:hover {
    background-color: lightgreen;
}

</style>