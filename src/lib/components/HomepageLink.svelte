<script lang="ts">
  export let href: string;
</script>

<div class="homepage-link">
  <a {href}><slot /></a>
</div>

<style lang="scss">
  @import "global.scss";

  .homepage-link {
    flex-grow: 1;

    a {
      font-family: "Inter", serif;
      text-decoration: none;
      font-weight: 700;

      color: transparent;
      background-image: linear-gradient(
        to right,
        white 50%,
        $global-dark-text 50%
      );
      background-size: 200% 100%;
      background-position: right;
      background-clip: text;
      -webkit-background-clip: text;
      transition: background-position 250ms, font-size 250ms;

      &:hover {
        background-position: left;
      }

      @include breakpoint-port() {
        font-size: 5.7vh;
        &:hover {
          font-size: 6.3vh;
        }
      }
      @include breakpoint-land() {
        font-size: 6vw;
        &:hover {
          font-size: 6.5vw;
        }
      }
    }
  }
</style>
