<script lang="ts">
	interface Props {
		darkTheme: boolean
	}

	let { darkTheme = $bindable() }: Props = $props()
</script>

<button type="button" onclick={() => (darkTheme = !darkTheme)}
	><span class="material-icons-round">{darkTheme ? 'dark_mode' : 'light_mode'}</span>
	{darkTheme ? 'Dark Theme' : 'Light Theme'}
</button>

<style lang="scss">
	button {
		appearance: none;
		font-family: inherit;
		font-weight: 800;
		border: none;
		font-size: 0.75rem;
		padding: 0.5rem 1rem;
		border-radius: 16px;
		height: 32px;
		display: flex;
		align-items: center;
		background-color: var(--primary);
		color: var(--on-primary);
		transition: all 200ms;
		cursor: pointer;
		span {
			margin-right: 0.75rem;
			font-size: 20px;
		}
	}
</style>
