<!-- App.svelte -->
<script>
  import SqlGenerator from './components/genrator.svelte';
    import Table from './components/Schema/Table.svelte';
  import Navbar from './components/Site/navbar.svelte';
  import Sidebar from './components/Schema/Sidebar.svelte';

  let table;

  function tableFunc(){
    table.classList.remove("hidden");
  }
</script>

<Navbar/>
<div class="border flex flex-wrap justify-between mx-auto mt-16 xl:w-10/12 2xl:w-7/12 px-5 py-5">
  <div>
    <Sidebar on:click={tableFunc} />
  </div>
  <div class="hidden" bind:this={table}>
    <Table/>
  </div>
</div>
