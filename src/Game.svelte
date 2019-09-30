<script>
  import Board from './Board.svelte';
  import { store, calculateWinner } from './stores.js';

  let status;
  let winner;

  store.subscribe(store => {
    winner = calculateWinner(store.history[store.history.length - 1].board);
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
    }
  });
</script>

<style>
  ol {
    padding-left: 30px;
  }

  .game {
    display: flex;
    flex-direction: row;
  }

  .game-info {
    margin-left: 20px;
  }
</style>

<div class='game'>
  <div class='game-board'>
    <Board />
  </div>
  <div class='game-info'>
    <div>{status}</div>
    <ol>
    {#each $store.history as step, move}
      <li on:click={ () => store.jumpTo(move) }>
        {#if move}
          <button>Go to move # { move }</button>
        {:else}
          <button>Go to game start</button>
        {/if}
      </li>
      
    {/each}
  <ol />
  <div />
  </div>
</div>
