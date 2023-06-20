<script lang="ts">
  import type { TransitionConfig } from "svelte/types/runtime/transition";
  import { expoInOut } from "svelte/easing";

  export let color: string;
  export let noiseOpacity = 1;
  export let size = 1;
  export let order = 0;

  const transitionDuration = 1000;

  function flexTransition(node: Element): TransitionConfig {
    return {
      duration: transitionDuration,
      delay: 0,
      css: (t: number) =>
        `flex: ${expoInOut(t) * size} ${expoInOut(t) * size};`,
    };
  }
</script>

<div
  class="color-col"
  class:noise={noiseOpacity > 0}
  in:flexTransition
  out:flexTransition
  style:--column-color={color}
  style:--noise-opacity={noiseOpacity}
  style:--order={order}
  style:--flex-size={size}
>
  <slot />
</div>

<style lang="scss">
  @import "global.scss";

  .color-col {
    flex: var(--flex-size) var(--flex-size);
    will-change: flex;
    order: var(--order);
    background-color: var(--column-color);
    overflow: hidden;

    @include skew();

    &.noise::before {
      @include noise-background(var(--noise-opacity));
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
