/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

import type { ComponentType } from "svelte";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  declare type EnhancedImage = object;

  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}

    declare module "$assets/*?enhanced" {
      const meta: EnhancedImage;
      export default meta;
    }
  }
}

export {};
