<script setup>
defineProps({
  label: { type: String, required: true },
  id: { type: String, default: null },
  name: { type: String, required: true },
  errors: { type: Object, default: null }
})

const value = defineModel()
const focused = ref(false)
const hasValue = computed(() => focused.value || !!value.value)
</script>

<template>
  <div :class="['input-field input-float input-md text-md input-border-default span-4', { 'input-has-value': hasValue }]">
    <label :for="id || name" class="input-label lh-1">
      {{ label }}
    </label>
    <textarea
      :id="id || name"
      :name="name"
      v-bind="$attrs"
      v-model="value"
      class="input w-100"
      @focus="focused = true"
      @blur="focused = false"
    />
  </div>
</template>

<style lang="scss" scoped>
textarea {
  field-sizing: content;
  min-height: 100px;
  display: block;
}

.input-float .input-label {
  top: 2.25rem;
}

.input-float.input-has-value .input-label {
  top: 2.25rem;
}
</style>