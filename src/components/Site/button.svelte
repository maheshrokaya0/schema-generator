<script>
  import { Toggle } from 'flowbite-svelte';

  export let label;
</script>

<Toggle color="green">
  <span class="text-lg">{label}</span>
</Toggle>