<script>
    let tableName = "";
    let columns = [];
    let primaryKey = "";
  
    let schemaQuery = "";
  
    function generateSchemaQuery() {
      if (tableName && columns.length > 0) {
        schemaQuery = `CREATE TABLE ${tableName} (\n`;
        columns.forEach((column) => {
          schemaQuery += `  ${column.name} ${column.type},\n`;
        });
        if (primaryKey) {
          schemaQuery += `  PRIMARY KEY (${primaryKey})\n`;
        }
        schemaQuery += ");";
      }
    }
  
    function addColumn() {
      columns = [...columns, { name: "", type: "" }];
    }
  
    function removeColumn(index) {
      columns = columns.filter((_, i) => i !== index);
    }
  </script>
  
  <style>
    /* Add your styling here if needed */
  </style>
  
  <div>
    <label for="tableName">Table Name:</label>
    <input type="text" bind:value={tableName} />
  
    <h3>Columns:</h3>
    {#each columns as { name, type, index }}
      <div class="column-inputs" key={index}>
        <label for="columnName">Name:</label>
        <input type="text" bind:value={columns[index].name} />
  
        <label for="columnType">Type:</label>
        <input type="text" bind:value={columns[index].type} />
  
        <button on:click={() => removeColumn(index)}>Remove</button>
      </div>
    {/each}
  
    <button on:click={addColumn}>Add Column</button>
  
    <label for="primaryKey">Primary Key:</label>
    <input type="text" bind:value={primaryKey} />
  
    <button on:click={generateSchemaQuery}>Generate Schema</button>
  
    {#if schemaQuery}
      <div>
        <h3>Generated Schema Query:</h3>
        <code>{schemaQuery}</code>
      </div>
    {/if}
  </div>