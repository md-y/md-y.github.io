<script lang="ts">
    import type { TransitionConfig } from "svelte/transition";
    import type { ColorRowProps } from "./types";
    import { expoInOut } from "svelte/easing";

    const {
        children,
        flex = 1,
        transitionDuration = 1000,
        color = "white",
    }: ColorRowProps = $props();

    function flexTransition(_node: Element): TransitionConfig {
        return {
            duration: transitionDuration,
            delay: 0,
            css: (t: number) =>
                `flex: ${expoInOut(t) * flex} ${expoInOut(t) * flex};`,
        };
    }
</script>

<div
    transition:flexTransition
    style:flex
    style:--row-color={color}
    class="skew bg-(--row-color) after:absolute after:-top-0.5 after:left-0 after:-z-50 after:h-1 after:w-full after:bg-(--row-color) @container-size/color-row"
>
    <div class="absolute h-full w-full overflow-hidden">
        {@render children?.()}
    </div>
</div>
