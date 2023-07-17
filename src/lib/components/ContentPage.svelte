<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";

  export let title: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<ColorColumn color="#242038" noiseOpacity={0.4} order={21}>
  <div id="title-container">
    <h1>{title}</h1>
  </div>
</ColorColumn>
<ColorColumn color="#f7ece1" noiseOpacity={1} size={6} order={22}>
  <div id="page-content">
    <slot />
  </div>
</ColorColumn>

<style lang="scss">
  @use "sass:math";
  @import "global.scss";

  $base-margin: 1rem;

  #title-container {
    display: flex;
    align-items: flex-end;
    height: 100%;

    @include unskew-rotate();

    h1 {
      margin: 0;
      color: #f7ece1;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 8vmin;
      margin-left: $base-margin;
    }
  }

  #page-content {
    @include unskew();
    transform-origin: top left;

    position: absolute;
    left: $base-margin;
    right: $base-margin;
  }
</style>
