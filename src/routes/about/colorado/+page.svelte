<script lang="ts">
  import AboutContent from "$lib/components/AboutContent.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import Img from "@zerodevx/svelte-img";
  import PageInfo from "$lib/components/PageInfo.svelte";

  import SilverjackImg from "$assets/about/colorado/silverjack_cliff.jpg?run";
  import PonderosaImg from "$assets/about/colorado/ponderosa.jpg?run";
</script>

<PageInfo
  title="Colorado"
  description="I am from the beautiful town of Montrose, Colorado."
/>

<ColorColumn color="#232C33" noiseOpacity={0.25} order={33} size={5}>
  <AboutContent>
    <div class="photo">
      <Img src={SilverjackImg} alt="Cliffs near Silver Jack reservoir" />
    </div>
    <div class="photo">
      <Img
        src={PonderosaImg}
        alt="Sunrise at the Ponderosa campgrounds near Blue Mesa reservoir"
      />
    </div>
    <div class="text">
      <h1>Western Colorado</h1>
      <p>I'm from the beautiful town of Montrose, Colorado.</p>
      <p>
        I love spending time in the surrounding Uncompahgre Valley, San Juan
        mountains, and the nearby world-class Telluride ski resort.
      </p>
    </div>
  </AboutContent>
</ColorColumn>

<style lang="scss">
  @import "global.scss";
  @import "about.scss";

  .text {
    flex: 3 3;

    @media (min-aspect-ratio: 1.8) {
      flex: 2 2;
    }

    @media (max-aspect-ratio: 0.5) {
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
    }
  }
</style>
