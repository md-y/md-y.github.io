<script lang="ts">
    const { children } = $props();
</script>

<div
    class="absolute -top-(--base-skew-padding) flex h-(--page-total-height) w-screen flex-col gap-0"
>
    {@render children()}
</div>
