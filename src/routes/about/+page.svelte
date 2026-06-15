<script lang="ts">
    import ColorRow from "$components/ColorRow";
    import { cn } from "$lib/util";
    import type { Snippet } from "svelte";
</script>

{#snippet textRow(content: string | Snippet, cssClass = "")}
    <h1
        class={cn(
            "flex h-full items-center pl-8 font-inter text-[30cqh]/[30cqh] font-semibold text-white sm:text-[40cqh]/[40cqh]",
            cssClass,
        )}
    >
        {#if typeof content === "string"}
            {content}
        {:else}
            {@render content()}
        {/if}
    </h1>
{/snippet}

{#snippet alumniText()}
    <div>
        National Merit UTD <span class="whitespace-nowrap">Alumni ☄️</span>
    </div>
{/snippet}

<ColorRow color="#242038" order={21} noiseOpacity={0.25} flex={2}>
    {@render textRow("Hi, I'm Sam", "items-end pb-4")}
</ColorRow>
<ColorRow color="#2D3142" order={22} noiseOpacity={0.25}>
    {@render textRow(alumniText)}
</ColorRow>
<ColorRow color="#4F5D75" order={23} noiseOpacity={0.3}>
    {@render textRow("Masters of Computer Science")}
</ColorRow>
<ColorRow color="#7D8CA3" order={24} noiseOpacity={0.5}>
    {@render textRow("Developer at Epic Systems")}
</ColorRow>
<ColorRow color="white" order={25} flex={2}></ColorRow>
<ColorRow color="white" order={26} flex={2}></ColorRow>
