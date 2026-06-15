<script lang="ts">
    import type { TransitionConfig } from "svelte/transition";
    import type { ColorRowProps } from "./types";
    import { expoInOut } from "svelte/easing";
    import { asset } from "$app/paths";
    import { cn } from "$lib/util";

    const {
        children,
        flex = 1,
        order = "unset",
        transitionDuration = 1000,
        color = "white",
        noiseOpacity = 1,
    }: ColorRowProps = $props();

    const noiseUrl = `url(${asset("/noise.webp")})`;

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
    style:--row-order={order}
    style:--noise-img={noiseUrl}
    style:--noise-opacity={noiseOpacity}
    class={cn(
        "@container-size/color-row order-(--row-order) skew bg-(--row-color)",
        "after:absolute after:-top-0.5 after:left-0 after:-z-50 after:h-1 after:w-full after:bg-(--row-color)",
        noiseOpacity > 0 &&
            "before:pointer-events-none before:absolute before:h-full before:w-full before:bg-(image:--noise-img) before:opacity-(--noise-opacity)",
    )}
>
    <div class="absolute h-full w-full overflow-hidden">
        {@render children?.()}
    </div>
</div>
