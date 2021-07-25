<template>
  <button :disabled="loadingSpinner" class="flex items-center">
    <div v-if="loadingSpinner" class="btn-spinner mr-2" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loadingSpinner: Boolean,
  },
}
</script>
