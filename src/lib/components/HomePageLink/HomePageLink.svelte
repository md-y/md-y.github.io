<script lang="ts">
    import { cn } from "$lib/util";
    import type { HomePageLinkProps } from "./types";

    const {
        children,
        color,
        class: cssClasses,
        href,
    }: HomePageLinkProps = $props();
</script>

<a
    // eslint-disable-next-line svelte/no-navigation-without-resolve
    {href}
    style:--text-color={color}
    class={cn(
        "homepage-link font-inter font-bold text-transparent",
        cssClasses,
    )}
>
    {@render children?.()}
</a>

<style lang="postcss">
    .homepage-link {
        background-image: linear-gradient(
            to right,
            white 50%,
            var(--text-color, black) 50%
        );
        background-size: 200% 100%;
        background-position: right;
        background-clip: text;
        -webkit-background-clip: text;
        transition:
            background-position 250ms,
            scale 250ms;

        &:hover {
            background-position: left;
            scale: 110% 110%;
        }
    }
</style>
