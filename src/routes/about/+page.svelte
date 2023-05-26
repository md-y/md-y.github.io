<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
</script>

<svelte:head>
  <title>About me</title>
</svelte:head>

<ColorColumn
  color="#22223B"
  noiseColor="#ffffff"
  noiseOpacity={0.08}
  order={10}
  size={2}
>
  <a id="back-button" href="/">Back</a>
</ColorColumn>

<ColorColumn
  color="#F2E9E4"
  noiseColor="#ffffff"
  noiseOpacity={0.08}
  order={11}
  size={0.5}
/>

<ColorColumn
  color="#9A8C98"
  noiseColor="#ffffff"
  noiseOpacity={0.15}
  order={12}
  size={20}
>
  <div id="scroll-area">
    <div id="about-area">
      <div id="about-header">
        <h1>Hello, I'm Sam</h1>
      </div>
      <p id="about-paragraph">
        I'm a sophomore National Merit scholar studying Software Engineering at
        the University of Texas at Dallas (UTD). Although I grew up in rural
        Colorado, I am currently living in Richardson, Texas, to attend UTD.
        <br />
        <br />
        I have recently worked as a full-stack developer and IOT security researcher
        at UTD's chapter of the Association of Computing Machinery (ACM), the country's
        <a
          href="https://cs.utdallas.edu/acm-utd-1-chapter-for-school-service/"
          target="_blank"
        >
          best chapter
        </a>
        for school service in 2023.
        <br />
        <br />
        I'm also a member of the Collegium V Honors society, and have been awarded
        a spot on the
        <a href="https://www.utdallas.edu/current/deans-list/" target="_blank">
          Dean's List
        </a>
        every semester I have attended UTD.
      </p>
    </div>
  </div>
</ColorColumn>

<style lang="scss">
  @use "sass:math";
  @import "global.scss";

  $total-flex: 31;
  $large-col-height: 100vh * math.div(20, $total-flex);

  $max-width: 1200px;

  @mixin box-shadow() {
    box-shadow: -5px 5px 5px 2px rgba(0, 0, 0, 0.3);
  }

  #back-button {
    color: #f7ece1;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-decoration: none;

    $width-breakpoint: $max-width * 0.75;
    @media (min-width: $width-breakpoint) {
      font-size: 2em;
    }
    @media (max-width: $width-breakpoint) {
      font-size: 1.5em;
    }

    position: absolute;
    bottom: 0;
    margin-left: 1em;

    @include unskew-rotate();

    display: flex;
    align-items: baseline;

    &::before {
      content: "⮜";
      overflow: hidden;
      width: 0;
      transition: width 250ms;
    }

    &:hover::before {
      width: 1ch;
    }
  }

  #scroll-area {
    overflow-y: auto;
    height: 100%;
  }

  #about-area {
    width: 100%;
    max-width: $max-width;
    background-color: blue;

    margin: auto;
    margin-top: 10%;
    margin-bottom: $global-extra-padding;
    padding-bottom: $global-extra-padding;

    @include box-shadow();
    background-image: linear-gradient(to top right, #22223b 60%, #323249);

    #about-header {
      padding-top: $global-extra-padding;
      @include unskew();

      h1 {
        margin: 0.5em 1em 0 1em;

        color: #f7ece1;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
      }
    }

    #about-paragraph {
      @include unskew();

      $padding: $max-width * math.div(1, 64);
      $offset: $max-width * math.div(1, 128);
      padding: $padding;

      @media (min-width: ($max-width + $padding)) {
        width: $max-width + $offset * 2;
        translate: -($offset + $padding) 0%;
      }

      @media (max-width: ($max-width + $padding)) {
        width: calc(100vw - $padding * 4);
        margin-left: $padding;
      }

      @include box-shadow();
      background-color: #f2e9e4;

      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 1.25em;

      z-index: 100;

      a {
        text-decoration: underline;
        color: black;
      }
    }
  }
</style>
