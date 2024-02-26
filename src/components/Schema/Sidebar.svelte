<script>
  import { createEventDispatcher } from "svelte";

  let tables = ["Table1", "Table2", "Table3"];

  const dispatch = createEventDispatcher();
</script>

<div>
  <ul class="border px-2 py-2">
    {#each tables as item}
      <li class=" w-56 py-2 mb-3 px-3 border-b rounded hover:bg-gray-200 hover:cursor-pointer">
        {item}
      </li>
    {/each}
    <li class=" max-w-56 border-2 font-semibold border-black rounded hover:bg-gray-200 hover:cursor-pointer">
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
