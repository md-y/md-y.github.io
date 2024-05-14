<script lang="ts">
  import AboutPhoto from "$lib/components/AboutPhoto.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";

  import SimpleIconsInstagram from "~icons/simple-icons/instagram";
  import SimpleIconsLinkedin from "~icons/simple-icons/linkedin";
  import SimpleIconsHandshake from "~icons/simple-icons/handshake";
  import SimpleIconsGithub from "~icons/simple-icons/github";

  import AwardsImg from "$assets/about/hacksmu.jpg?enhanced";
  import SilverjackImg from "$assets/about/silverjack.png?enhanced";
  import UtdImg from "$assets/about/utd.png?enhanced";
  import AnnecyImg from "$assets/about/annecy.png?enhanced";

  let colAnimating = false;
</script>

<slot />
<ColorColumn
  color="#BFC0C0"
  noiseOpacity={1}
  order={41}
  size={2}
  on:introend={() => (colAnimating = false)}
  on:outroend={() => (colAnimating = false)}
  on:introstart={() => (colAnimating = true)}
  on:outrostart={() => (colAnimating = true)}
>
  <div id="photos-container">
    {#if !colAnimating}
      <AboutPhoto
        src={AnnecyImg}
        alt="Me in front of Lake Annecy in France"
        overlay="Study Abroad"
        href="/about/study-abroad"
        introDelay={0}
      />
      <AboutPhoto
        src={AwardsImg}
        alt="Me receiving an award at a Hackathon"
        overlay="Awards"
        href="/about/awards"
        introDelay={50}
      />
      <AboutPhoto
        src={SilverjackImg}
        alt="A dirt path leading into the woods with a mountain in the background in rural Colorado"
        overlay="Western Colorado"
        href="/about/colorado"
        introDelay={100}
      />
      <AboutPhoto
        src={UtdImg}
        alt="Aerial overview of the University of Texas at Dallas campus"
        overlay="UT Dallas"
        href="/about/utd"
        introDelay={150}
      />
    {/if}
  </div>
</ColorColumn>
<ColorColumn color="#4F5D75" noiseOpacity={0.3} order={42} size={2}>
  <div id="links-container">
    <a
      target="_blank"
      href="https://www.instagram.com/sam_prest0/"
      title="Instagram"
    >
      <SimpleIconsInstagram />
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/samuelpreston/"
      title="LinkedIn"
    >
      <SimpleIconsLinkedin />
    </a>
    <a
      target="_blank"
      href="https://app.joinhandshake.com/stu/users/41303246/"
      title="Handshake"
    >
      <SimpleIconsHandshake />
    </a>
    <a target="_blank" href="https://github.com/md-y/" title="Github">
      <SimpleIconsGithub />
    </a>
  </div>
</ColorColumn>

<style lang="scss">
  @import "global.scss";
  @import "about.scss";

  $base-margin: 4vmin;

  #photos-container {
    // Keep constant height so images don't get squished during outro
    height: $large-col-height;

    padding-left: $base-margin;
    padding-right: $base-margin;

    overflow: hidden;

    display: flex;
    justify-content: space-between;
    gap: $base-margin;

    clip-path: polygon(
      0 $base-margin,
      100% $base-margin,
      100% calc(100% - $base-margin),
      0% calc(100% - $base-margin)
    );
  }

  #links-container {
    @include unskew();
    transform-origin: top right;

    display: flex;
    align-items: flex-end;
    gap: $base-margin * 0.5;

    position: absolute;
    right: $base-margin;
    top: -$base-margin;
    height: $large-col-height;

    :global(svg) {
      color: $global-light-text;
      font-size: min(3em, 6.5vmin);

      transition: scale 250ms;
      &:hover {
        scale: 110% 110%;
      }
    }
  }
</style>
