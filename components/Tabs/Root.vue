<script setup lang="ts">
import type { InjectionKey } from "vue";

defineProps<{}>();
defineSlots<{
  default: void;
}>();

const checkedTabId = ref<string | undefined>();

provide(checkedTabInjectionKey, checkedTabId);
</script>
<script lang="ts">
export const checkedTabInjectionKey = Symbol() as InjectionKey<
  Ref<string | undefined>
>;
export type CheckedTabInjectionKey = typeof checkedTabInjectionKey;
</script>
<template>
  <div class="tabs">
    <slot />
  </div>
</template>
<style lang="css" scoped>
.tabs {
  border-bottom: 1px solid var(--separator);
}
</style>
