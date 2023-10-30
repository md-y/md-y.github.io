<svelte:options immutable={true} />

<script lang="ts">
  export let href: string;
  export let defer = false;
</script>

{#if defer}
  {@html `<link rel="preload" href="${href}" as="style" onload="if(this.rel!=='stylesheet')this.rel='stylesheet';this.onload=null;">`}
{:else}
  <link rel="stylesheet" {href} />
{/if}
