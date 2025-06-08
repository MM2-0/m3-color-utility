<script lang="ts">
	import type { ColorScheme } from '../lib/colors'

	import hljs from 'highlight.js'

	interface Props {
		colorScheme: ColorScheme
	}

	let { colorScheme }: Props = $props()

	let code =
		$derived(`\u003Cstyle android:name="AppTheme" android:parent="Theme.AppCompat.DayNight.NoActionBar">
    <item name="colorPrimary">${colorScheme.primary}</item>
    <item name="colorOnPrimary">${colorScheme.onPrimary}</item>
    <item name="colorPrimaryContainer">${colorScheme.primaryContainer}</item>
    <item name="colorOnPrimaryContainer">${colorScheme.onPrimaryContainer}</item>
    <item name="colorPrimaryInverse">${colorScheme.inversePrimary}</item>
    
    <item name="colorSecondary">${colorScheme.secondary}</item>
    <item name="colorOnSecondary">${colorScheme.onSecondary}</item>
    <item name="colorSecondaryContainer">${colorScheme.secondaryContainer}</item>
    <item name="colorOnSecondaryContainer">${colorScheme.onSecondaryContainer}</item>
    
    <item name="colorTertiary">${colorScheme.tertiary}</item>
    <item name="colorOnTertiary">${colorScheme.onTertiary}</item>
    <item name="colorTertiaryContainer">${colorScheme.tertiaryContainer}</item>
    <item name="colorOnTertiaryContainer">${colorScheme.onTertiaryContainer}</item>
    
    <item name="colorError">${colorScheme.error}</item>
    <item name="colorOnError">${colorScheme.onError}</item>
    <item name="colorErrorContainer">${colorScheme.errorContainer}</item>
    <item name="colorOnErrorContainer">${colorScheme.onErrorContainer}</item>
    
    <item name="colorOutline">${colorScheme.outline}</item>
    <item name="colorOutlineVariant">${colorScheme.outlineVariant}</item>
    
    <item name="colorSurface">${colorScheme.surface}</item>
    <item name="colorSurfaceBright">${colorScheme.surfaceBright}</item>
    <item name="colorSurfaceDim">${colorScheme.surfaceDim}</item>
    
    <item name="colorSurfaceContainer">${colorScheme.surfaceContainer}</item>
    <item name="colorSurfaceContainerHighest">${colorScheme.surfaceContainerHighest}</item>
    <item name="colorSurfaceContainerHigh">${colorScheme.surfaceContainerHigh}</item>
    <item name="colorSurfaceContainerLow">${colorScheme.surfaceContainerLow}</item>
    <item name="colorSurfaceContainerLowest">${colorScheme.surfaceContainerLowest}</item>
    
    <item name="colorOnSurface">${colorScheme.onSurface}</item>
    <item name="colorOnSurfaceVariant">${colorScheme.onSurfaceVariant}</item>
    
    <item name="colorSurfaceInverse">${colorScheme.inverseSurface}</item>
    <item name="colorOnSurfaceInverse">${colorScheme.inverseOnSurface}</item>
    
    <item name="scrimBackground">${colorScheme.scrim}</item>

    <!-- deprecated -->
    <item name="android:colorBackground">${colorScheme.background}</item>
    <item name="colorOnBackground">${colorScheme.onBackground}</item>
    <item name="colorSurfaceVariant">${colorScheme.surfaceVariant}</item>
</style>`)
</script>

<section>
	<h2>Android XML</h2>
	<code class="surface">
		{@html hljs.highlight(code, { language: 'xml' }).value}
	</code>
</section>

<style lang="scss">
	code {
		display: block;
		white-space: pre-wrap;
		margin: 0;
		:global(.hljs-name) {
			font-weight: 800;
			color: var(--primary);
		}
		:global(.hljs-attr) {
			color: var(--secondary);
		}
		:global(.hljs-string) {
			font-weight: 800;
			color: var(--tertiary);
		}
		:global(.hljs-comment) {
			color: var(--outline);
		}
	}
</style>
