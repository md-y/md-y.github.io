<script lang="ts">
    import type { NameRowProps } from "./types";

    const { color }: NameRowProps = $props();
</script>

<h1
    style:--name-color={color}
    class="name-row flex w-full h-full flex-col justify-center font-black text-(--name-color) font-inter pl-8 uppercase"
>
    Sam Preston
</h1>

<style lang="postcss">
    .name-row {
        /* One-line layout */
        @container color-row (aspect-ratio >= 6) {
            font-size: 70cqh;
        }

        /* Two-line layout */
        @container color-row (aspect-ratio < 6) {
            font-size: 40cqh;
            line-height: 40cqh;
            max-width: 8ch;
        }
    }
</style>
