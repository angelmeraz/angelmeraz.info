<script lang="ts">
	import { marked } from 'marked';
	import createDOMPurify from 'isomorphic-dompurify';

	type Props = {
		markdown?: string;
	};

	let { markdown = '' }: Props = $props();

	const safeHtml = $derived.by(() => {
		const html = marked.parse(markdown, { async: false });

		if (typeof html !== 'string') return '';

		return createDOMPurify.sanitize(html);
	});
</script>

<!-- svelte-ignore security-html -->
{@html safeHtml}
