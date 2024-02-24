<script>
      import { onMount } from "svelte";
    import Setting from "../../assets/icons/setting.svelte";
    import Menu from "../../assets/icons/menu.svelte";
    import Button from "../Site/button.svelte";

    export let colId;
    let menu = colId;
    
    export let Icon;

    let inputField, menuItems, settingIcon;

    function menuFun() {
    menu = !menu;

  }

  function settingFun() {
    colId = !colId;
  }

  // onMount(() => {
  //   document.body.addEventListener("click", handleClick);
  //   function handleClick(event) {
  //   menu = false;
  // }
  // });

</script>

<div class="mt-5">
  <div class="flex justify-between items-center py-2 border rounded shadow-lg">
    <i class="mx-2">
      {#if Icon}
      <svelte:component this={Icon} />
      {/if}
    </i>
    <input type="text" class="py-1 px-2 w-full mx-1 tracking-widest rounded focus:outline-none focus:bg-gray-200" placeholder="Field" bind:this={inputField} />
    <i class="mx-2 hover:outline hover:outline-1 hover:outline-gray-200 hover:rounded-lg" bind:this={settingIcon}>
      <button class="px-2 py-1" on:click={settingFun}><Setting /></button>
    </i>
  </div>
  <div class:hidden={colId}>
    <div class="flex justify-between items-center border py-2 shadow-md">
      <div class="flex py-3 px-2">
        <div class="bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold">
          <Button label="Not Empty" />
        </div>
        <div class="ml-5 bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold">
          <Button label="Is Unique" />
        </div>
      </div>
      <div class="flex relative menus">
        <button class="hover:cursor-pointer hover:bg-gray-200 rounded-full mr-3 py-1 px-2" on:click={menuFun}><Menu /></button>
        <div class="hidden right-10 absolute shadow-lg bg-white border px-3 py-2 rounded" class:hidden={!menu}>
          <p class="w-full border-b px-2 py-1 hover:bg-gray-200 hover:cursor-pointer">
            <button>Delete</button>
          </p>
          <p class="w-full px-2 py-1 hover:bg-gray-200 hover:cursor-pointer">
            <button>Duplicate</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>