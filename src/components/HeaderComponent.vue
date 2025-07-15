<script setup>

</script>

<template>
    <header>
        <h1 class="title">Notes Page</h1>

        <nav>
            <ul class="nav-list">
                <li>
                    <router-link to="/" class="link">Home</router-link>
                </li>
                <li>
                    <router-link to="/notes" class="link">Notes</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #000022;
    color: white;
    padding: 30px;
    text-align: center;
}
.title {
    margin: 0;
    color: aqua;
    font-size: 35px;
    margin-bottom: 20px;
}

.nav-list {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}
.link {
    color: white;
    text-decoration: none;
    font-size: 20px;
}
.link:hover {
    color: rgb(150, 211, 231);
    text-decoration: underline;
}


</style>