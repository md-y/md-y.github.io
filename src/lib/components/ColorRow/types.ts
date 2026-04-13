import type { Snippet } from "svelte";

export interface ColorRowProps {
    children?: Snippet;
    flex?: number;
    transitionDuration?: number;
    color?: string;
}
