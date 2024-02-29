<script>
  import { Toggle } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';

  export let label;
  export let status;

  const dispatch = createEventDispatcher();
</script>
<div>
  <Toggle color="green" checked={status} on:click={()=>{
    dispatch('click')
  }}>
    <span class="text-lg">{label}</span>
  </Toggle>
</div>
