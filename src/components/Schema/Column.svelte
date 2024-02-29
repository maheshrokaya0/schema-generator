<script>
    import { createEventDispatcher } from 'svelte';

    import Button from "../Site/button.svelte";
    import Setting from "../../assets/icons/setting.svelte";
    import Drag from "../../assets/icons/drag.svelte";
    import Delete from '../../assets/icons/delete.svelte';

    export let Icon;
    export let colId;
    export let inputVal = "";

    //creating dispatch
    const dispatch = createEventDispatcher();

    // $: console.log(inputVal)
    let settingIcon;
    let ColumnId;

    function settingFun() {
      ColumnId = !ColumnId;
      console.log("sett open")
      console.log("col status"+ColumnId);
    } 
    
  export let emptyStatus = false;
  let emptStatus = true;
  function buttonFuncA(){
    // emptyStatus = !emptyStatus;
    if(emptyStatus == false){
      emptyStatus = true;
    }else{
      emptyStatus = false;
    }
    console.log(emptyStatus);
    // console.log("col status"+colId);
  }
  export let uniqueStatus = false;
  function buttonFuncB(){
    uniqueStatus =!uniqueStatus;
    console.log(uniqueStatus);
  }

  function deleteFunc(){
    dispatch('delete')
  }

</script>
<div class="flex mt-5">
  <div class="mt-3 pr-2 hover:cursor-move" >
    <Drag />
  </div>
  <div class="w-full hover:cursor-default">
    <div class="flex justify-between items-center py-2 border rounded shadow-lg">
      <i class="mx-2">
        {#if Icon}
        <svelte:component this={Icon} />
        {/if}
      </i>
      <input type="text" class="py-1 px-2 w-full mx-1 tracking-widest rounded focus:outline-none focus:bg-gray-200" placeholder="Field" bind:value="{inputVal}"/>
      <i class="mx-2 hover:outline hover:outline-1 hover:outline-gray-200 hover:rounded-lg" bind:this={settingIcon}>
        <button class="px-2 py-1" on:click={settingFun}><Setting /></button>
      </i>
    </div>
    <div class:hidden={ColumnId}>
      <div class="flex justify-between items-center border py-2 shadow-md">
        <div class="flex py-3 px-2">
          <div class="bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold ">
            <Button label="Not Empty" status={emptyStatus} on:click={buttonFuncA}/>
          </div>
          <div class="ml-5 bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold ">
            <Button label="Is Unique" status={uniqueStatus} on:click={buttonFuncB}/>
          </div>
        </div>
        <div class="flex relative menus">
          <button class="hover:cursor-pointer hover:bg-gray-200 rounded-full mr-3 py-1 px-2" on:click={deleteFunc}><Delete /></button>
        </div>
      </div>
    </div>
  </div>
</div>