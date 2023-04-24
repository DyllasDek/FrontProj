<script>
	import Modalwindow from '$lib/modalwindow.svelte';

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

<style>
	button.bottom_button {
		position: absolute;
		bottom: 1em;
		right: 1em;
		padding: 1em;
		background-color: #7f8994;
		color: white;
		padding: 5px 8px 5px 8px;
		scale: 1.2;
		font-size: 20px;
		border-radius: 20%;
	}
	button.inline_button {
		background-color: #7f8994;
		border: none;
		color: white;
		padding: 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
		margin: 4px 2px;
		border-radius: 4%;
	}
	button:hover {
		background-color: #31427d;
		transition: all 0.06s ease-in;
	}
	button:active {
		background-color: #31427d;
		transition: all 0.06s ease-in;
		transform: scale(0.9);
	}
</style>
