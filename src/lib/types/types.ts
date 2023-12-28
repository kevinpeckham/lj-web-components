// a great place to put types that are used in multiple places
export interface Link {
	[key: string]: unknown;
	label: string;
	href: string;
	rel?: string;
	target?: string;
	title?: string;
}
export interface Image {
	[key: string]: unknown;
	src: string;
	alt?: string;
	loading?: string;
	height?: string;
	width?: string;
}
export type Brand = Link;
