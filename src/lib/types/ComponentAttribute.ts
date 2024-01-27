let key: string;

export class ComponentAttribute {
	[key: string]: unknown;
	default: string = "";
	description: string = "";
	example: string = "";
	name: string = "";
	notes: string = "";
	required: boolean = false;
	type: string = "";
}
