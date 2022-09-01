<template>
    <h1>Top News</h1>
    <div class="carousel">
        <div ref="inner" class="inner" :style="innerStyles.style">
            <div class="card" v-for="card in cards" :key="card">
                {{ card }}
            </div>
        </div>
    </div>
    <button @click="prev">prev</button>
    <button @click="next">next</button>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const cards = ref([1, 2, 3, 4, 5, 6, 7, 8]);
const innerStyles = reactive({
    transform: '',
    transition: '',
    style: {

    }
});
const step = ref('');
const inner = ref(null)
const transitioning = ref(false);

const setStep = () => {
    const innerWidth = inner.value.scrollWidth
    const totalCards = cards.value.length
    step.value = `${innerWidth / totalCards}px`
}
const afterTransition = (callback) => {
    const listener = () => {
        callback()
        inner.value.removeEventListener('transitionend', listener)
    }
    inner.value.addEventListener('transitionend', listener)
}
const next = () => {
    if (transitioning.value) return
    transitioning.value = true
    moveLeft()
    afterTransition(() => {
        const card = cards.value.shift()
        cards.value.push(card)
        resetTranslate()
        transitioning.value = false
    })
}
const prev = () => {
    if (transitioning.value) return
    transitioning.value = true
    moveRight()
    afterTransition(() => {
        const card = cards.value.pop()
        cards.value.unshift(card)
        resetTranslate()
        transitioning.value = false
    })
}
const moveLeft = () => {
    innerStyles.style = {
        transform: `translateX(-${step.value}) translateX(-${step.value})`
    }
}
const moveRight = () => {
    innerStyles.style = {
        transform: `translateX(${step.value}) translateX(-${step.value})`
    }
}

const resetTranslate = () => {
    innerStyles.style = {
        transform: `translateX(-${step.value})`,
        transition: 'none'
    }
}
onMounted(() => {
    setStep();
    resetTranslate();
})
</script>
  
<style>
.carousel {
    width: 100%;
    overflow: hidden;
}

.inner {
    white-space: nowrap;
    transition: transform 0.2s;
}

.card {
    width: 110px;
    margin-right: 10px;
    display: inline-flex;

    /* optional */
    height: 60px;
    background-color: #39b1bd;
    color: white;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
}

/* optional */
button {
    margin-right: 5px;
    margin-top: 10px;
}
</style>
  