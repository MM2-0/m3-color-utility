<script lang="ts">
    import { Scheme } from '@material/material-color-utilities'

    import { generateBaseColors, type BaseColors } from '../lib/colors'
    import ColorInput from './ColorInput.svelte'
    import ModeToggle from './ModeToggle.svelte'

    export let baseColors: BaseColors

    export let darkTheme: boolean

    let singleColorMode = false

    $: {
        if (singleColorMode) {
            const newScheme = generateBaseColors(baseColors.primary)
            baseColors.secondary = newScheme.secondary
            baseColors.tertiary = newScheme.tertiary
            baseColors.neutral = newScheme.neutral
            baseColors.neutralVariant = newScheme.neutralVariant
            baseColors.error = newScheme.error
        }
    }
</script>

<section>
    <h2>Base colors</h2>
    <div class="settings surface">
        <div class="color-mode-selector">
            <button on:click={() => (singleColorMode = true)} class:selected={singleColorMode}
                >One color</button
            >
            <button on:click={() => (singleColorMode = false)} class:selected={!singleColorMode}
                >Six colors</button
            >
        </div>
        <ColorInput label="Primary" bind:value={baseColors.primary} />
        {#if !singleColorMode}
            <ColorInput label="Secondary" bind:value={baseColors.secondary} />
            <ColorInput label="Tertiary" bind:value={baseColors.tertiary} />
            <ColorInput label="Neutral" bind:value={baseColors.neutral} />
            <ColorInput label="NeutralVariant" bind:value={baseColors.neutralVariant} />
            <ColorInput label="Error" bind:value={baseColors.error} />
        {/if}
    </div>
</section>

<style lang="scss">
    .settings {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1rem 4rem;
        padding: 1.5rem 3rem 1.5rem 1rem;
        grid-auto-flow: row;
        .color-mode-selector {
            grid-column: 1 / -1;
            display: flex;
            button {
                appearance: none;
                background-color: transparent;
                padding: 0 1rem;
                height: 2.5rem;
                display: flex;
                font-family: inherit;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 0.8rem;
                border: solid 1px var(--outline);
                color: var(--on-surface);
                border-right: none;
                cursor: pointer;
                &.selected {
                    background-color: var(--secondary-container);
                    color: var(--on-secondary-container);
                }
                &:first-of-type {
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                }
                &:last-of-type {
                    border-right: solid 1px var(--outline);
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                }
            }
        }
    }
</style>
