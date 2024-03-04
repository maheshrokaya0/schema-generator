<script>
  import { createEventDispatcher } from "svelte";
  import { tableList } from '../store/store.js'

  const dispatch = createEventDispatcher();
  
  let tables = [];

  tableList.subscribe((value)=> {
    tables = value.map(item => ({
      tableName: item.tableName,
      tableId: item.id,
      tableFields: ''
    }));
    value.forEach(item =>{
      // if(item.fields){
      //   item.fields.forEach(field =>{
      //     console.log("field from sidebar"+field);
      //   })
      // }
      tableFields : item.fields
    })
    console.log(tables);
  });

  let current = '';
  function tableInfo(tableName, tableId, tableFields){
    dispatch('tableInfo', { tableName, tableId });
    current = tableId;
    console.log("table "+ tableName + " is clicked");
    console.log(tableId + " is table id");
    console.log("fields are : "+ tableFields);
  }

</script>

<div>
  <ul class="border px-2 py-2">
    {#each tables as item, index}
      {#if item.tableName != ''}
        <button class="flex flex-col text-left w-56 py-2 mb-3 px-3 border-b rounded hover:bg-gray-200 hover:cursor-pointer
                        {current === item.tableId ? 'bg-gray-200': ''}"
          on:click={()=>{tableInfo(item.tableName, item.tableId, item.tableFields)}}>
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