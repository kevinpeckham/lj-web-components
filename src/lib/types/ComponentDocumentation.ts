import type { ComponentAttribute } from "$types/ComponentAttribute";

export interface ComponentDocumentation {
	name: string;
	slug: string;
	tag: string;
	example: string;
	self_closing: boolean;
	description: string;
	attributes: ComponentAttribute[];
}
