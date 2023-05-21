export function isElementByTag<T extends { tagName: string }>(node: { tagName: string }, tagName: string): node is T {
    return node.tagName === tagName;
}
