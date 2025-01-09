<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  options: {
    type: Array, required: true
  }
})

const value = defineModel()
</script>

<template>
  <div>
    <label
      v-for="option in options"
      :key="option.value"
    >
      <input
        type="radio"
        :name="id"
        :value="option.value"
        v-model="value"
      />
      <span>
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<style>

</style>