<template>
    <div class="mt-20 arrow-button">
        <a href="#services" class="bi bi-chevron-down text-gray-400 text-2xl arrow-icon"></a>
    </div>
</template>

<style scoped>
.arrow-button {
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    top: 50px;
}

@keyframes slide-up-down {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px); /* Adjust the height as needed */
    }
    100% {
        transform: translateY(0);
    }
}

.arrow-icon {
    animation: slide-up-down 2s infinite;
}
</style>

<script lang="ts">
</script>
