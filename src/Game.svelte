<script>
  import Board from './Board.svelte';
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
    <!-- TODO: status -->
  <div />
  <ol>
    <!-- TODO: moves -->
  <ol />
  </div>
</div>
