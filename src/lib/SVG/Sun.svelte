<!-- https://www.svgrepo.com/collection/iconsax-line-oval-icons -->
<script lang="ts">
	import ClassGroup from 'classgroup';

	let { classes = '' } = $props();

	const tw = $derived(
		ClassGroup({
			svg: classes
		})
	);
</script>

<svg class={tw.svg} fill="none" viewBox="0 0 24 24"
	><path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="1.5"
		d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
	/><path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="m19.14 19.14-.13-.13m0-14.02.13-.13zM4.86 19.14l.13-.13zM12 2.08V2zM12 22v-.08zM2.08 12H2zM22 12h-.08zM4.99 4.99l-.13-.13z"
	/></svg
>
