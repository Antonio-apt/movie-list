<template>
  <footer class="footer">
    <div class="footer__content">
      <section class="footer__base">
        <div class="footer__info">
          Made with S2
        </div>
        <div class="footer__media">
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
.footer {
  $self: &;
  flex-shrink: 0;
  margin-top: 8rem;
  height: 100px;
  background-color: $dark-blue;
  padding: 1rem 5rem 0;
  color: white;
  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    #{ $self }__base {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 0.9em;
    }
  }
}
</style>
