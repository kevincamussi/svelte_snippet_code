<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<div class="card">
	<header class="card-header">
		Title Of Snippet
		<div class="float-right">
			<button class="btn btn-sm variant-filled-secondary" type="button"> Favorite </button>
			<button class="btn btn-sm variant-filled-error" type="button"> X </button>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={'HTML'} code={`<h1>Hey</h1>`} />
	</section>
</div>
