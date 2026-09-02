<script lang="ts">
	import { Layout, Markdown } from '$lib/components';
	import CV from '$lib/content/CV.md?raw';
</script>

<Layout>
	{#snippet content()}
		<Markdown markdown={CV} />
	{/snippet}
</Layout>
