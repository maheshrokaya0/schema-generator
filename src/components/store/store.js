import { writable } from "svelte/store"; 

export const tableList = writable([
    {id: "1", name: "name1"},
    {id: "2", name: "name2"},
]);
// console.log(tableList);


  