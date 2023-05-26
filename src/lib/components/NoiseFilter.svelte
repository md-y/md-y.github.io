<script lang="ts">
  export let id: string;
  export let seed: number = 1;
  export let color: string;
</script>

<svg
  class="filter-svg"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <filter
      {id}
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="linearRGB"
    >
      <feTurbulence
        type="turbulence"
        baseFrequency="0.05"
        numOctaves="4"
        seed={seed || 1}
        stitchTiles="stitch"
        result="turbulence"
      />
      <feSpecularLighting
        surfaceScale="10"
        specularConstant="0.75"
        specularExponent="20"
        lighting-color={color}
        in="turbulence"
        result="specularLighting"
      >
        <feDistantLight azimuth="3" elevation="100" />
      </feSpecularLighting>
    </filter>
  </defs>
</svg>

<style lang="scss">
  .filter-svg {
    // Cant use display:none because that breaks the filter, so this hides it instead
    width: 1px;
    height: 1px;
    position: absolute;
    right: -100px;
  }
</style>
