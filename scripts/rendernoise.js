import sharp from "sharp";

const noiseColor = "#ffffff";
const size = 100;
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 700 700" width="700" height="700">
  <defs>
    <filter id="noise-filter" x="-20%" y="-20%" width="140%" height="140%"
      filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="linearRGB">
      <feTurbulence type="turbulence" baseFrequency="0.102" numOctaves="4" seed="15"
        stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
      <feSpecularLighting surfaceScale="15" specularConstant="0.75" specularExponent="20"
        lighting-color="${noiseColor}" x="0%" y="0%" width="100%" height="100%"
        in="turbulence" result="specularLighting">
        <feDistantLight azimuth="3" elevation="100"></feDistantLight>
      </feSpecularLighting>
    </filter>
  </defs>
  <rect width="700" height="700" fill="transparent"></rect>
  <rect width="700" height="700" fill="#ffffff" filter="url(#noise-filter)"></rect>
</svg>
`;

sharp(Buffer.from(svg))
  .resize(size)
  .webp({
    effort: 6,
  })
  .toFile("./static/noise.webp");
