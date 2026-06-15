import type { Snippet } from "svelte";

export interface ColorRowProps {
    children?: Snippet;
    flex?: number;
    order?: number | string;
    transitionDuration?: number;
    color?: string;
    noiseOpacity?: number;
}
