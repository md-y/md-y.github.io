<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import HomepageLink from "$lib/components/HomepageLink.svelte";
</script>

<svelte:head>
  <title>Samuel Preston</title>
</svelte:head>

<ColorColumn color="#f7ece1" noiseColor="#ffffff" />
<ColorColumn color="#cac4ce" noiseOpacity={0.7}>
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
<ColorColumn color="#8d86c9" noiseOpacity={0.7}>
  <div id="menu-container">
    <HomepageLink href="about">About me</HomepageLink>
    <HomepageLink href="portfolio">Portfolio</HomepageLink>
    <HomepageLink href="resume">Resume</HomepageLink>
  </div>
</ColorColumn>
<ColorColumn color="#725ac1" noiseOpacity={0.7} />
<ColorColumn color="#242038" noiseColor="#ffffff" noiseOpacity={0.08} />

<style lang="scss">
  @import "global.scss";

  $col-count: 5;
  $max-col-height: calc($global-total-height / $col-count);

  #name-svg {
    position: absolute;
    left: 0.5em;
    height: $max-col-height;

    @include breakpoint-port() {
      .name-large {
        display: none;
      }
      .name-small {
        display: block;
      }
    }
    @include breakpoint-land() {
      .name-large {
        display: block;
      }
      .name-small {
        display: none;
      }
    }

    text {
      fill: $global-dark-text;
      font-family: "Inter", serif;
      font-weight: 900;
    }
  }

  #menu-container {
    display: flex;
    position: absolute;
    width: 100%;
    height: $max-col-height;

    @include breakpoint-port() {
      flex-direction: column;
      padding-left: 0.5em;
    }
    @include breakpoint-land() {
      flex-direction: row;
      padding-left: 0.5em;
      padding-right: 0.5em;
      align-items: center;
    }
  }
</style>
