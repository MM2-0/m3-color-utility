<script lang="ts">
	interface Props {
		name: string
		color: string
		textColor: string
	}

	let { name, color, textColor }: Props = $props()
</script>

<div style:background={color} style:color={textColor}><span>{name}</span><span>{color}</span></div>

<style lang="scss">
	div {
		padding: 1rem 1rem 3rem;
		display: flex;
		font-size: 0.75rem;
		flex-direction: column;
		span:first-child {
			font-weight: 900;
		}
		border: solid 1px currentColor;
		border-radius: 8px;
		transition: background-color 200ms;
	}
</style>
