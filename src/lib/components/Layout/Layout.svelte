<script lang="ts">
	import { tw } from './styles';
	import { Footer, Nav } from '$lib/components';
	import { Moon, Sun } from '$lib/SVG';
	import type { NavItem } from '$lib/components/Nav/Nav.svelte';

	let { content = null, header = null } = $props();
	let themeToggle = $state(false);

	function handleThemeToggle() {
		themeToggle = !themeToggle;
		document.documentElement.classList.toggle('bright', themeToggle);
	}

	const navItems: NavItem[] = [
		{ slug: '/bio', title: 'bio' },
		{ slug: '/cv', title: 'cv' }
	];
</script>

<main class={tw.main}>
	{@render header?.()}

	<button class={tw.themeButton} onclick={handleThemeToggle}>
		{#if themeToggle}
			<Sun classes={tw.icon} />
		{:else}
			<Moon classes={tw.icon} />
		{/if}
	</button>

	<div class={tw.container}>
		<aside class={tw.aside}>
			<Nav {navItems} />
		</aside>
		{#if content}
			<div class={tw.content}>
				{@render content?.()}
			</div>
		{/if}
	</div>

	<Footer />
</main>
