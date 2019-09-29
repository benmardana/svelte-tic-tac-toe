<script>
  import { store } from './stores.js';

  export let index;
</script>

<style>
    button {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
  }
  
  button:focus {
    outline: none;
  }
</style>

<button on:click={ () => store.move(index) }>{ $store.history[$store.history.length - 1].board[index] }</button>