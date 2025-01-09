<script setup>
defineProps({
  label: { type: String, required: true },
  id: { type: String, default: null },
  name: { type: String, required: true },
  errors: { type: Object, default: null }
})

const value = defineModel()
</script>

<template>
  <div class="input">
    <label :for="id || name" class="">
      {{ label }}
    </label>
    <textarea
      :id="id || name"
      :name="name"
      v-bind="$attrs"
      v-model="value"
      
      class=""
    />
  </div>
</template>

<style lang="scss" scoped>
textarea {
  field-sizing: content;
  min-height: 100px;
}
</style>