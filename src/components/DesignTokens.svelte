<script lang="ts">
	import type { ColorScheme } from '../lib/colors'

	interface Props {
		lightColorScheme: ColorScheme
		darkColorScheme: ColorScheme
	}

	let { lightColorScheme, darkColorScheme }: Props = $props()

	function toKebabCase(str: string): string {
		return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
	}

	const href = $derived.by(() => {
		const fileContents = {
			light: {
				colors: {
					...Object.fromEntries(
						Object.entries(lightColorScheme).map(([key, value]) => [
							toKebabCase(key),
							{ $value: value, $type: 'color' },
						]),
					),
				},
			},
			dark: {
				colors: {
					...Object.fromEntries(
						Object.entries(darkColorScheme).map(([key, value]) => [
							toKebabCase(key),
							{ $value: value, $type: 'color' },
						]),
					),
				},
			},
			$metadata: {
				tokenSetOrder: ['light', 'dark'],
				activeThemes: [],
				activeSets: [],
			},
		}

		const blob = new Blob([JSON.stringify(fileContents, null, 2)])

		return URL.createObjectURL(blob)
	})
</script>

<section>
	<h2>Design tokens</h2>
	<div class="surface">
		<a type="button" {href} target="_blank" download="tokens.json"
			><span class="material-icons-round">download</span>
			Download
		</a>
	</div>
</section>

<style lang="scss">
	.surface {
		display: flex;
		flex-direction: column;
		align-items: start;
	}
	a {
		appearance: none;
		font-family: inherit;
		font-weight: 800;
		border: none;
		font-size: 0.75rem;
		padding: 0.5rem 1rem;
		border-radius: 16px;
		height: 32px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		text-decoration: none;
		background-color: transparent;
		color: var(--primary);
		transition: all 200ms;
		cursor: pointer;
		span {
			margin-right: 0.75rem;
			font-size: 20px;
		}
		&:hover {
			background-color: rgba(from var(--on-surface) r g b / 0.1);
		}
	}
</style>
