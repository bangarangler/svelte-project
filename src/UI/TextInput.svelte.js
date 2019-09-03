<script>
	export let controlType;
</script>

	{$if controlType === 'textarea'}
<div class="form-control">
	<label for="description">Description</label><textarea
				 rows="3" id="description" bind:value={description} />
</div>
	{:else}
	<div class="form-control">
		<label for="email">E-Mail</label><input type="email" id="email"
																												 bind:value={email}>
	</div>
	{/if}
