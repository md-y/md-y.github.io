import type { Snippet } from "svelte";

export interface HomePageLinkProps {
    href: string;
    color?: string;
    class?: string;
    children?: Snippet;
}
