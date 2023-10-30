<script lang="ts">
  import Stylesheet from "$lib/components/Stylesheet.svelte";
</script>

<svelte:head>
  <Stylesheet
    href="https://fonts.googleapis.com/css?family=Inter:black,bold,regular|Roboto:regular,bold&display=swap"
    defer
  />
</svelte:head>

<div id="background">
  <div id="colors-container">
    <slot />
  </div>
</div>

<style lang="scss">
  @use "sass:math";
  @import "global.scss";

  #background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #colors-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0;
    top: -$global-extra-padding;
    height: calc(100vh + $global-extra-padding * 2);
    width: 100vw;
  }
</style>
