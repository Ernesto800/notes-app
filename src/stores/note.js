import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNoteStore = defineStore('note', () => {

    //Aquí cada vez que se agotan las request de la MockAPI puedes cambiando este link por otro de esta pagina: https://beeceptor.com/crud-api/index.html
    const API_URL = "https://ca7e41217aca98822e9e.free.beeceptor.com/api/users/";
    const notes = ref([])
    const loading = ref(false);
    const error = ref(false);


    const getNotes = async () => {
        try {
            loading.value = true;
            const res = await fetch(API_URL);
            const data = await res.json();
            notes.value = data.reverse();
            loading.value = false;
        } catch (e) {
            error.value = true
            loading.value = false
        }
    }

    const createid = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2)
    }

    const addNote = async (title) => {
        const newNote = {
            id: createid(),
            title,
            marked: false
        }
        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newNote)
            })
            getNotes()
        } catch (e) {
            error.value = true
        }
    }


    const removeNote = async (id) => {
        try {
            await fetch(API_URL + id, {
                method: "DELETE"
            })
            getNotes()
            console.log(notes.title)
        } catch (e) {
            error.value = true
        }
    }

    return { notes, addNote, getNotes,removeNote, loading, error }
})