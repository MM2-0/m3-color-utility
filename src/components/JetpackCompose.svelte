<script lang="ts">
    import type { ColorScheme } from '../lib/colors'

    import hljs from 'highlight.js'

    export let colorScheme: ColorScheme
    export let isDark: boolean

    $: code = `${isDark ? 'darkColorScheme' : 'lightColorScheme'}(
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
    background = ${toComposeColor(colorScheme.background)},
    onBackground = ${toComposeColor(colorScheme.onBackground)},
    surface = ${toComposeColor(colorScheme.surface)},
    onSurface = ${toComposeColor(colorScheme.onSurface)},
    surfaceVariant = ${toComposeColor(colorScheme.surfaceVariant)},
    onSurfaceVariant = ${toComposeColor(colorScheme.onSurfaceVariant)},
    inverseSurface = ${toComposeColor(colorScheme.inverseSurface)},
    inverseOnSurface = ${toComposeColor(colorScheme.inverseOnSurface)},
    error = ${toComposeColor(colorScheme.error)},
    onError = ${toComposeColor(colorScheme.onError)},
    errorContainer = ${toComposeColor(colorScheme.errorContainer)},
    onErrorContainer = ${toComposeColor(colorScheme.onErrorContainer)},
    outline = ${toComposeColor(colorScheme.outline)},
)`

    function toComposeColor(color: string): string {
        return `Color(0xFF${color.substring(1).toUpperCase()})`
    }
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
    }
</style>
