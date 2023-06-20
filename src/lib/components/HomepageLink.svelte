<script lang="ts">
  export let href: string;
  export let textAlign = "center";
</script>

<div class="homepage-link" style:--text-align={textAlign}>
  <a {href}><slot /></a>
</div>

<style lang="scss">
  @import "global.scss";

  .homepage-link {
    flex-grow: 1;
    display: flex;
    align-items: center;

    @include breakpoint-land() {
      justify-content: var(--text-align);
    }

    a {
      font-family: "Inter", sans-serif;
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
