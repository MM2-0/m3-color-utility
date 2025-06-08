<script lang="ts">
	import '../styles/index.scss'
	import AndroidXml from '../components/AndroidXml.svelte'

	import Palette from '../components/Palette.svelte'
	import { generateDarkColorScheme, generateLightColorScheme, type BaseColors } from '../lib/colors'
	import JetpackCompose from '../components/JetpackCompose.svelte'
	import Settings from '../components/Settings.svelte'
	import CssVars from '../components/CssVars.svelte'
	import ModeToggle from '../components/ModeToggle.svelte'
	import { browser } from '$app/environment'
	import DesignTokens from '../components/DesignTokens.svelte'

	let darkTheme = $state(browser ? matchMedia('(prefers-color-scheme: dark)').matches : false)

	let baseColors: BaseColors = $state({
		primary: '#3a691e',
		secondary: '#55624c',
		tertiary: '#19686a',
		neutral: '#5d5f5a',
		neutralVariant: '#5b6056',
		error: '#b3261e',
	})

	let darkColorScheme = $derived(generateDarkColorScheme(baseColors))
	let lightColorScheme = $derived(generateLightColorScheme(baseColors))

	let colorScheme = $derived(darkTheme ? darkColorScheme : lightColorScheme)
</script>

<main
	style:--primary={colorScheme.primary}
	style:--on-primary={colorScheme.onPrimary}
	style:--primary-container={colorScheme.primaryContainer}
	style:--on-primary-container={colorScheme.onPrimaryContainer}
	style:--secondary={colorScheme.secondary}
	style:--on-secondary={colorScheme.onSecondary}
	style:--secondary-container={colorScheme.secondaryContainer}
	style:--on-secondary-container={colorScheme.onSecondaryContainer}
	style:--tertiary={colorScheme.tertiary}
	style:--on-tertiary={colorScheme.onTertiary}
	style:--surface={colorScheme.surface}
	style:--on-surface={colorScheme.onSurface}
	style:--on-surface-variant={colorScheme.onSurfaceVariant}
	style:--outline={colorScheme.outline}
	style:--error={colorScheme.error}
	style:--on-error={colorScheme.onError}
	style:--outline-variant={colorScheme.outlineVariant}
	style:--surface-container-highest={colorScheme.surfaceContainerHighest}
	style:--surface-container-high={colorScheme.surfaceContainerHigh}
	style:--surface-container={colorScheme.surfaceContainer}
	style:--surface-container-low={colorScheme.surfaceContainerLow}
	style:--surface-container-lowest={colorScheme.surfaceContainerLowest}
	style:--surface-dim={colorScheme.surfaceDim}
>
	<div class="container">
		<h1>
			<span>Material 3 Color Utility</span>
			<div class="mode">
				<ModeToggle bind:darkTheme />
			</div>
		</h1>
		<Settings bind:baseColors />
		<Palette {colorScheme} />
		<AndroidXml {colorScheme} />
		<JetpackCompose {colorScheme} isDark={darkTheme} />
		<CssVars {colorScheme} />
		<DesignTokens {lightColorScheme} {darkColorScheme} />
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		background-color: var(--surface-container);
		color: var(--on-surface);
	}
	.container {
		margin: 1rem auto;
		max-width: 900px;
		width: 100%;
	}
	.settings {
		display: flex;
		flex-direction: row;
		column-gap: 1rem;
		margin-bottom: 2rem;
		align-items: flex-end;
	}
	h1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
</style>
