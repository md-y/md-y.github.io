<script lang="ts">
  import AboutContent from "$lib/components/AboutContent.svelte";
  import ColorColumn from "$lib/components/ColorColumn.svelte";
  import PageInfo from "$lib/components/PageInfo.svelte";
</script>

<PageInfo
  title="Awards"
  description="These are some of the awards I have received recently for Hackathons and other projects."
/>

<ColorColumn color="#363537" noiseOpacity={0.2} order={31} size={5}>
  <AboutContent>
    <div>
      <h1>HackSMU 2023</h1>
      <p>
        My team and I won first place for the 2023 CBRE Challenge with our
        project
        <a
          href="https://devpost.com/software/facilitrack/"
          title="Facilitrack on Devpost"
          target="_blank"
        >
          Facilitrack.
        </a>
        It features many AI tools and an
        <a
          href="https://www.youtube.com/watch?v=DWp0yW1FpM4"
          title="Demonstration of the AR View"
          target="_blank"
        >
          AR view
        </a>
        for managing real estate assets.
      </p>
    </div>
    <div>
      <h1>ACM Projects (F22)</h1>
      <p>
        I worked as a full-stack developer on an app named
        <a
          href="https://github.com/acm-projects/rememberme"
          title="Repository for RememberMe"
          target="_blank"
        >
          RememberMe.
        </a>
        It won the title of second best app developed that semester by a panel of
        professors and corporate judges.
      </p>
    </div>
    <div>
      <h1>ACM Research (S23)</h1>
      <p>
        My team and I received the people's choice award for our
        <a
          href="https://acm-research.github.io/IoTSecurityVulnerabilities/"
          title="Website about our research"
          target="_blank">security research</a
        >
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
