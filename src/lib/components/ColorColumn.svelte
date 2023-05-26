<script lang="ts">
  import type { TransitionConfig } from "svelte/types/runtime/transition";
  import { expoInOut } from "svelte/easing";
  import { v4 as uuid } from "@lukeed/uuid";
  import NoiseFilter from "./NoiseFilter.svelte";

  export let color: string;
  export let noiseColor = color;
  export let noiseOpacity = 1;
  export let size = 1;
  export let order = 0;

  const filterId = `filter-${uuid()}`;
  const filterSeed = parseInt(color.replace("#", ""), 16) || 1;

  const transitionDuration = 1000;

  function flexTransition(node: Element): TransitionConfig {
    return {
      duration: transitionDuration,
      delay: 0,
      css: (t: number) => `flex-grow: ${expoInOut(t) * size};`,
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
  style:--flex-grow={size}
>
  <NoiseFilter id={filterId} color={noiseColor} seed={filterSeed} />
  <slot />
</div>

<style lang="scss">
  @import "global.scss";

  .color-col {
    flex: var(--flex-grow) var(--flex-grow);
    order: var(--order);
    transform: skewY($global-tilt-angle);
    background-color: var(--column-color);
    overflow: hidden;

    &::before {
      content: "";
      filter: var(--filter-url);
      position: absolute;
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
