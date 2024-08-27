<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { deleteSnippet, toggleFavorite } from '../SnippetStore';

	export let snippet: CodeSnippet = {
		title: '',
		language: '',
		code: '',
		favorite: false
	};

	export let index: number;
</script>

<div class="card">
	<header class="card-header">
		{snippet.title}
		<div class="float-right">
			<button
				class="btn btn-sm variant-filled-secondary"
				type="button"
				on:click={() => toggleFavorite(index)}
			>
				{snippet.favorite ? 'Unfavorite' : 'Favorite'}
			</button>
			<button
				class="btn btn-sm variant-filled-error"
				type="button"
				on:click={() => deleteSnippet(index)}
			>
				X
			</button>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={snippet.language} code={snippet.code} />
	</section>
</div>
