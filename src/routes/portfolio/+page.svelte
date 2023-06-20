<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
</script>

<ColorColumn color="#242038" noiseOpacity={0.4} order={11}>
  <div id="title-container">
    <h1>Hi, I'm Sam</h1>
  </div>
</ColorColumn>
<ColorColumn color="#f7ece1" noiseOpacity={1} size={3} order={12} />
<ColorColumn color="#242038" noiseOpacity={0.4} order={13} />

<style lang="scss">
  @use "sass:math";
  @import "global.scss";

  $left-margin: 2rem;

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
      font-size: 12vmin;
      margin-left: $left-margin;
    }
  }
</style>
