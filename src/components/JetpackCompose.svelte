<script lang="ts">
	import type { ColorScheme } from '../lib/colors'

	import hljs from 'highlight.js'

	interface Props {
		colorScheme: ColorScheme
		isDark: boolean
	}

	let { colorScheme, isDark }: Props = $props()

	function toComposeColor(color: string): string {
		return `Color(0xFF${color.substring(1).toUpperCase()})`
	}
	let code = $derived(`${isDark ? 'darkColorScheme' : 'lightColorScheme'}(
    primary = ${toComposeColor(colorScheme.primary)},
    onPrimary = ${toComposeColor(colorScheme.onPrimary)},
    primaryContainer = ${toComposeColor(colorScheme.primaryContainer)},
    onPrimaryContainer = ${toComposeColor(colorScheme.onPrimaryContainer)},
    inversePrimary = ${toComposeColor(colorScheme.inversePrimary)},
    secondary = ${toComposeColor(colorScheme.secondary)},
    onSecondary = ${toComposeColor(colorScheme.onSecondary)},
    secondaryContainer = ${toComposeColor(colorScheme.secondaryContainer)},
    onSecondaryContainer = ${toComposeColor(colorScheme.onSecondaryContainer)},
    tertiary = ${toComposeColor(colorScheme.tertiary)},
    onTertiary = ${toComposeColor(colorScheme.onTertiary)},
    tertiaryContainer = ${toComposeColor(colorScheme.tertiaryContainer)},
    onTertiaryContainer = ${toComposeColor(colorScheme.onTertiaryContainer)},
    surface = ${toComposeColor(colorScheme.surface)},
    surfaceBright = ${toComposeColor(colorScheme.surfaceBright)},
    surfaceDim = ${toComposeColor(colorScheme.surfaceDim)}, 
    surfaceContainer = ${toComposeColor(colorScheme.surfaceContainer)},
    surfaceContainerHighest = ${toComposeColor(colorScheme.surfaceContainerHighest)},
    surfaceContainerHigh = ${toComposeColor(colorScheme.surfaceContainerHigh)},
    surfaceContainerLow = ${toComposeColor(colorScheme.surfaceContainerLow)},
    surfaceContainerLowest = ${toComposeColor(colorScheme.surfaceContainerLowest)},
    onSurface = ${toComposeColor(colorScheme.onSurface)},
    onSurfaceVariant = ${toComposeColor(colorScheme.onSurfaceVariant)},
    inverseSurface = ${toComposeColor(colorScheme.inverseSurface)},
    inverseOnSurface = ${toComposeColor(colorScheme.inverseOnSurface)},
    error = ${toComposeColor(colorScheme.error)},
    onError = ${toComposeColor(colorScheme.onError)},
    errorContainer = ${toComposeColor(colorScheme.errorContainer)},
    onErrorContainer = ${toComposeColor(colorScheme.onErrorContainer)},
    outline = ${toComposeColor(colorScheme.outline)},
    outlineVariant = ${toComposeColor(colorScheme.outlineVariant)},
    scrim = ${toComposeColor(colorScheme.scrim)},
    
    /* deprecated */
    background = ${toComposeColor(colorScheme.background)},
    onBackground = ${toComposeColor(colorScheme.onBackground)},
    surfaceVariant = ${toComposeColor(colorScheme.surfaceVariant)},
)`)
</script>

<section>
	<h2>Jetpack Compose</h2>
	<code class="surface">
		{@html hljs.highlight(code, { language: 'kt' }).value}
	</code>
</section>

<style lang="scss">
	code {
		display: block;
		white-space: pre-wrap;
		margin: 2rem 0;
		margin: 0;
		:global(.hljs-number) {
			font-weight: 800;
			color: var(--tertiary);
		}
		:global(.hljs-comment) {
			color: var(--outline);
		}
	}
</style>
