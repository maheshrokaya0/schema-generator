<script>
    import Braces from '../.././assets/icons/braces.svelte'
    import Email from '../../assets/icons/email.svelte';
    import Calender from '../../assets/icons/calender.svelte';
    import Number from '../../assets/icons/number.svelte';
    import Bool from '../../assets/icons/bool.svelte';
    import Relation from '../../assets/icons/relation.svelte';
    import Decimal from '../../assets/icons/decimal.svelte';
    import Text from '../../assets/icons/text.svelte';
    import Setting from '../../assets/icons/setting.svelte';
    

    const list = {
        "Plain Text": Text,
        Number: Number,
        Bool: Bool,
        Email: Email,
        DateTime: Calender,
        Decimal: Decimal,
        Relation: Relation,
        Json: Braces
    };
    let newArray = [{}];
    
    let newCol, plusIcon, colItems, inputField, inputIcon;

    function colfun(){
        newCol.classList.add("rounded-b-none");
        colItems.classList.remove("hidden");
        
    }
    function colOptFun(key, Component){
        const obj = {
            key,
            Component
        };
        newArray = [...newArray, obj];
        inputField.value = "Field";
        inputField.select();
        console.log(newArray);
        // newArray.unshift(key);
        // fieldInput.classList.remove("hidden");
    }



</script>

<div class="max-w-2xl mx-auto rounded mt-16 px-5">
    <h4 class="text-xl">New Table</h4>
    <div class="mt-5">
        <div class="px-4 py-4 rounded-lg bg-gray-200 ">
            <label for="table_name" class="flex w-full font-semibold pb-1">
               Table Name: <span class="text-red-600">*</span>
            </label>
            <input type="text" id="table_name" placeholder="eg. &quot;posts&quot;" spellcheck="false" class="outline-none py-2 px-3 font-medium block w-full tracking-widest bg-transparent rounded-lg border border-[#6e6e6e83]  focus:bg-white focus:tracking-widest ">
        </div>
        <div class="mt-5">
            <h4 class="text-lg border-b pb-2">Columns</h4>
            {#each newArray as item}
                <div>
                    <div class="flex justify-between items-center py-2 border rounded my-5 shadow-lg">
                            <i class="mx-2" bind:this={inputIcon}>#</i>
                            <input type="text" class="py-1 px-2 w-full mx-1 tracking-widest rounded focus:outline-none focus:bg-gray-200" bind:this={inputField}/>
                            <i class="mx-2"><Setting /></i>
                    </div>
                </div>
            {/each}
            <div>
                <button class="block w-full border-2 border-black py-2 rounded hover:bg-gray-200 text-sm font-semibold hover:cursor-pointer" bind:this={newCol}  on:click={()=> colfun()}><span bind:this={plusIcon}>+</span> New column</button>
            </div>
            <div>
                <div class="hidden w-full border-2 border-t-0 rounded-t-none border-black text-center py-2 rounded" bind:this={colItems}>
                    <div class="mx-4 flex flex-row flex-wrap">
                        {#each Object.entries(list) as [key, Component]}
                            <div class="text-left basis-1/3 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex px-3 py-2 w-full" on:click={()=> colOptFun({key}, Component)}><i><Component/></i><span class="pl-2">{key}</span></button></div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>