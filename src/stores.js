import { writable } from 'svelte/store';

const defaultBoard = {
	board: Array(9).fill(''),
	xIsNext: true
}

function createStore() {
	const { subscribe, set, update } = writable(defaultBoard);

	return {
		subscribe,
		move: index => update(store => {
			let newBoard = store.board.slice();
			newBoard[index] = store.xIsNext ? 'X' : 'O'
			return Object.assign({}, store, {board: newBoard, xIsNext: !store.xIsNext})
		}),
		reset: () => set(defaultBoard)
	};
}

export const store = createStore();