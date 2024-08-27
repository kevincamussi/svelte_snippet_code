import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);

export const addSnippet = (input: CodeSnippetInput) => {
	const snippets = get(snippetStore);
	snippetStore.update(() => {
		return [{ ...input, favorite: false }, ...snippets];
	});
};

export const deleteSnippet = (index: number) => {
	const snippets = get(snippetStore);
	snippets.splice(index, 1); // removes 1 item from index
	snippetStore.update(() => {
		// codeSnippet
		return snippets;
	});
};
