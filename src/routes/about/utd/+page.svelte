<script lang="ts">
  import AboutContent from "$lib/components/AboutContent.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
</script>

<ColorColumn color="#2D3047" noiseOpacity={0.25} order={34} size={5}>
  <AboutContent>
    <div>
      <h1>Honors</h1>
      <p>
        I'm a member of the
        <a
          href="https://honors.utdallas.edu/"
          title="Hobson Wildenthal Honors College"
          target="_blank"
        >
          Collegium V Honors Society,
        </a>
        and I have been awarded a place on the
        <a
          href="https://www.utdallas.edu/current/deans-list/"
          title="UTD Dean's List"
          target="_blank"
        >
          Dean's List
        </a>
        every semester I have attended UTD.
      </p>
    </div>
    <div>
      <h1>Grade</h1>
      <p>
        I'm currently a second-year, Junior-standing undergraduate student at
        UTD. I'm expected to graduate May 2026.
      </p>
    </div>
    <div>
      <h1>National Merit</h1>
      <p>
        I'm attending UTD on a full-ride scholarship awarded to National Merit
        Finalists by the school.
      </p>
    </div>
  </AboutContent>
</ColorColumn>

<style lang="scss">
  p,
  div {
    flex: 1 1;
  }
</style>
