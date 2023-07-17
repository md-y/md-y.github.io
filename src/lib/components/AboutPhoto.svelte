<script lang="ts">
  import Img from "@zerodevx/svelte-img";
  import { page } from "$app/stores";

  export let src: Object[];
  export let alt: string;
  export let overlay: string;
  export let href: string;

  let showOverlay = false;
  $: showOverlay = $page.route.id === href;
</script>

<div class="photo" class:show-overlay={showOverlay}>
  <Img {src} {alt} draggable="false" />
  <a class="overlay" {href}>{overlay}</a>
</div>

<style lang="scss">
  @import "global.scss";

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

    &:hover,
    &.show-overlay {
      :global(img) {
        $scale-amount: 10%;
        scale: (100% + $scale-amount) (100% + $scale-amount);
      }

      .overlay {
        opacity: 1;
      }
    }
  }
</style>
