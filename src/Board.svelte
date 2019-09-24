<script>
    import Square from './Square.svelte';

    const status = 'Next player: X';
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
        <Square value={ 0 }/>
        <Square value={ 1 }/>
        <Square value={ 2 }/>
    </div>
    <div class="board-row">
        <Square value={ 3 }/>
        <Square value={ 4 }/>
        <Square value={ 5 }/>
    </div>
    <div class="board-row">
        <Square value={ 6 }/>
        <Square value={ 7 }/>
        <Square value={ 8 }/>
    </div>
</div>