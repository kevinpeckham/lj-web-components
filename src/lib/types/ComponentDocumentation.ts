import type { ComponentAttribute } from "$types/ComponentAttribute";

export interface ComponentDocumentation {
	attributes: ComponentAttribute[];
	description: string;
	example: string;
	name: string;
	published: boolean;
	tag: string;
	self_closing: boolean;
	slug: string;
}
