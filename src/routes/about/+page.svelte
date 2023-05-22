<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
</script>

<ColorColumn
  color="#242038"
  noiseColor="#ffffff"
  noiseOpacity={0.08}
  order={10}
  solo
>
  <h1>This is the about page</h1>
  <br />
  <button on:click={() => history.back()}>Back</button>
</ColorColumn>
