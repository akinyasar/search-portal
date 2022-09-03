<template>
    <h1>Top News</h1>
    <div class="carousel-container">
        <i class='bx bx-lg bx-chevron-left carousel-nav mr-3' @click="prev"></i>
        <div class="carousel-content">
            <div ref="inner" class="inner" :style="innerStyles.style">
                <div class="card" v-for="card in cards" :key="card">
                    <img :src="card.img" style="width:100%; height: 170px;" />
                    <span class="card-title" v-html="card.title"></span>
                    <span class="card-subtitle">{{ card.subtitle }}</span>
                </div>
            </div>
        </div>
        <i class='bx bx-lg bx-chevron-right carousel-nav ml-3' @click="next"></i>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const cards = ref([
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
    {
        img: '/carousel-image.jpg',
        title: 'A Plan to Rebuild the Bus Terminal <br> Everyone Loves to Hate',
        subtitle: '1h ago · by Troy Corlson'
    },
]);
const innerStyles = reactive({
    style: {}
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
  
<style scoped lang="scss">
.carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .carousel-content {
        width: 100%;
        overflow: hidden;

        .inner {
            white-space: nowrap;
            transition: transform 0.2s;

            .card {
                display: inline-flex;
                flex-direction: column;
                width: 350px;
                height: 280px;
                padding: 0rem 1rem;

                overflow-wrap: break-word !important;

                .card-title {
                    margin-top: 0.4rem;
                    font-size: large;
                    font-weight: bold;
                }

                .card-subtitle {
                    color: var(--color-order-hover)
                }
            }
        }
    }

    .carousel-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(--color-carousel-nav-bg);
        color: var(--color-order-hover);
        border-radius: 50%;
    }
}
</style>
  