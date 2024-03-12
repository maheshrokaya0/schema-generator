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

  function tableFunc(){
    // toggle = !toggle;
    newTable.classList.remove("hidden");
    listedTable.classList.add("hidden");
  }
  
  // variables to store data from Sidebar
  let tableNamee = '';
  let tableFields = [];
  let tableid = '';
  
  function tableInfo(event){
    // toggle = !toggle;
    newTable.classList.add("hidden");
    listedTable.classList.remove("hidden");

    //revieve tableData from Sidebar
    const { tableId, tableName, tableField } = event.detail;
    tableid = tableId;
    tableNamee = tableName;
    tableFields = tableField;

  }

  //update button function
  let tableN;
  let tableF;
  
  function buttonClickFunc(event){
    tableN = event.detail.table_name;
    tableF = event.detail.newArray;
    console.log(tableN);
    console.log(event.detail);
    tableList.update(tableList => {
      tableList.map(obj => {
        if(obj.id == tableid){
          obj.tableName = tableN;
          obj.fields = tableF;
        }
      })
      console.log(tableN);
      return tableList;
    })
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
