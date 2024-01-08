<script lang="ts">
  import MdiChevronUp from "~icons/mdi/chevron-up";
</script>

<a id="back-button" href="/" title="Back">
  <MdiChevronUp />
</a>

<style lang="scss">
  @import "global.scss";

  #back-button {
    @include unskew();

    position: absolute;
    top: $base-margin;
    left: $base-margin;

    z-index: 1;

    :global(svg) {
      position: relative;
      left: -8px;

      color: $global-light-text;
      font-size: 2em;
    }
  }
</style>
