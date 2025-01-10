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
  <div class="options">
    <label
      v-for="option in options"
      :key="option.value"
      :class="{ selected: value === option.value }"
    >
      <input
        type="radio"
        :name="id"
        :value="option.value"
        v-model="value"
        class="visually-hidden"
      />
      <span>
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
  .options {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;

    label {
      flex-grow: 1;
      background: var(--blue);
      color: var(--white);
      border-radius: .75rem;
      font-weight: bold;
      font-size: var(--text-2xl);
      line-height: 1.1;
      text-align: center;
      padding: 1rem;
      cursor: pointer;
      transition: .25s ease;
      outline-offset: 3px;

      &:hover {
        opacity: .75;
      }

      &:focus-within {
        outline: 3px var(--primary) solid;
      }

      &.selected {
        background: var(--primary);
        outline: 3px var(--primary) solid;
      }
    }
  }
</style>