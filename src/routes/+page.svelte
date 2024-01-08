<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import HomepageLink from "$lib/components/HomepageLink.svelte";
  import PageInfo from "$lib/components/PageInfo.svelte";
</script>

<PageInfo
  title="Samuel Preston"
  description="Samuel Preston is a National Merit Scholar studying Software Engineering at the University of Texas at Dallas."
/>

<ColorColumn color="#f7ece1" noiseOpacity={1} />
<ColorColumn color="#cac4ce" noiseOpacity={0.9}>
  <div id="name-container">
    <h1 class="land">SAM PRESTON</h1>
    <h1 class="port">SAMUEL <br /> PRESTON</h1>
  </div>
</ColorColumn>
<ColorColumn color="#8d86c9" noiseOpacity={0.5}>
  <div id="menu-container">
    <HomepageLink href="about">About</HomepageLink>
    <HomepageLink href="portfolio">Portfolio</HomepageLink>
    <HomepageLink href="resume">Resume</HomepageLink>
  </div>
</ColorColumn>
<ColorColumn color="#725ac1" noiseOpacity={0.4} />
<ColorColumn color="#242038" noiseOpacity={0.3} />

<style lang="scss">
  @import "global.scss";

  $col-count: 5;
  $max-col-height: calc($global-total-height / $col-count);

  $left-margin-land: 2rem;
  $left-margin-port: 1rem;

  #name-container {
    position: relative;
    height: $max-col-height;
    display: flex;
    align-items: center;

    h1 {
      margin: 0;
      color: $global-dark-text;
      font-family: "Inter", sans-serif;
      font-weight: 900;

      &.land {
        display: none;
      }
      &.port {
        display: none;
      }

      @include breakpoint-port() {
        margin-left: $left-margin-port;
        font-size: calc($max-col-height * 0.4);
        line-height: calc($max-col-height / 2.25);
        &.port {
          display: block;
        }
      }
      @include breakpoint-land() {
        margin-left: $left-margin-land;
        font-size: calc($max-col-height * 0.8);
        &.land {
          display: block;
        }
      }
    }
  }

  #menu-container {
    display: flex;
    position: relative;
    height: $max-col-height;
    justify-content: space-between;

    @include breakpoint-port() {
      flex-direction: column;
      width: 100%;
      padding-left: $left-margin-port;
    }
    @include breakpoint-land() {
      flex-direction: row;
      align-items: center;
      padding-left: $left-margin-land;
      width: calc(100% - $left-margin-land * 2);
    }
  }
</style>
