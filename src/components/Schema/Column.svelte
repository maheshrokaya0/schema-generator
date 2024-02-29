<script>
    import { tableList } from "../store/store.js";
    import {createEventDispatcher} from 'svelte';

    import Button from "../Site/button.svelte";
    import Setting from "../../assets/icons/setting.svelte";
    import Drag from "../../assets/icons/drag.svelte";
    import Delete from '../../assets/icons/delete.svelte';
    // import Menu from "../../assets/icons/menu.svelte";

    export let Icon;
    export let colId;
    export let inputVal = "";
    // export let iconName;
    // let menu = colId;

    // let menuForClick;
    
    // function menuFun() {
    //   menu = !menu;
    // }

    $: console.log(inputVal)
    let settingIcon;

    function settingFun() {
      colId = !colId;
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
    <div class:hidden={colId}>
      <div class="flex justify-between items-center border py-2 shadow-md">
        <div class="flex py-3 px-2">
          <div class="bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold ">
            <Button label="Not Empty" />
          </div>
          <div class="ml-5 bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold ">
            <Button label="Is Unique" />
          </div>
        </div>
        <div class="flex relative menus">
          <button class="hover:cursor-pointer hover:bg-gray-200 rounded-full mr-3 py-1 px-2" ><Delete /></button>
          <!-- <div class="hidden right-10 absolute shadow-lg bg-white border px-3 py-2 rounded" bind:this={menuForClick} class:hidden={menu}>
            <p class="w-full border-b px-2 py-1 hover:bg-gray-200 hover:cursor-pointer">
              <button>Delete</button>
            </p>
            <p class="w-full px-2 py-1 hover:bg-gray-200 hover:cursor-pointer">
              <button>Duplicate</button>
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</div>