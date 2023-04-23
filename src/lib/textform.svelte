
<script lang="ts">
  export let inputId: string;
  export let titleText: string;
  export let name : string;
  export let placeholder: string;
  export let bindVar: string;
</script>

<div>
    <label for={inputId}>{titleText}</label>
    <input id={inputId} name={name} type="text" placeholder={placeholder} bind:value={bindVar} required/>
</div>
<style >

input:hover {
  outline: none;
  border-color: #878788;
  transition: all 0.3s ease-in-out;
}

label {
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
}
input:focus {
  outline: none;
  border: none;
  background-color: rgb(231, 235, 237);
  border-bottom: 2px solid #31427d;
  transition: all 0.15s ease-in-out;
}

div {
  margin: 1em 3em 0 1em;
  
}

/* Style for input fields */
input {
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
}

</style>
