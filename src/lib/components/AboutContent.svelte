<script lang="ts">
  import MaterialSymbolsClose from "~icons/material-symbols/close";
</script>

<div class="about-content">
  <a class="close-button" href="/about"><MaterialSymbolsClose /></a>
  <div class="child-content">
    <slot />
  </div>
</div>

<style lang="scss">
  @import "global.scss";
  @import "about.scss";

  .about-content {
    @include unskew();
    transform-origin: top left;

    padding: $base-margin;

    height: 100%;

    .close-button {
      position: relative;
      left: -6px;

      :global(svg) {
        color: $global-light-text;
        font-size: 2em;
      }
    }
  }

  .child-content {
    display: flex;
    gap: $base-margin;

    margin-top: $base-margin;

    @media (max-aspect-ratio: 0.65) {
      margin-top: 15%;
    }

    :global(h1),
    :global(p),
    :global(a) {
      font-family: "Roboto", sans-serif;
      color: $global-light-text;
    }

    :global(p) {
      font-size: 3.6vmin;
      margin: 0;

      border-left: 0.2ch solid $global-light-text;
      padding-left: 0.8ch;
    }

    :global(h1) {
      font-size: 4vmin;
      margin-top: 0;
      margin-bottom: 0.25em;
    }
  }
</style>
