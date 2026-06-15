import clsx from "clsx";
import type { ClassValue } from "svelte/elements";
import { twMerge } from "tailwind-merge";

export const cn = (...args: (ClassValue | undefined | null | false)[]) => {
    return twMerge(clsx(...args));
};
