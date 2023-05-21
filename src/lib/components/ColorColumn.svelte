<script lang="ts">
  import type { TransitionConfig } from "svelte/types/runtime/transition"

  export let color: string

  function flexTransition(
    node: Element,
    {
      duration,
      delay = 0,
      flexSize = 1,
    }: { duration: number; flexSize?: number; delay?: number }
  ): TransitionConfig {
    return {
      duration,
      delay,
      css: (t: number) => `flex-grow: ${t * flexSize}`,
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="color-col"
  out:flexTransition={{ duration: 500 }}
  in:flexTransition={{ duration: 500 }}
  style:background-color={color}
  on:click
>
  <slot />
</div>

<style lang="scss">
  @import "global.scss";

  .color-col {
    flex-grow: 1;
    transform: skewY($global-tilt-angle);
    transition: flex-grow 250ms;

    &:hover {
      flex-grow: 1.1;
    }

    @keyframes flexGrowIntro {
      from {
        flex-grow: 0.0000001;
      }
      to {
        flex-grow: 1;
      }
    }
  }
</style>
