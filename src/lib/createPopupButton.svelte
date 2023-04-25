<script>
	import Modalwindow from '$lib/modalwindow.svelte';
	import '$lib/inline_buttons.css';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let isOpenModal = false;
	export let text = '+';
	export let style = 'inline_button';
	function openModal() {
		isOpenModal = true;
	}

	export function closeModal() {
		isOpenModal = false;
		dispatch('closePopup');
	}
</script>

<button class={style} on:click={openModal}>{text}</button>
<Modalwindow {isOpenModal} on:closeModal={closeModal}>
	<slot closeAction={closeModal} />
</Modalwindow>
