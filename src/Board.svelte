<script>
  import { store, calculateWinner } from './stores.js';
  import Square from './Square.svelte';

  let status;
  let winner;

  store.subscribe(store => {
    winner = calculateWinner(store.board);
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
    }
  });
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
    <div class="status">{status}</div>
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