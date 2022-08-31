<template>
    <div class="d-flex align-center">
        <div class="d-flex align-center relative width-100 height-100">
            <div class="d-flex absolute align-center pl-3">
                <i class="bx bx-search bx-sm"></i>
            </div>
            <input type="text" class="search-input width-100 height-100 mr-7 pl-13 pt-3 pb-3" placeholder="Search"
                required>
        </div>
        <button class="primary-button">
            <span>Search</span>
        </button>
    </div>
</template>

  <script setup>
import { computed } from "vue";

const props = defineProps({
    value: String,
});
const emit = defineEmits(["update:value", "enterClicked"]);

const value = computed({
    get: () => props.value,
    set: (v) => emit("update:value", v),
});
</script>
  
<style lang="scss">
.search-input {
    border: solid 2px var(--color-dark-blue);
    border-radius: 10px;
    font-size: .9rem;
    font-weight: 500;
}
</style>
  