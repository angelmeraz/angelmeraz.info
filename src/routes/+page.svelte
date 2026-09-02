<script lang="ts">
	import { Layout, Markdown } from '$lib/components';
	import Start from '$lib/contents/Start.md?raw';
</script>

<Layout>
	{#snippet content()}
		<Markdown markdown={Start} />
	{/snippet}
</Layout>
