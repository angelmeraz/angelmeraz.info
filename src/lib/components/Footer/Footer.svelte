<script lang="ts">
	import { tw } from './styles';
</script>

<footer class={tw.footer}>
	Site powered by
	<a class={tw.anchor} href="https://www.cloudflare.com" target="_blank">Cloudflare</a>
	<!-- &amp;
	<a class={tw.anchor} href="https://www.mongodb.com/cloud/atlas" target="_blank">
		MongoDB Atlas
	</a> -->
	| Built with
	<a class={tw.anchor} href="https://svelte.dev" target="_blank">Svelte</a>
	<!-- <a class={tw.anchor} href="https://www.keystonejs.com/" target="_blank"> KeystoneJS </a> -->
	| Angel Meraz @ {new Date().getFullYear()}
</footer>
