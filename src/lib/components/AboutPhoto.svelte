<script lang="ts">
  import Img from "@zerodevx/svelte-img";
  import { page } from "$app/stores";

  import MaterialSymbolsOpenInNew from "~icons/material-symbols/open-in-new";

  export let src: Object[];
  export let alt: string;
  export let overlay: string;
  export let href: string;

  let selected = false;
  $: selected = $page.route.id === href;
</script>

<div class="photo" class:selected>
  <Img {src} {alt} draggable="false" />
  <a class="overlay" href={selected ? "/about" : href}>{overlay}</a>
  <div class="hint-icon">
    <div>
      <MaterialSymbolsOpenInNew />
    </div>
  </div>
</div>

<style lang="scss">
  @import "global.scss";
  @import "about.scss";

  $hover-transition-time: 250ms;
  $skeleton-animation-period: 1200ms;

  .photo {
    @include unskew();
    transform-origin: center;

    display: flex;
    justify-content: center;

    overflow: hidden;

    .overlay {
      position: absolute;
      inset: 0;
      z-index: 1;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      padding: 1ch;
      color: $global-light-text;
      background-color: rgba(0, 0, 0, 0.25);

      font-family: "Roboto", sans-serif;
      font-size: 3.5vmin;
      text-decoration: none;

      opacity: 0;
      transition: opacity $hover-transition-time;
    }

    :global(img) {
      height: 100%;
      width: auto;
      z-index: 0;
      transition: scale $hover-transition-time;
    }

    .hint-icon {
      position: absolute;
      inset: 0;

      @include skew();

      div {
        position: absolute;
        bottom: $base-margin * 1.25;
        left: $base-margin * 0.25;

        @include unskew();

        background-color: rgba(0, 0, 0, 0.25);
        padding: 0.25vmin;
        border-radius: 50%;

        :global(svg) {
          color: $global-light-text;
          font-size: 1.75vmin;
          display: block;
        }
      }
    }

    &:hover,
    &.selected {
      :global(img) {
        $scale-amount: 10%;
        scale: (100% + $scale-amount) (100% + $scale-amount);
      }

      .overlay {
        opacity: 1;
      }

      .hint-icon {
        opacity: 0;
      }
    }
  }
</style>
