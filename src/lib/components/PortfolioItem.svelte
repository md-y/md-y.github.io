<script lang="ts">
  import Img from "@zerodevx/svelte-img";
  import RememberMeImg from "$assets/portfolio/rememberme.png?run";
</script>

<div class="portfolio-item">
  <div class="photo">
    <Img src={RememberMeImg} />
  </div>
  <div class="text">
    <h1>RememberMe</h1>
    <h2>Study app for remembering people</h2>
  </div>
</div>

<style lang="scss">
  @import "global.scss";

  .portfolio-item {
    display: flex;
    flex-direction: row;
    gap: $base-margin;

    @include unskew-rotate();
    margin-left: $base-margin;

    .photo {
      position: relative;

      :global(img) {
        height: 100px;
        width: auto;
        object-fit: cover;
      }
    }

    .text {
      display: flex;
      flex-direction: column;

      h1,
      h2 {
        font-family: "Roboto", sans-serif;
        color: $global-dark-text;
        margin: 0;
      }
    }
  }
</style>
