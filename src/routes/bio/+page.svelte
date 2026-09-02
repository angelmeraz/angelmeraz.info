<script lang="ts">
	import { Layout, Markdown } from '$lib/components';
	import Bio from '$lib/contents/Bio.md?raw';
</script>

<Layout>
	{#snippet content()}
		<Markdown markdown={Bio} />
	{/snippet}
</Layout>
