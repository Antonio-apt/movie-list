<template>
  <header class="header">
    <div class="header__content">
      <LocaleSwitcher />
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="scss">
.header {
  flex-shrink: 0;
  min-height: 30px;
  background-color: $dark-blue;
  color: white;
  &__content {
    display: flex;
    height: 100%;
    padding: 1rem;
  }
}
</style>
