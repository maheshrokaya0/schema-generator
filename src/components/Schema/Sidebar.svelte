<script>
  import { createEventDispatcher } from "svelte";
  import { tableList } from '../store/store.js'
  import Table from "./Table.svelte";

  const dispatch = createEventDispatcher();
  
  let tables = [];
  tableList.subscribe((value)=> {
    tables = value.map(item => item.tableName);
  });

  // const y = tableList.subscribe((value)=>{
  //   tables = value.map(item => item.id);
  // })

  console.log(tables);
  
  
</script>

<div>
  <ul class="border px-2 py-2">
    {#each tables as item}
      <li class=" w-56 py-2 mb-3 px-3 border-b rounded hover:bg-gray-200 hover:cursor-pointer">
        {item}
      </li>
    {/each}
    <li class=" w-56 border-2 font-semibold border-black rounded hover:bg-gray-200 hover:cursor-pointer">
      <button class=" py-2 px-3 w-full"
        on:click={() => {
          dispatch("click");
        }}
      >
        + New Table
      </button>
    </li>
  </ul>
</div>
