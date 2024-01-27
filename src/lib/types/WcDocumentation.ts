import type { ComponentAttribute } from "$types/ComponentAttribute";

export interface WcDocumentation {
	attributes: ComponentAttribute[];
	description: string;
	example: string;
	name: string;
	published: boolean;
	tags: string[];
	selfClosing: boolean;
	slug: string;
	notes?: string;
}
