<script lang="ts">
    import type { ColorScheme } from '../lib/colors'

    import hljs from 'highlight.js'

    export let colorScheme: ColorScheme

    $: code = `:root {
    --color-primary: ${colorScheme.primary};
    --color-on-primary: ${colorScheme.onPrimary};
    --color-primary-container: ${colorScheme.primaryContainer};
    --color-on-primary-container: ${colorScheme.onPrimaryContainer};
    --color-inverse-primary: ${colorScheme.inversePrimary};
    --color-secondary: ${colorScheme.secondary};
    --color-on-secondary: ${colorScheme.onSecondary};
    --color-secondary-container: ${colorScheme.secondaryContainer};
    --color-on-secondary-container: ${colorScheme.onSecondaryContainer};
    --color-tertiary: ${colorScheme.tertiary};
    --color-on-tertiary: ${colorScheme.onTertiary};
    --color-tertiary-container: ${colorScheme.tertiaryContainer};
    --color-on-tertiary-container: ${colorScheme.onTertiaryContainer};
    --color-error: ${colorScheme.error};
    --color-on-error: ${colorScheme.onError};
    --color-container: ${colorScheme.errorContainer};
    --color-on-error-container: ${colorScheme.onErrorContainer};
    --color-outline: ${colorScheme.outline};
    --color-background: ${colorScheme.background};
    --color-on-background: ${colorScheme.onBackground};
    --color-surface: ${colorScheme.surface};
    --color-on-surface: ${colorScheme.onSurface};
    --color-surface-variant: ${colorScheme.surfaceVariant};
    --color-on-surface-variant: ${colorScheme.onSurfaceVariant};
    --color-inverse-surface: ${colorScheme.inverseSurface};
    --color-inverse-on-surface: ${colorScheme.inverseOnSurface};
}
    `
</script>

<section>
    <h2>CSS variables</h2>
    <code class="surface">
        {@html hljs.highlight(code, { language: 'css' }).value}
    </code>
</section>

<style lang="scss">
    code {
        display: block;
        white-space: pre-wrap;
        margin: 0;
        :global(.hljs-attr) {
            color: var(--secondary);
        }
        :global(.hljs-number) {
            color: var(--tertiary);
        }
        :global(.hljs-selector-pseudo) {
            color: var(--primary);
            font-weight: 800;
        }
    }
</style>
