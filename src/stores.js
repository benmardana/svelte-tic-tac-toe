import { writable } from 'svelte/store';

function createBoard() {
	const { subscribe, set, update } = writable(Array(9).fill(''));

	return {
		subscribe,
		move: index => update(squares => Object.assign([], squares, {[index]: 'X'})),
		reset: () => set(Array(9).fill(''))
	};
}

export const board = createBoard();