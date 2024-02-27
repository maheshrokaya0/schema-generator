<!-- App.svelte -->
<script>
  import { writable } from 'svelte/store';

  import SqlGenerator from './components/genrator.svelte';
    import Table from './components/Schema/Table.svelte';
  import Navbar from './components/Site/navbar.svelte';
  import Sidebar from './components/Schema/Sidebar.svelte';

  let table;

  function tableFunc(){
    table.classList.remove("hidden");
  }
  function handleDispatch(){
    console.log("click recieved");
  }

</script>

<Navbar/>
<div class="border flex  mx-auto mt-16 px-5 py-5 max-w-5xl">
  <div class="flex basis-1/2">
    <Sidebar on:click={tableFunc} />
  </div>
  <div class="hidden basis-2/3" bind:this={table}>
    <Table/>
  </div>
</div>
