<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte"

  let colorArray = ["242038", "725ac1", "8d86c9", "cac4ce", "f7ece1"].reverse()
  // let colorArray = ["a7a5c6", "8797b2", "6d8a96", "5d707f", "66ced6"].reverse()
</script>

<div id="background">
  <div id="colors-container">
    {#each colorArray as color, i (color)}
      <ColorColumn color={"#" + color} on:click={() => (colorArray = [color])}>
        {#if colorArray.length > 1}
          {#if i == 0}
            <h1>Samuel Preston</h1>
          {/if}
          {#if i == 1}
            <h1>Portfolio</h1>
          {/if}
          {#if i == 2}
            <h1>Resume</h1>
          {/if}
        {/if}
      </ColorColumn>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "sass:math";
  @import "global.scss";

  $extra-padding: math.abs(math.tan($global-tilt-angle) * 100vw * 0.5);

  #background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;

    #colors-container {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 0;
      top: -$extra-padding;
      height: calc(100vh + $extra-padding * 2);
      width: 100vw;

      h1 {
        position: absolute;
        left: 0.5em;
        bottom: 0.5em;
        font-size: 3em;
        transform: skewY(-$global-tilt-angle) rotate($global-tilt-angle);
        color: black;
        // font-family: "Didact Gothic", serif;
        // font-weight: 1000;
      }
    }
  }
</style>
