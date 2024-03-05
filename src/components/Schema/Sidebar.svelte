<script>
  import { createEventDispatcher } from "svelte";
  import { tableList } from '../store/store.js'
  import Table from "./Table.svelte";

  const dispatch = createEventDispatcher();
  
  let tables = [];

  // send table values to function infotable 
  tableList.subscribe((value)=> {
    tables = value.map(item => ({
      tableName: item.tableName,
      tableId: item.id,
      tableField: item.fields
    }));
  });

  let current = '';
  let fieldNames = [];
  function tableInfo(tableName, tableId, tableField){
    dispatch('tableInfo', { tableName, tableId, tableField });
    current = tableId;
    console.log("table "+ tableName + " is clicked");
    console.log(tableId + " is table id");
    console.log("fields are : "+ tableField);
    // tableField.forEach(field=>{
    //   fieldNames = [...fieldNames, field.inputValue];
    // })
    // console.log("fieldssssss areeee : "+ fieldNames);
    // fieldNames = [];
  }

</script>

<div>
  <ul class="border px-2 py-2">
    {#each tables as item, index}
      {#if item.tableName != ''}
        <button class="flex flex-col text-left w-56 py-2 mb-3 px-3 border-b rounded hover:bg-gray-200 hover:cursor-pointer
                        {current === item.tableId ? 'bg-gray-200': ''}"
          on:click={()=>{tableInfo(item.tableName, item.tableId, item.tableField)}}>
          {item.tableName}
        </button>
      {/if}
    {/each}
    <li class="w-56 border-2 font-semibold border-black rounded hover:bg-gray-200 hover:cursor-pointer">
      <button class=" py-2 px-3 w-full
      {current === 'newTable'? 'bg-gray-200': ''}"
        on:click={() => {
          dispatch("newTable");
          current = "newTable"
        }}>
        + New Table
      </button>
    </li>
  </ul>
</div>