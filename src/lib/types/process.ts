import type { ComponentType } from 'svelte';

export type Process = {
	name: string;
	order?: number;
	position: {
		x: number;
		y: number;
	};
	state: 'open' | 'minimized' | 'expanded';
	component: ComponentType;
};
