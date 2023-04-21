<script>
	import Modalwindow from "$lib/modalwindow.svelte";
	import AssignmentCreationForm from "../assignmentCreationForm.svelte";

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    let  isOpenModal= false;
    let content;

    function openModal() {
        isOpenModal = true;
    }

    export function closeModal() {
        isOpenModal = false;
        dispatch('closePopup');
    }
</script>

<button on:click={openModal}>Open Modal</button>
<Modalwindow  isOpenModal={isOpenModal} on:closeModal={closeModal}>
    <slot closeAction={closeModal}></slot>
</Modalwindow> 
    

