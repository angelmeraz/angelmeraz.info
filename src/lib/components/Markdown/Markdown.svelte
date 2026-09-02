<script lang="ts">
	import { browser } from '$app/environment';
	import { marked } from 'marked';

	type Props = {
		markdown?: string;
	};

	let { markdown = '' }: Props = $props();
	let safeHtml = $state('');
	let DOMPurify: any = $state(null);

	// 1. Eagerly load the library as soon as the component initializes in the browser
	if (browser && !DOMPurify) {
		import('isomorphic-dompurify').then((module) => {
			DOMPurify = module.default;
		});
	}

	// 2. Keep the effect at the root level so Svelte can track its ownership scope
	$effect(() => {
		// Only calculate once the markdown is ready AND DOMPurify has asynchronously loaded
		if (!DOMPurify) return;

		const html = marked.parse(markdown, { async: false });
		if (typeof html === 'string') {
			safeHtml = DOMPurify.sanitize(html);
		}
	});
</script>

<!-- svelte-ignore no-at-html-tags -->
{@html safeHtml}
