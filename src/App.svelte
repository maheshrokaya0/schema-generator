<!-- App.svelte -->
<script>
  import { writable } from 'svelte/store';
  import { tableList } from './components/store/store.js'

  import SqlGenerator from './components/genrator.svelte';
  import Table from './components/Schema/Table.svelte';
  import Navbar from './components/Site/navbar.svelte';
  import Sidebar from './components/Schema/Sidebar.svelte';
  import Button from './components/Site/button.svelte';

  let newTable;
  let listedTable;
  let toggle;

  function tableFunc(){
    // toggle = !toggle;
    newTable.classList.remove("hidden");
    listedTable.classList.add("hidden");
  }
  
  let tableNamee = '';
  let tableFields = [];
  
  function tableInfo(event){
    // toggle = !toggle;
    newTable.classList.add("hidden");
    listedTable.classList.remove("hidden");

    //revieve tableData from Sidebar
    const { tableName, tableId, tableField } = event.detail;
    tableNamee = tableName;
    tableFields = tableField;
  }

  //button functions
  function buttonClickFunc(event){
    const { tableN, tableI, tableF } = event.detail;
    const currentTableList = $tableList;
    const index = currentTableList.findIndex(table => table.id === tableI);

    if(index !== -1){
      currentTableList[index].tableName = tableN;
      currentTableList[index].fields = tableF;

      tableList.set(currentTableList);
      tableFields = tableF;
    }
    // tableList.update((tableList)=>{
          
    // })
    console.log(tableN, tableF);
    // tableNamee = tableN;

  }


</script>

<Navbar/>
<div class="border flex  mx-auto mt-16 px-5 py-5 max-w-5xl">
  <div class="flex basis-1/2">
    <Sidebar on:newTable={tableFunc} on:tableInfo={tableInfo}/>
  </div>
  <div class="hidden basis-2/3" bind:this={newTable}>
    <Table />
  </div>
  <div class="hidden basis-2/3" bind:this={listedTable}>
    <Table table_name={tableNamee} newArray={tableFields} buttonText={"update"} on:buttonClick={buttonClickFunc}/>
  </div>
</div>
