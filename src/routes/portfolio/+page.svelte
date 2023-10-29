<script lang="ts">
  import BackButton from "$lib/components/BackButton.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import PortfolioItem from "$lib/components/PortfolioItem.svelte";

  import RememberMeImg from "$assets/portfolio/rememberme.png?run";
</script>

<ColorColumn color="#242038" noiseOpacity={0.4} size={2} order={11}>
  <BackButton />
  <div id="title-container">
    <h1>Portfolio</h1>
  </div>
</ColorColumn>
<ColorColumn color="#f7ece1" noiseOpacity={1} order={12}>
  <PortfolioItem />
</ColorColumn>
<ColorColumn color="#cac4ce" noiseOpacity={0.9} order={13}>
  <PortfolioItem />
</ColorColumn>
<ColorColumn color="#8d86c9" noiseOpacity={0.5} order={14}>
  <PortfolioItem />
</ColorColumn>
<ColorColumn color="#725ac1" noiseOpacity={0.4} order={15}>
  <PortfolioItem />
</ColorColumn>
<ColorColumn color="#8d86c9" noiseOpacity={0.5} order={16}>
  <PortfolioItem />
</ColorColumn>
<ColorColumn color="#242038" noiseOpacity={0.3} size={2} order={17} />

<style lang="scss">
  @use "sass:math";
  @import "global.scss";

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
      margin-left: $base-margin;
    }
  }
</style>
