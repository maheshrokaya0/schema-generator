<script>
  import { onMount } from "svelte";

  import Braces from "../.././assets/icons/braces.svelte";
  import Email from "../../assets/icons/email.svelte";
  import Calender from "../../assets/icons/calender.svelte";
  import Number from "../../assets/icons/number.svelte";
  import Bool from "../../assets/icons/bool.svelte";
  import Relation from "../../assets/icons/relation.svelte";
  import Decimal from "../../assets/icons/decimal.svelte";
  import Text from "../../assets/icons/text.svelte";
  import Setting from "../../assets/icons/setting.svelte";
  import Menu from "../../assets/icons/menu.svelte";
  import Button from "../Site/button.svelte";

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

  let newCol,
    plusIcon,
    colItems,
    inputField,
    menu,
    menuItems,
    settingIcon,
    settings;

  function colfun() {
    newCol.classList.add("rounded-b-none");
    colItems.classList.remove("hidden");
  }

  //random id generator
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function generateUniqueId(){
    let result = ' ';
    const charactersLength = characters.length;
    for(let i = 0; i< 7; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function colOptFun(key, Component) {
    const obj = {
      id: generateUniqueId(),
      key,
      Component,
      toggle: true,
    };
    newArray = [...newArray, obj];
  }

  let toggle = true;
  onMount(() => {
    document.addEventListener("click", handleClick);
  });
  function handleClick(event) {
    const clickedInsideMenu =
      menuItems.contains(event.target) || menu.contains(event.target);

    if (!clickedInsideMenu) {
      menuItems.classList.add("hidden");
      menu.classList.remove("bg-gray-200");
    }
  }

  function menuFun() {
    toggle = !toggle;
    if (!toggle) {
      menuItems.classList.remove("hidden");
      menu.classList.add("bg-gray-200");
    } else {
      menuItems.classList.add("hidden");
      menu.classList.remove("bg-gray-200");
    }
  }
  function settingFun(itemId) {
    // const item = newArray.find(item => item.id === itemId);
    toggle = !toggle;
    if (!toggle) {
      settings.classList.remove("hidden");
      settingIcon.classList.add("bg-gray-200", "rounded-lg");
    } else {
      settings.classList.add("hidden");
      settingIcon.classList.remove("bg-gray-200", "rounded-lg");
    }
  }

  // window.addEventListener("click", (e)=>{
  //     menuItems.classList.add("hidden");
  //     menu.classList.remove("bg-gray-200");
  // });
</script>

<div class="max-w-2xl mx-auto rounded mt-16 px-5">
  <h4 class="text-xl">New Table</h4>
  <div class="mt-5">
    <div class="px-4 py-4 rounded-lg bg-gray-200">
      <label for="table_name" class="flex w-full font-semibold pb-1">
        Table Name: <span class="text-red-600">*</span>
      </label>
      <input
        type="text"
        id="table_name"
        placeholder="eg. &quot;posts&quot;"
        spellcheck="false"
        class="outline-none py-2 px-3 font-medium block w-full tracking-widest bg-transparent rounded-lg border border-[#6e6e6e83] focus:bg-white focus:tracking-widest"
      />
    </div>
    <div class="mt-5">
      <h4 class="text-lg border-b pb-2">Columns</h4>
      {#each newArray as item (item.id)}
        <div class="my-5">
          <div
            class="flex justify-between items-center py-2 border rounded shadow-lg"
          >
            <i class="mx-2">
              {#if item.Component}
                <svelte:component this={item.Component} />
              {/if}
            </i>
            <input
              type="text"
              class="py-1 px-2 w-full mx-1 tracking-widest rounded focus:outline-none focus:bg-gray-200"
              placeholder="Field"
              bind:this={inputField}
            />
            <i
              class="mx-2 hover:outline hover:outline-1 hover:outline-gray-200 hover:rounded-lg"
              bind:this={settingIcon}
              ><button class="px-2 py-1" on:click={() => settingFun(item.id)}
                >(Id: {item.id})<Setting /></button
              ></i>
          </div>
          <div class="hidden" bind:this={settings}>
            <div
              class="flex justify-between items-center border py-2 shadow-md"
            >
              <div class="flex py-3 px-2">
                <div class="bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold">
                  <Button label="Not Empty" />
                </div>
                <div
                  class="ml-5 bg-[#D9D9D9] px-3 py-2 rounded-lg font-semibold"
                >
                  <Button label="Is Unique" />
                </div>
              </div>
              <div class="flex relative menus">
                <div
                  class="hidden right-10 absolute shadow-lg bg-white border px-3 py-2 rounded"
                  bind:this={menuItems}
                >
                  <p
                    class="w-full border-b px-2 py-1 hover:bg-gray-200 hover:cursor-pointer"
                  >
                    <button on:click={() => menuFun()}>Delete</button>
                  </p>
                  <p
                    class="w-full px-2 py-1 hover:bg-gray-200 hover:cursor-pointer"
                  >
                    <button on:click={() => menuFun()}>Duplicate</button>
                  </p>
                </div>
                <button
                  class="hover:cursor-pointer hover:bg-gray-200 rounded-full mr-3 py-1 px-2"
                  bind:this={menu}
                  on:click={() => menuFun()}><Menu /></button
                >
              </div>
            </div>
          </div>
        </div>
      {/each}
      <div>
        <button
          class="block w-full border-2 border-black py-2 rounded hover:bg-gray-200 text-sm font-semibold hover:cursor-pointer"
          bind:this={newCol}
          on:click={() => colfun()}
          ><span bind:this={plusIcon}>+</span> New column</button
        >
      </div>
      <div>
        <div
          class="hidden w-full border-2 border-t-0 rounded-t-none border-black text-center py-2 rounded"
          bind:this={colItems}
        >
          <div class="mx-4 flex flex-row flex-wrap">
            {#each Object.entries(list) as [key, Component]}
              <div
                class="text-left basis-1/3 hover:cursor-pointer hover:bg-gray-300 rounded"
              >
                <button
                  class="flex px-3 py-2 w-full"
                  on:click={() => colOptFun(key, Component)}
                  ><i><Component /></i><span class="pl-2">{key}</span></button
                >
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
