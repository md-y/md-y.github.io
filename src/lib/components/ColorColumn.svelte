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
  transition:flexTransition
  style:--column-color={color}
  style:--noise-opacity={noiseOpacity}
  style:--order={order}
  style:--flex-size={size}
  on:outroend
  on:outrostart
  on:introend
  on:introstart
>
  <div class="child-container">
    <slot />
  </div>
</div>

<style lang="scss">
  @import "global.scss";

  $aliasing-strip-height: 4px;
  $aliasing-strip-offset: $aliasing-strip-height * -0.5;

  .color-col {
    flex: var(--flex-size) var(--flex-size);
    will-change: flex;
    order: var(--order);
    background-color: var(--column-color);

    @include skew();

    &.noise::before {
      @include noise-background(var(--noise-opacity));
    }

    .child-container {
      position: absolute;
      top: $aliasing-strip-offset;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &::after {
      // Add a tiny floating strip of color to help hide improper anti-aliasing
      content: "";
      position: absolute;
      float: left;
      width: 100%;
      height: $aliasing-strip-height;
      top: $aliasing-strip-offset;
      background-color: var(--column-color);
      z-index: -10;
    }
  }
</style>
