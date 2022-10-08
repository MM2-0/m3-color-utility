<script lang="ts">
    import type { ColorScheme } from '../lib/colors'
    import PaletteColor from './PaletteColor.svelte'

    export let colorScheme: ColorScheme
</script>

<section>
    <h2>Palette</h2>
    <div class="preview surface">
        <PaletteColor
            name="Primary"
            color={colorScheme.primary}
            textColor={colorScheme.onPrimary}
        />
        <PaletteColor
            name="OnPrimary"
            color={colorScheme.onPrimary}
            textColor={colorScheme.primary}
        />
        <PaletteColor
            name="PrimaryContainer"
            color={colorScheme.primaryContainer}
            textColor={colorScheme.onPrimaryContainer}
        />
        <PaletteColor
            name="OnPrimaryContainer"
            color={colorScheme.onPrimaryContainer}
            textColor={colorScheme.primaryContainer}
        />

        <PaletteColor
            name="Secondary"
            color={colorScheme.secondary}
            textColor={colorScheme.onSecondary}
        />
        <PaletteColor
            name="OnSecondary"
            color={colorScheme.onSecondary}
            textColor={colorScheme.secondary}
        />
        <PaletteColor
            name="SecondaryContainer"
            color={colorScheme.secondaryContainer}
            textColor={colorScheme.onSecondaryContainer}
        />
        <PaletteColor
            name="OnSecondaryContainer"
            color={colorScheme.onSecondaryContainer}
            textColor={colorScheme.secondaryContainer}
        />

        <PaletteColor
            name="Tertiary"
            color={colorScheme.tertiary}
            textColor={colorScheme.onTertiary}
        />
        <PaletteColor
            name="OnTertiary"
            color={colorScheme.onTertiary}
            textColor={colorScheme.tertiary}
        />
        <PaletteColor
            name="TertiaryContainer"
            color={colorScheme.tertiaryContainer}
            textColor={colorScheme.onTertiaryContainer}
        />
        <PaletteColor
            name="OnTertiaryContainer"
            color={colorScheme.onTertiaryContainer}
            textColor={colorScheme.tertiaryContainer}
        />

        <PaletteColor
            name="Background"
            color={colorScheme.background}
            textColor={colorScheme.onBackground}
        />
        <PaletteColor
            name="OnBackground"
            color={colorScheme.onBackground}
            textColor={colorScheme.background}
        />
        <PaletteColor
            name="Surface"
            color={colorScheme.surface}
            textColor={colorScheme.onSurface}
        />
        <PaletteColor
            name="OnSurface"
            color={colorScheme.onSurface}
            textColor={colorScheme.surface}
        />

        <PaletteColor
            name="SurfaceVariant"
            color={colorScheme.surfaceVariant}
            textColor={colorScheme.onSurfaceVariant}
        />
        <PaletteColor
            name="OnSurfaceVariant"
            color={colorScheme.onSurfaceVariant}
            textColor={colorScheme.surfaceVariant}
        />
        <PaletteColor name="Outline" color={colorScheme.outline} textColor="white" />
        <div />

        <PaletteColor name="Error" color={colorScheme.error} textColor={colorScheme.onError} />
        <PaletteColor name="OnError" color={colorScheme.onError} textColor={colorScheme.error} />
        <PaletteColor
            name="ErrorContainer"
            color={colorScheme.errorContainer}
            textColor={colorScheme.onErrorContainer}
        />
        <PaletteColor
            name="OnErrorContainer"
            color={colorScheme.onErrorContainer}
            textColor={colorScheme.errorContainer}
        />
    </div>
</section>

<style lang="scss">
    section {
        width: 100%;
    }
    .preview {
        display: grid;
        grid-template-columns: repeat(4, calc(25% - 0.75rem));
        gap: 1rem;
        transition: all 200ms;
    }
</style>
