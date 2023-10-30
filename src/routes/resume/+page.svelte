<script lang="ts">
  import BackButton from "$lib/components/BackButton.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import ResumeLink from "$lib/components/ResumeLink.svelte";
</script>

<ColorColumn color="#242038" noiseOpacity={0.4} order={11}>
  <BackButton />
</ColorColumn>
<ColorColumn color="#725ac1" noiseOpacity={0.4} order={12}>
  <ResumeLink offset={-1} />
</ColorColumn>
<ColorColumn color="#8d86c9" noiseOpacity={0.5} order={13}>
  <ResumeLink offset={-0.66} />
</ColorColumn>
<ColorColumn color="#cac4ce" noiseOpacity={0.9} order={14}>
  <ResumeLink offset={-0.33} />
</ColorColumn>
<ColorColumn color="#f7ece1" noiseOpacity={1} order={15}>
  <ResumeLink dark offset={0} />
</ColorColumn>
<ColorColumn color="#7D8CA3" noiseOpacity={0.5} order={16}>
  <ResumeLink offset={0.33} />
</ColorColumn>
<ColorColumn color="#4F5D75" noiseOpacity={0.3} order={17}>
  <ResumeLink offset={0.66} />
</ColorColumn>
<ColorColumn color="#2D3142" noiseOpacity={0.25} order={18}>
  <ResumeLink offset={1} />
</ColorColumn>
<ColorColumn color="#242038" noiseOpacity={0.25} order={19} />
