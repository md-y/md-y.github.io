<script lang="ts">
  import type { TransitionConfig } from "svelte/types/runtime/transition";
  import { expoInOut } from "svelte/easing";
  import { v4 as uuid } from "@lukeed/uuid";

  export let color: string;
  export let noiseColor = color;
  export let noiseOpacity = 1;
  export let solo = false;
  export let order = 0;

  const filterId = `filter-${uuid()}`;
  const filterSeed = parseInt(color.replace("#", ""), 16) || 1;

  const transitionDuration = 1000;

  function flexTransition(node: Element): TransitionConfig {
    return {
      duration: transitionDuration,
      delay: 0,
      css: (t: number) => `flex-grow: ${expoInOut(t)};`,
    };
  }
</script>

<div
  class="color-col"
  in:flexTransition
  out:flexTransition
  style:--column-color={color}
  style:--filter-url="url(#{filterId})"
  style:--noise-opacity={noiseOpacity}
  style:--order={order}
>
  <svg
    class="filter-svg"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter
        id={filterId}
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="linearRGB"
      >
        <feTurbulence
          type="turbulence"
          baseFrequency="0.05"
          numOctaves="4"
          seed={filterSeed}
          stitchTiles="stitch"
          result="turbulence"
        />
        <feSpecularLighting
          surfaceScale="10"
          specularConstant="0.75"
          specularExponent="20"
          lighting-color={noiseColor}
          in="turbulence"
          result="specularLighting"
        >
          <feDistantLight azimuth="3" elevation="100" />
        </feSpecularLighting>
      </filter>
    </defs>
  </svg>
  <div class:solo><slot /></div>
</div>

<style lang="scss">
  @import "global.scss";

  .color-col {
    flex-grow: 1;
    order: var(--order);
    transform: skewY($global-tilt-angle);
    background-color: var(--column-color);
    overflow: hidden;

    .solo {
      position: fixed;
      transform: skewY(-$global-tilt-angle);
      padding-top: $global-extra-padding;
      width: 100vw;
      height: 100vh;
    }

    .filter-svg {
      // Cant use display:none because that breaks the filter, so this hides it instead
      width: 1px;
      height: 1px;
      position: absolute;
      right: -100px;
    }

    &::before {
      content: "";
      filter: var(--filter-url);
      background-color: var(--column-color);
      position: absolute;
      // Move down by 10% because the filter extends beyond the div otherwise
      top: 10%;
      width: 100%;
      height: 100%;
      opacity: var(--noise-opacity);
    }

    &::after {
      // Add a tiny floating strip of color to help hide improper anti-aliasing
      content: "";
      position: absolute;
      float: left;
      width: 100%;
      height: 8px;
      top: -4px;
      background-color: var(--column-color);
      z-index: -10;
    }
  }
</style>
