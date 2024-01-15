function deslugify(text: string) {
	return text.replace(/-/g, " ");
}

export default deslugify;
export type Deslugify = typeof deslugify;
