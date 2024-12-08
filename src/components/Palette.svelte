<script lang="ts">
    import type { ColorScheme } from '../lib/colors'
    import PaletteColor from './PaletteColor.svelte'

    export let colorScheme: ColorScheme
</script>

<section>
    <h2>Palette</h2>
    <div class="preview surface">
        <div class="row">
            <PaletteColor
                name="Primary"
                color={colorScheme.primary}
                textColor={colorScheme.onPrimary}
            />
            <PaletteColor
                name="On Primary"
                color={colorScheme.onPrimary}
                textColor={colorScheme.primary}
            />
            <PaletteColor
                name="Primary Container"
                color={colorScheme.primaryContainer}
                textColor={colorScheme.onPrimaryContainer}
            />
            <PaletteColor
                name="On Primary Container"
                color={colorScheme.onPrimaryContainer}
                textColor={colorScheme.primaryContainer}
            />
        </div>

        <div class="row">
            <PaletteColor
                name="Secondary"
                color={colorScheme.secondary}
                textColor={colorScheme.onSecondary}
            />
            <PaletteColor
                name="On Secondary"
                color={colorScheme.onSecondary}
                textColor={colorScheme.secondary}
            />
            <PaletteColor
                name="Secondary Container"
                color={colorScheme.secondaryContainer}
                textColor={colorScheme.onSecondaryContainer}
            />
            <PaletteColor
                name="On Secondary Container"
                color={colorScheme.onSecondaryContainer}
                textColor={colorScheme.secondaryContainer}
            />
        </div>

        <div class="row">
            <PaletteColor
                name="Tertiary"
                color={colorScheme.tertiary}
                textColor={colorScheme.onTertiary}
            />
            <PaletteColor
                name="On Tertiary"
                color={colorScheme.onTertiary}
                textColor={colorScheme.tertiary}
            />
            <PaletteColor
                name="Tertiary Container"
                color={colorScheme.tertiaryContainer}
                textColor={colorScheme.onTertiaryContainer}
            />
            <PaletteColor
                name="On Tertiary Container"
                color={colorScheme.onTertiaryContainer}
                textColor={colorScheme.tertiaryContainer}
            />
        </div>

        <div class="row">
            <PaletteColor name="Error" color={colorScheme.error} textColor={colorScheme.onError} />
            <PaletteColor
                name="On Error"
                color={colorScheme.onError}
                textColor={colorScheme.error}
            />
            <PaletteColor
                name="Error Container"
                color={colorScheme.errorContainer}
                textColor={colorScheme.onErrorContainer}
            />
            <PaletteColor
                name="On Error Container"
                color={colorScheme.onErrorContainer}
                textColor={colorScheme.errorContainer}
            />
        </div>
        <div class="row" style:--cols={3}>
            <PaletteColor
                name="Surface Dim"
                color={colorScheme.surfaceDim}
                textColor={colorScheme.onSurface}
            />
            <PaletteColor
                name="Surface"
                color={colorScheme.surface}
                textColor={colorScheme.onSurface}
            />
            <PaletteColor
                name="Surface Bright"
                color={colorScheme.surfaceBright}
                textColor={colorScheme.onSurface}
            />
        </div>

        <div class="row" style:--cols={5}>
            <PaletteColor
                name="Surface Container Lowest"
                color={colorScheme.surfaceContainerLowest}
                textColor={colorScheme.onSurfaceVariant}
            />
            <PaletteColor
                name="Surface Container Low"
                color={colorScheme.surfaceContainerLow}
                textColor={colorScheme.onSurfaceVariant}
            />
            <PaletteColor
                name="Surface Container"
                color={colorScheme.surfaceContainer}
                textColor={colorScheme.onSurfaceVariant}
            />
            <PaletteColor
                name="Surface Container High"
                color={colorScheme.surfaceContainerHigh}
                textColor={colorScheme.onSurfaceVariant}
            />
            <PaletteColor
                name="Surface Container Highest"
                color={colorScheme.surfaceContainerHighest}
                textColor={colorScheme.onSurfaceVariant}
            />
        </div>
        <div class="row">
            <PaletteColor
                name="On Surface"
                color={colorScheme.onSurface}
                textColor={colorScheme.surface}
            />
            <PaletteColor
                name="On Surface Variant"
                color={colorScheme.onSurfaceVariant}
                textColor={colorScheme.surfaceContainer}
            />
            <PaletteColor
                name="Outline"
                color={colorScheme.outline}
                textColor={colorScheme.surface}
            />
            <PaletteColor
                name="Outline Variant"
                color={colorScheme.outlineVariant}
                textColor={colorScheme.onSurface}
            />
        </div>
        <div class="row" style:--cols={3}>
            <PaletteColor
                name="InverseSurface"
                color={colorScheme.inverseSurface}
                textColor={colorScheme.inverseOnSurface}
            />
            <PaletteColor
                name="InverseOnSurface"
                color={colorScheme.inverseOnSurface}
                textColor={colorScheme.inverseSurface}
            />

            <PaletteColor
                name="InversePrimary"
                color={colorScheme.inversePrimary}
                textColor={colorScheme.inverseSurface}
            />
        </div>
        <div class="row" style:--cols={2}>
            <PaletteColor name="Scrim" color={colorScheme.scrim} textColor="white" />
            <PaletteColor name="Shadow" color={colorScheme.shadow} textColor="white" />
        </div>

        <div class="row" style:--cols={3}>
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
                name="SurfaceVariant"
                color={colorScheme.surfaceVariant}
                textColor={colorScheme.onSurfaceVariant}
            />
        </div>
    </div>
</section>

<style lang="scss">
    section {
        width: 100%;
    }
    .preview {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        transition: all 200ms;

        .row {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(var(--cols, 4), 1fr);
        }
    }
</style>
