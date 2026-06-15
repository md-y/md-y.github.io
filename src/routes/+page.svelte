<script lang="ts">
    import NameRow from "$components/NameRow";
    import ColorRow from "$components/ColorRow";
    import HomePageLink from "$components/HomePageLink";
    import { resolve } from "$app/paths";

    const textColor = "#242038";
</script>

{#snippet link(href: string, content: string)}
    <HomePageLink
        {href}
        color={textColor}
        class="origin-(--transform-origin) text-(length:--text-size)"
    >
        {content}
    </HomePageLink>
{/snippet}

<ColorRow color="#f7ece1" />
<ColorRow color="#cac4ce">
    <NameRow color={textColor} />
</ColorRow>
<ColorRow color="#8d86c9">
    <div class="link-container flex h-full w-full flex-col px-8">
        {@render link(resolve("/about"), "About")}
        {@render link(resolve("/portfolio"), "Portfolio")}
        {@render link(resolve("/resume"), "Resume")}
    </div>
</ColorRow>
<ColorRow color="#725ac1" />
<ColorRow color="#242038" />

<style lang="postcss">
    @reference "tailwindcss";

    .link-container {
        /* Row layout */
        @container color-row (aspect-ratio >= 6) {
            --text-size: 40cqh;
            --transform-origin: center center;
            flex-direction: row;
            align-items: center;
            gap: 40cqh;
        }

        /* Column layout */
        @container color-row (aspect-ratio < 6) {
            --text-size: 22cqh;
            --transform-origin: center left;
        }
    }
</style>
