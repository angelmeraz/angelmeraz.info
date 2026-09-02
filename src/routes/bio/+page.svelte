<script lang="ts">
	import { Layout, Markdown } from '$lib/components';
	import Bio from '$lib/content/Bio.md?raw';
</script>

<Layout>
	{#snippet content()}
		<Markdown markdown={Bio} />
	{/snippet}
</Layout>
