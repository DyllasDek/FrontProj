<script>
	import Modalwindow from "$lib/modalwindow.svelte";
	import AssignmentCreationForm from "../assignmentCreationForm.svelte";

    let  isOpenModal= false;
    let content;

    function openModal() {
        isOpenModal = true;
    }

    function closeModal() {
        isOpenModal = false;
    }
</script>

<button on:click={openModal}>Open Modal</button>
<Modalwindow  isOpenModal={isOpenModal} on:closeModal={closeModal}>
    <slot closeAction={closeModal}></slot>
</Modalwindow> 
    

