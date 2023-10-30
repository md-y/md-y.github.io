<script lang="ts">
  export let dark: boolean = false;
  export let offset: number;
</script>

<div
  class="link-container"
  style:--offset={offset}
  style:--abs-offset={Math.abs(offset)}
>
  <a href="/Resume%20No%20Contact.pdf" class:dark target="_blank">
    View Resume
  </a>
</div>

<style lang="scss">
  @import "global.scss";

  $hover-scale-amount: 110%;
  $offset: var(--offset);
  $abs-offset: var(--abs-offset);

  .link-container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    @include unskew-rotate();

    a {
      @include breakpoint-port() {
        scale: calc(70% + 30% * $abs-offset);
      }
      @include breakpoint-land() {
        translate: calc($offset * 20vw);
      }

      color: $global-light-text;
      font-family: "Inter", sans-serif;
      text-decoration: none;
      font-weight: 700;
      font-size: 12vmin;

      color: transparent;
      background-size: 200% 100%;
      background-position: right;
      background-clip: text;
      -webkit-background-clip: text;
      transition: background-position 250ms, scale 250ms;

      background-image: linear-gradient(
        to right,
        $global-dark-text 50%,
        $global-light-text 50%
      );

      &.dark {
        background-image: linear-gradient(
          to right,
          white 50%,
          $global-dark-text 50%
        );
      }

      &:hover {
        background-position: left;
        scale: $hover-scale-amount $hover-scale-amount;
      }
    }
  }
</style>
