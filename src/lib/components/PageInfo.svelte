<script lang="ts">
  export let description: string;
  export let title: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>
