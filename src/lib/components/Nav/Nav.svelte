<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { CONFIG } from '$lib/config';
	import { getWindowDimensions } from '$lib/utils/getWindowDimensions/getWindowDimensions';
	import { tw } from './styles';

	type Route = '/' | '/bio' | '/cv';

	export type NavItem = {
		slug: Route;
		title: string;
	};

	type Props = {
		navItems?: NavItem[];
	};

	let { navItems = [] }: Props = $props();

	const windowDimensions = getWindowDimensions();
	const width = $derived($windowDimensions.width);

	const path = $derived.by(() => page.url.pathname.split('/').filter(Boolean));
	const isRootRoute = $derived(page.url.pathname === '/');
	const is404 = $derived(path[0] === '404');

	function getActiveRoute(navItem: NavItem) {
		const navItemSlug = navItem.slug.split('/').filter(Boolean);
		return path.join('/') === navItemSlug.join('/');
	}

	function getActiveRouteIndex() {
		if (isRootRoute) return 0;

		const idx = navItems.findIndex((navItem) => getActiveRoute(navItem));
		return idx === -1 ? 0 : idx + 1;
	}

	const activeRouteIndex = $derived(getActiveRouteIndex());
</script>

<nav class={tw.nav}>
	<ul class={tw.ul}>
		{#if !is404}
			{@const lineHeight = width < 768 ? 24 : 28}
			<span class={tw.slash} style={`top: ${lineHeight * activeRouteIndex}px`} aria-hidden="true">
				/
			</span>
		{/if}

		<li>
			<a href={resolve('/')}>
				{CONFIG.SLUGS.HOMEPAGE}
				{#if isRootRoute}
					<span class="animate-blink">_</span>
				{/if}
			</a>
		</li>

		{#each navItems as item (item.slug)}
			{#if item.slug !== CONFIG.SLUGS.HOMEPAGE}
				<li>
					<a href={resolve(`${item.slug}`)}>
						{item.title}
						{#if getActiveRoute(item)}
							<span class="animate-blink">_</span>
						{/if}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
