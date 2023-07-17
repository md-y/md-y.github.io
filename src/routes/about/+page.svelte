<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import MdiChevronUp from "~icons/mdi/chevron-up";
</script>

<ColorColumn color="#242038" noiseOpacity={0.25} order={21} size={2}>
  <a id="back-button" href="/">
    <MdiChevronUp />
  </a>
  <div class="text-container title">
    <h1>Hi, I'm Sam</h1>
  </div>
</ColorColumn>
<ColorColumn color="#2D3142" noiseOpacity={0.25} order={25}>
  <div class="text-container list">
    <h1>National Merit</h1>
  </div>
</ColorColumn>
<ColorColumn color="#4F5D75" noiseOpacity={0.3} order={26}>
  <div class="text-container list">
    <h1>Software Engineering Major</h1>
  </div>
</ColorColumn>
<ColorColumn color="#7D8CA3" noiseOpacity={0.5} order={27}>
  <div class="text-container list">
    <h1>University of Texas at Dallas</h1>
  </div>
</ColorColumn>

<style lang="scss">
  @import "global.scss";
  @import "about.scss";

  .text-container {
    display: flex;
    align-items: center;

    height: 100%;
    margin-left: $base-margin;

    @include unskew-rotate();

    &.title h1 {
      font-size: 12vmin;
      align-self: flex-end;
    }

    &.list h1 {
      border-left: 0.2ch solid $global-light-text;
      padding-left: 0.4ch;
      margin-left: 0.4ch;
    }

    h1 {
      display: block;
      margin: 0;
      color: $global-light-text;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 8vmin;
    }
  }

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
