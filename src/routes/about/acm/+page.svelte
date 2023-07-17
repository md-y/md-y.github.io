<script lang="ts">
  import AboutContent from "$lib/components/AboutContent.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
</script>

<ColorColumn color="#363537" noiseOpacity={0.2} order={31} size={5}>
  <AboutContent>
    <div>
      <h1>Membership</h1>
      <p>
        Since September 2022, I have been a member of <a
          href="https://acmutd.co/"
          title="ACM Chapter at UTD"
          target="_blank"
        >
          ACM
        </a>
        at UTD.
        <br />
        <br />
        We were named the country's
        <a
          href="https://cs.utdallas.edu/acm-utd-1-chapter-for-school-service"
          title="ACM UTD Named Top Chapter for School Service"
          target="_blank"
        >
          best chapter
        </a>
        for school service in 2023.
      </p>
    </div>
    <div>
      <h1>ACM Projects</h1>
      <p>
        I worked as a full-stack developer on a mobile app named RememberMe, an
        app that helps people remember the people they have met.
      </p>
    </div>
    <div>
      <h1>ACM Research</h1>
      <p>
        I worked as a IOT security researcher and web developer for a project
        about the Bangle.js 2 smart watch.
      </p>
    </div>
  </AboutContent>
</ColorColumn>

<style lang="scss">
  p,
  div {
    flex: 1 1;
  }
</style>
