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
    

    let newCol, plusIcon, colItems;

    function colfun(){
        newCol.classList.add("rounded-b-none");
        colItems.classList.remove("hidden");
    }
    function colOptFun(){

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
            <div class="border rounded my-5 shadow-lg">
                <div class="flex justify-between items-center py-2">
                    <i class="mx-2">#</i>
                    <input type="text" class="py-1 px-2 w-full mx-1 tracking-widest rounded focus:outline-none focus:bg-gray-200"/>
                    <i class="mx-2"><Setting /></i>
                </div>
            </div>
            <div>
                <button class="block w-full border-2 border-black py-2 rounded hover:bg-gray-200 text-sm font-semibold hover:cursor-pointer" bind:this={newCol}  on:click={()=> colfun()}><span bind:this={plusIcon}>+</span> New column</button>
            </div>
            <div>
                <div class="hidden w-full border-2 border-t-0 rounded-t-none border-black text-center py-2 rounded" bind:this={colItems}>
                    <div class="mx-4 flex flex-row flex-wrap">
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Text /></i><span class="pl-2">Plain Text</span></button></div>
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Number /></i><span class="pl-2">Number</span></button></div>
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Bool/></i><span class="pl-2">Bool</span></button></div>
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Email /></i><span class="pl-2">Email</span></button></div>
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Calender /></i><span class="pl-2">DateTime</span></button></div>
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Decimal /></i><span class="pl-2">Decimal</span></button></div>
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Relation /></i><span class="pl-2">Relation</span></button></div>
                            <div class="text-left basis-1/3 px-3 py-2 hover:cursor-pointer hover:bg-gray-300 rounded"><button class="flex"><i><Braces /></i><span class="pl-2">Json</span></button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>