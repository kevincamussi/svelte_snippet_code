import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);

export const addSnippet = (input: CodeSnippetInput) => {
	const snippets = get(snippetStore);
	snippetStore.update(() => {
		return [{ ...input, favorite: false }, ...snippets];
	});
};
