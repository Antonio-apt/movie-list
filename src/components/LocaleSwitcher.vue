<template>
  <label for="language">
    Escolha a linguagem
    <select v-model="$i18n.locale"  name="language" id="language">
      <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  data() {
    return { locales: ['fr', 'en'] };
  },
};
</script>
