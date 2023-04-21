<script>
	import Modalwindow from '$lib/modalwindow.svelte';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let isOpenModal = false;

	function openModal() {
		isOpenModal = true;
	}

	export function closeModal() {
		isOpenModal = false;
		dispatch('closePopup');
	}
</script>

<button on:click={openModal}>+</button>
<Modalwindow {isOpenModal} on:closeModal={closeModal}>
	<slot closeAction={closeModal} />
</Modalwindow>

<style>
	button {
		background-color: #7f8994;
		border: none;
		color: white;
		padding: 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
		margin: 4px 2px;
        border-radius:20%;
	}
    button:hover {
        background-color: #31427d;
        transition: all 0.06s ease-in;
        
    }
    button:active{
        background-color: #31427d;
        transition: all 0.06s ease-in;
        transform: scale(0.9);}
</style>
