<script lang="ts">
	import CodeSnippetCard from '$lib/CodeSnippetCard.svelte';

	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	//createSnippet(input: CodeSnippetInput)
	//SnippetStore -> local writable that allows us to store code snippets
	//favorite snippets
	//+page.ts initally load in some example snippets (mocking database request)
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create A Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label for="label">
				<span>Snippet Title</span>
				<input
					type="text"
					class="input"
					placeholder="Enter title here..."
					bind:value={formData.title}
				/>
			</label>
			<label for="label">
				<span>Programming Language</span>
				<select class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="typescript">Typescript</option>
				</select>
			</label>
			<label for="label">
				<span>Code Snippet</span>
				<textarea
					bind:value={formData.code}
					class="textarea"
					rows="4"
					placeholder="Enter you snippet code here..."
				/>
			</label>
		</div>
		<div class="text-center py-6">
			<h2>My Code Snippets</h2>
		</div>
		<CodeSnippetCard />
	</div>
</div>
