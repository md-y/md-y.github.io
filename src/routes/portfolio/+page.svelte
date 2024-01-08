<script lang="ts">
  import BackButton from "$lib/components/BackButton.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  // import PortfolioItem from "$lib/components/PortfolioItem.svelte";
  // import RememberMeImg from "$assets/portfolio/rememberme.png?run";
  import PageInfo from "$lib/components/PageInfo.svelte";
</script>

<PageInfo
  title="Portfolio"
  description="Here you can view all of my public work including personal, professional, and university projects."
/>

<ColorColumn color="#242038" noiseOpacity={0.4} size={2} order={11}>
  <BackButton />
  <div id="title-container">
    <h1>Portfolio</h1>
  </div>
</ColorColumn>
<ColorColumn color="#f7ece1" noiseOpacity={1} order={12} size={5}>
  <div class="warning" />
  <div class="temp-text">
    <h1>Sorry, but this page is not finished yet.</h1>
    <h2>
      If you are interested in my projects, please visit my <a
        href="https://github.com/md-y">GitHub</a
      >.
    </h2>
  </div>
</ColorColumn>
<ColorColumn color="#242038" noiseOpacity={0.3} size={2} order={17} />

<style lang="scss">
  @use "sass:math";
  @import "global.scss";

  .warning {
    background-image: repeating-linear-gradient(
      -55deg,
      #000,
      #000 20px,
      #ffb101 20px,
      #ffb101 40px
    );
    height: 2rem;
  }

  .temp-text {
    font-family: "Roboto", sans-serif;
    margin-left: $base-margin;
    @include unskew-rotate();

    h1 {
      font-size: 6vmin;
    }

    h2 {
      font-size: 3vmin;
    }
  }

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
      font-size: 10vmin;
      margin-left: $base-margin;
    }
  }
</style>
