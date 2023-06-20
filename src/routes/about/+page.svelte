<script lang="ts">
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import type { TransitionConfig } from "svelte/types/runtime/transition";
  import { expoInOut } from "svelte/easing";

  function flexTransition(node: Element): TransitionConfig {
    return {
      duration: 1000,
      delay: 0,
      css: (t: number) => `flex: 0 0 ${expoInOut(t) * 2}rem;`,
    };
  }
</script>

<svelte:head>
  <title>About me</title>
</svelte:head>

<ColorColumn color="#242038" noiseOpacity={0.4} order={11}>
  <div id="title-container">
    <h1>Hi, I'm Sam</h1>
  </div>
</ColorColumn>
<ColorColumn color="#f7ece1" noiseOpacity={0} size={4} order={12}>
  <div id="about-colors-container">
    <div class="color-row row-1" in:flexTransition out:flexTransition>
      <div />
    </div>
    <div class="color-row row-2" in:flexTransition out:flexTransition>
      <div />
    </div>
    <div class="color-row row-3" in:flexTransition out:flexTransition>
      <div />
    </div>
    <div id="about-paragraph-container">
      <p>
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

  $left-margin: 2rem;

  $rows: (#725ac1 0.6) (#8d86c9 0.7) (#cac4ce 1);
  $row-count: length($rows);

  #title-container {
    display: flex;
    align-items: flex-end;
    height: 100%;

    @include unskew-rotate();

    h1 {
      margin: 0;
      color: #f7ece1;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 12vmin;
      margin-left: $left-margin;
    }
  }

  #about-colors-container {
    position: absolute;
    width: 100%;
    min-height: 100%;

    top: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    .color-row {
      flex: 0 0 $left-margin;
      transform-origin: top left;
      div {
        position: absolute;
        height: math.div(100vh, $row-count);
        width: 100%;
      }
    }

    @for $i from 1 through $row-count {
      $row: nth($rows, $i);

      .color-row.row-#{$i} {
        transform: skewY(math.div(-$global-tilt-angle * ($i - 1), $row-count));
        div {
          background-color: nth($row, 1);
          &::before {
            @include noise-background(nth($row, 2));
          }
        }
      }
    }

    #about-paragraph-container {
      background-color: #f7ece1;
      transform-origin: top left;

      @include unskew();

      p {
        margin: $left-margin;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.5em;
        color: $global-dark-text;

        a {
          text-decoration: underline;
          color: $global-dark-text;
        }
      }
    }
  }
</style>
