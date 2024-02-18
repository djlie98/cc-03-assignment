<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>{data.data.name}</h1>

<ul>
	{#each data.data.posts as post}
		<li>{post}</li>
	{/each}
</ul>
