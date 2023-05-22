<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inter:black,bold"
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
    // This helps hide the faint, anti-aliasing-caused lines seen when the columns are moving
    background-image: linear-gradient(to bottom, white, black);
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
