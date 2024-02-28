 
<script>

  import {tableList} from '../store/store.js';

  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  import Braces from "../.././assets/icons/braces.svelte";
  import Email from "../../assets/icons/email.svelte";
  import Calender from "../../assets/icons/calender.svelte";
  import Number from "../../assets/icons/number.svelte";
  import Bool from "../../assets/icons/bool.svelte";
  import Relation from "../../assets/icons/relation.svelte";
  import Decimal from "../../assets/icons/decimal.svelte";
  import Text from "../../assets/icons/text.svelte";

  import Column from "./Column.svelte";


  const list = {
    "Plain Text": Text,
    Number: Number,
    Bool: Bool,
    Email: Email,
    DateTime: Calender,
    Decimal: Decimal,
    Relation: Relation,
    Json: Braces,
  };

 
   let newArray = [];

  let newCol, colItems;

  //show columns
  function colfun() {
    newCol.classList.add("rounded-b-none");
    colItems.classList.remove("hidden");
  }

  // random id generator
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateUniqueId() {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  //add items to array
   function colOptFun(key, Component) {
    const obj = {
      id: generateUniqueId(),
      key,
      Component,
      inputValue: handleInputValue(event)
      // func : inputField()
    };
    newArray = [...newArray, obj];
    console.log(newArray);
  }

  //Drag and Drop
  const handleConsider = (event)=>{
    newArray = event.detail.items;
  }
  const handleFinalize = (event)=>{
    console.log("dragend");
    newArray = event.detail.items;    
  }

  //click dispatch on create button
  // const dispatch = createEventDispatcher();
  // function createDispatch(){
  //   dispatch('click', {message : 'click has been dispatched'});
  // }

  //store
  let table_name ='';

  function storeName(){
    const obj = {
      id: generateUniqueId(),
      tableName : table_name,
      fields : newArray
    };
    tableList.update((tableList)=>{
      tableList.push(obj);
      return tableList;
    });
    table_name = '';
    console.log(obj);
  }

  let inputValue = '';

  function handleInputValue(value){
    inputValue = value;
    console.log("the value is : "+inputValue);
    return inputValue;

  }

</script>

<div class=" border w-full rounded px-5 py-4">
  <div class="flex justify-between">
    <h4 class="text-xl">New Table</h4>
    <button class="text-xl bg-black text-white px-3 py-1 rounded font-semibold tracking-wide" on:click={storeName} >Create</button>    
  </div>
  <div class="mt-5">
    <div class="px-4 py-4 rounded-lg bg-gray-200">
      <label for="table_name" class="flex w-full font-semibold pb-1">
        Table Name: <span class="text-red-600">*</span>
      </label>
      <input required type="text" placeholder="eg. &quot;posts&quot;" spellcheck="false" class="outline-none py-2 px-3 font-medium block w-full tracking-widest bg-transparent rounded-lg border border-[#6e6e6e83] focus:bg-white focus:tracking-widest" bind:value={table_name}/>
    </div>
    <div class="mt-5">
      <h4 class="text-lg border-b pb-2">Columns</h4>
      <section 
        use:dndzone="{{items: newArray, flipDurationMs : 100, dropTargetStyle:{}}}"
        on:consider="{handleConsider}"
        on:finalize="{handleFinalize}"
      >
        {#each newArray as item (item.id)}
        <div animate:flip="{{duration:100}}">
          <Column on:inputValue={handleInputValue} colId ={item.id} Icon = {item.Component}/>
        </div>
        {/each}
      </section>
      <div class="mt-5">
        <button class="block w-full border-2 border-black py-2 rounded hover:bg-gray-200 text-sm font-semibold hover:cursor-pointer" bind:this={newCol} on:click={() => colfun()}>+ New column</button>
      </div>
      <div>
        <div class="hidden w-full border-2 border-t-0 rounded-t-none border-black text-center py-2 rounded" bind:this={colItems}>
          <div class="mx-4 flex flex-row flex-wrap overflow-hidden">
            {#each Object.entries(list) as [key, Component]}
              <div class="text-left basis-1/3 hover:cursor-pointer hover:bg-gray-300 rounded">
                <button class="flex px-3 py-2 w-full" on:click={() => colOptFun(key, Component)}><i><Component /></i><span class="pl-2">{key}</span></button>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
