<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import HomepageLink from "$lib/components/HomepageLink.svelte";
</script>

<svelte:head>
  <title>Samuel Preston</title>
</svelte:head>

<ColorColumn color="#f7ece1" noiseOpacity={1} />
<ColorColumn color="#cac4ce" noiseOpacity={0.9}>
  <svg id="name-svg" viewBox="0 0 117 20">
    <g class="name-large">
      <text x="0" y="11" alignment-baseline="middle">SAM PRESTON</text>
    </g>
    <g class="name-small">
      <text x="0" y="3" font-size="50%" alignment-baseline="hanging">
        SAMUEL
      </text>
      <text x="0" y="17" font-size="50%" alignment-baseline="baseline">
        PRESTON
      </text>
    </g>
  </svg>
</ColorColumn>
<ColorColumn color="#8d86c9" noiseOpacity={0.6}>
  <div id="menu-container">
    <HomepageLink href="about" textAlign="start">About me</HomepageLink>
    <HomepageLink href="portfolio">Portfolio</HomepageLink>
    <HomepageLink href="resume" textAlign="end">Resume</HomepageLink>
  </div>
</ColorColumn>
<ColorColumn color="#725ac1" noiseOpacity={0.5} />
<ColorColumn color="#242038" noiseOpacity={0.4} />

<style lang="scss">
  @import "global.scss";

  $col-count: 5;
  $max-col-height: calc($global-total-height / $col-count);

  $left-margin-land: 2rem;
  $left-margin-port: 1rem;

  #name-svg {
    position: absolute;
    height: $max-col-height;

    @include breakpoint-port() {
      left: $left-margin-port;
      .name-large {
        display: none;
      }
      .name-small {
        display: block;
      }
    }
    @include breakpoint-land() {
      left: $left-margin-land;
      .name-large {
        display: block;
      }
      .name-small {
        display: none;
      }
    }

    text {
      fill: $global-dark-text;
      font-family: "Inter", sans-serif;
      font-weight: 900;
    }
  }

  #menu-container {
    display: flex;
    position: absolute;
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
