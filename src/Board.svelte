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
        <Square/>
        <Square/>
        <Square/>
    </div>
    <div class="board-row">
        <Square/>
        <Square/>
        <Square/>
    </div>
    <div class="board-row">
        <Square/>
        <Square/>
        <Square/>
    </div>
</div>