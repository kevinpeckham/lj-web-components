export interface ComponentAttribute {
	[key: string]: unknown;
	name: string;
	description: string;
	type: string;
	required: boolean;
	default: string;
	notes: string;
}
