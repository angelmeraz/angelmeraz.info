<script lang="ts">
	import { browser } from '$app/environment';
	import { marked } from 'marked';
	import type { DOMPurify as DOMPurifyType } from 'isomorphic-dompurify';

	type Props = {
		markdown?: string;
	};

	let { markdown = '' }: Props = $props();
	let safeHtml = $state('');
	let DOMPurify: DOMPurifyType | null = $state(null);

	// 1. Eagerly load the library once the component is mounted in the browser.
	$effect(() => {
		if (!browser || DOMPurify) return;

		import('isomorphic-dompurify').then((module) => {
			DOMPurify = module.default;
		});
	});

	// 2. Keep the effect at the root level so Svelte can track its ownership scope
	$effect(() => {
		// Only calculate once the markdown is ready AND DOMPurify has asynchronously loaded
		if (!DOMPurify) return;

		const html = marked.parse(markdown, { async: false });
		if (typeof html === 'string') {
			safeHtml = DOMPurify.sanitize(html, {
				ADD_ATTR: ['target', 'rel'],
				ALLOWED_ATTR: [
					'href',
					'target',
					'rel',
					'class',
					'aria-hidden',
					'aria-label',
					'title',
					'viewBox',
					'xmlns',
					'xml:space',
					'fill',
					'd',
					'preserveAspectRatio'
				]
			});
		}
	});
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html safeHtml}
