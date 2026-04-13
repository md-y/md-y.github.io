<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";
    import ColorRowContainer from "$components/ColorRowContainer";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="absolute h-screen w-screen overflow-hidden">
    <ColorRowContainer>
        {@render children()}
    </ColorRowContainer>
</div>
