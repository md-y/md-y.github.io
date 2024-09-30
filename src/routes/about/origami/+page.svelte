<script lang="ts">
  import AboutContent from "$lib/components/AboutContent.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import PageInfo from "$lib/components/PageInfo.svelte";

  import BeanImg from "$assets/about/origami/bean.png?enhanced";
  import RiverImg from "$assets/about/origami/chicago_river.png?enhanced";
  import GrantParkImg from "$assets/about/origami/grant_park.png?enhanced";
  import NavyPierImg from "$assets/about/origami/navy_pier.png?enhanced";
</script>

<PageInfo title="Origami Risk" description="I work for Origami Risk." />

<ColorColumn color="#232C33" noiseOpacity={0.25} order={33} size={5}>
  <AboutContent>
    <div class="gallery">
      <div class="row">
        <div class="photo">
          <enhanced:img
            src={BeanImg}
            alt="The famous Cloud Gate sculplture, known as the Bean"
          />
        </div>
        <div class="photo">
          <enhanced:img src={RiverImg} alt="The chicago river" />
        </div>
      </div>
      <div class="row">
        <div class="photo">
          <enhanced:img
            src={GrantParkImg}
            alt="View from the Grant Park tennis courts"
          />
        </div>
        <div class="photo">
          <enhanced:img
            src={NavyPierImg}
            alt="View of Chicago from Navy Pier"
          />
        </div>
      </div>
    </div>
    <div class="text">
      <h1>Origami Risk</h1>
      <p>
        I am currently working for Origami Risk LLC, a risk management software
        company.
      </p>
      <p>
        I started working during summer 2024 for an internship at the company
        headquarters in Chicago, IL.
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

  .gallery {
    display: flex;
    flex-direction: column;
    flex: 2 2;

    min-height: $large-col-height;
  }

  .row {
    display: flex;
    flex-direction: row;

    gap: 0.5em;
    margin-bottom: 0.5em;

    width: 100%;
    height: 50%;
  }

  .photo {
    position: relative;
    height: 100%;
    flex: 1 1;

    :global(img) {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
