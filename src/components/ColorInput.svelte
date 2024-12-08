<script lang="ts">
    export let value: string

    export let label: string = ''

    let _value = value

    $: {
        if (/#[0-9a-fA-F]{6}/.test(_value)) {
            value = _value
        } else {
            value = '#000000'
        }
    }
</script>

<div class="color-input">
    {label}
    <div class="row">
        <input
            type="text"
            maxlength="7"
            bind:value={_value}
            class:error={!/#[0-9a-fA-F]{6}/.test(_value)}
        />
        <div class="preview">
            <input type="color" bind:value={_value} />
        </div>
    </div>
</div>

<style lang="scss">
    .color-input {
        display: flex;
        flex-direction: column;
        font-weight: 800;

        row-gap: 0.25rem;

        .row {
            display: flex;
            column-gap: 1rem;
            input {
                width: 7ch;
                font-family: monospace;
                flex-grow: 1;
            }
        }

        input[type='text'] {
            appearance: none;
            border: none;
            background-color: var(--surface-container-highest);
            color: var(--on-surface-variant);
            padding: 0.5rem 1rem;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border-bottom: 2px solid var(--outline);
            &:focus {
                outline: none;
                border-bottom: 2px solid var(--primary);
            }
            &.error:focus {
                border-bottom: 2px solid var(--error);
            }
        }

        .preview {
            border-radius: 8px;
            overflow: hidden;
            height: 2rem;
            width: 2rem;
            input {
                appearance: none;
                display: block;
                height: calc(100% + 2px);
                width: calc(100% + 2px);
                margin: -1px;
                padding: 0;
                border: none;
                background-color: transparent;
                &::-webkit-color-swatch-wrapper {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                }
                &::-webkit-color-swatch {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                }
            }
        }
    }
</style>
