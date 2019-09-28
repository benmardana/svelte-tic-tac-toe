<script>
  import { store } from './stores.js';
  import Square from './Square.svelte';

  const status = `Next player:`;
</script>

<style>
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }
  
  .status {
    margin-bottom: 10px;
  }
</style>

<div>
    <div class="status">{status} {$store.xIsNext ? 'X' : 'O'}</div>
    <div class="board-row">
        <Square index={ 0 } />
        <Square index={ 1 } />
        <Square index={ 2 } />
    </div>
    <div class="board-row">
        <Square index={ 3 } />
        <Square index={ 4 } />
        <Square index={ 5 } />
    </div>
    <div class="board-row">
        <Square index={ 6 } />
        <Square index={ 7 } />
        <Square index={ 8 } />
    </div>
</div>