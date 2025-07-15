<script setup>

</script>

<template>
    <div class="home-container">
        <h1>Bienvenido a tus Notas Personales</h1>
        <p>
            Esta es tu página de inicio, el centro donde todas tus ideas, recordatorios y pensamientos se organizan.
            He diseñado esta aplicación para que la gestión de tus notas sea intuitiva y eficiente,
            permitiéndote concentrarte en lo que realmente importa.
        </p>
        <p>
            Desde aquí, podrás acceder rápidamente a todas tus notas, añadir nuevas,
            marcar las importantes y eliminar las que ya no necesites.
        </p>
        <div class="features-section">
            <h2>Características Principales</h2>
            <ul>
                <li>Organiza tus notas fácilmente.</li>
                <li>Interfaz limpia y sencilla.</li>
                <li>Acceso rápido a todas tus notas.</li>
            </ul>
        </div>
        <p class="cta-text">¡Haz clic <router-link to="/notes" class="link">"Aquí"</router-link> para empezar!</p>
    </div>
</template>

<style scoped>
.home-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    color: #333;
    text-align: center;
}

h1 {
    color: #4CAF50;
    font-size: 2.8em;
    margin-bottom: 20px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

h2 {
    color: #336699;
    font-size: 2em;
    margin-top: 30px;
    margin-bottom: 15px;
}

p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 15px;
}

.features-section ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

.features-section li {
    background-color: #e8f5e9;
    margin: 10px 0;
    padding: 12px;
    border-left: 5px solid #81C784;
    border-radius: 8px;
    font-size: 1.05em;
    color: #388E3C;
    text-align: left;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.cta-text {
    font-size: 1.3em;
    font-weight: bold;
    color: #FF5722;
    margin-top: 40px;
}
.link {
    color: #FF5722;
    text-decoration: underline;
    cursor: pointer;
    text-underline-offset: 3px;
}
.link:hover {
    color: #336699;
}
</style>