import { writable, get } from 'svelte/store';

export const snippetStore = writable<CodeSnippet[]>([]);

export const addSnippet = (input: CodeSnippetInput) => {
	const snippets = get(snippetStore);

	snippetStore.update(() => {
		// Codesnippet []
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

export const toggleFavorite = (index: number) => {
	const snippets = get(snippetStore);

	snippetStore.update(() => {
		return snippets.map((snippet, snippetIndex) => {
			if (snippetIndex === index) {
				return { ...snippet, favorite: !snippet.favorite };
			}
			return snippet;
		});
	});
};
