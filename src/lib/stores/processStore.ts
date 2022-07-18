import type { Process } from '$lib/types/process';
import { writable } from 'svelte/store';
import Chat from '$lib/chat.svelte';

const createProcesses = () => {
	const { subscribe, update } = writable<Process[]>([
		{
			component: Chat,
			name: 'chat',
			position: { x: 0, y: 0 },
			state: 'expanded'
		}
	]);

	return {
		subscribe,
		createProcess: (process: Process) =>
			update((processes) => [...processes, { ...process, order: processes.length }]),
		removeProcess: (process: Process) =>
			update((processes) =>
				processes.filter((p) => p.name === process.name && p.order === process.order)
			)
	};
};
export const processes = createProcesses();
