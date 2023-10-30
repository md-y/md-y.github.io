<script lang="ts">
  import AboutContent from "$lib/components/AboutContent.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import Img from "@zerodevx/svelte-img";

  import PragueImg from "$assets/about/study-abroad/prague.jpg?run";
</script>

<ColorColumn color="#272635" noiseOpacity={0.15} order={31} size={5}>
  <AboutContent>
    <div class="photo">
      <Img src={PragueImg} alt="An aerial photo of Prague" />
    </div>
    <div class="text">
      <h1>European Study Abroad</h1>
      <p>
        In June 2023, I participated in a UTD ECS Study Abroad program in
        Prague, Czechia.
      </p>
      <p>
        Over five weeks, I studied professional technical communication and
        human-computer interactions (UX).
      </p>
    </div>
  </AboutContent>
</ColorColumn>

<style lang="scss">
  @import "global.scss";
  @import "about.scss";

  .text {
    flex: 3 3;

    @media (max-aspect-ratio: 0.8) {
      flex: 1 1;
    }

    p {
      margin-bottom: $base-margin;
    }
  }

  .photo {
    position: relative;
    flex: 1 1;

    min-height: $large-col-height;

    :global(img) {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 50% 10%;
    }
  }
</style>
