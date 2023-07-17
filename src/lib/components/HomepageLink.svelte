<script lang="ts">
  export let href: string;
</script>

<a {href}><slot /></a>

<style lang="scss">
  @import "global.scss";

  $hover-scale-amount: 110%;

  a {
    font-family: "Inter", sans-serif;
    text-decoration: none;
    font-weight: 700;

    color: transparent;
    background-image: linear-gradient(
      to right,
      white 50%,
      $global-dark-text 50%
    );
    background-size: 200% 100%;
    background-position: right;
    background-clip: text;
    -webkit-background-clip: text;
    transition: background-position 250ms, scale 250ms;

    &:hover {
      background-position: left;
      scale: $hover-scale-amount $hover-scale-amount;
    }

    @include breakpoint-port() {
      font-size: 5.7vh;
      transform-origin: center left;
    }
    @include breakpoint-land() {
      font-size: 6vw;
    }
  }
</style>
