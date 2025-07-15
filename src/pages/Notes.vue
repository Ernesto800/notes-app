<script setup>
import { useNoteStore } from '../stores/note';
import NoteCard from '../components/NoteCard.vue';
import CreateNote from '../components/CreateNote.vue';
import { onMounted } from 'vue';

const noteStore = useNoteStore();

onMounted(() => {
    noteStore.getNotes();
});
</script>

<template>
    <section id="notes-page-container">
        <h1 class="page-title">Tus Notas</h1>

        <p v-if="noteStore.loading" class="status-message loading-message">Cargando notas...</p>
        <p v-else-if="noteStore.error" class="status-message error-message">¡Ups! Algo ha ido mal al cargar las notas. Prueba a meter nueva API en esta <a href="https://beeceptor.com/crud-api/index.html" class="link">pagina</a></p>
        
        <div v-else class="notes-content">
            <div class="create-note-section">
                <CreateNote></CreateNote>
            </div>

            <ul class="notes-grid">
                <li v-for="note in noteStore.notes" :key="note.id">
                    <NoteCard :note="note"></NoteCard>
                </li>
                <li v-if="!noteStore.notes.length" class="empty-list-message">
                    <p>¡No tienes notas todavía! <br> Crea tu primera nota para empezar a organizar tus ideas.</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#notes-page-container {
    max-width: 1200px;
    margin: auto;
    padding: 30px 20px;
    background-color: #0a3131a8;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    flex-direction: column;
    align-items: center;
}

.page-title {
    font-size: 3.2em;
    color: #507fad;
    margin-bottom: 40px;
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.05);
}

.status-message {
    font-size: 1.5em;
    font-weight: 600;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;
    animation: fadeIn 0.5s ease-in-out;
}

.link {
    color: #3498db;
    text-decoration: underline;
}
.loading-message {
    color: #3498db;
    background-color: #e0f2f7;
    border: 1px solid #a8d5e8;
}

.error-message {
    color: #e74c3c;
    background-color: #fde0e0;
    border: 1px solid #f2a0a0;
}

.notes-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.create-note-section {
    width: clamp(300px, 90%, 600px);
    margin-bottom: 20px;
    padding: 25px;
    background-color: #2a918b;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.notes-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
    justify-content: center;
}

.empty-list-message {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.4em;
    color: #7f8c8d;
    padding: 50px 20px;
    background-color: #ecf0f1;
    border-radius: 10px;
    border: 1px dashed #bdc3c7;
    margin-top: 30px;
    line-height: 1.8;
}

.empty-list-message p {
    margin: 0;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5em;
    }
    .notes-grid {
        grid-template-columns: 1fr;
    }
    #notes-page-container {
        margin: 20px auto;
        padding: 20px 15px;
    }
    .create-note-section {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2em;
    }
    .empty-list-message {
        font-size: 1.2em;
        padding: 30px 15px;
    }
}
</style>