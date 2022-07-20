import type { ComponentType } from 'svelte';

export type Process = {
	name: string;
	order?: number;
	state: 'open' | 'minimized' | 'expanded';
	component: ComponentType;
	icon: string;
};
