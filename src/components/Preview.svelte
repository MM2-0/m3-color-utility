<script>
    import StatusBar from './preview/StatusBar.svelte'
    import ToolBar from './preview/ToolBar.svelte'
</script>

<section>
    <h2>Preview</h2>
    <div class="surface screens">
        <div class="screen">
            <StatusBar />
            <ToolBar />
            <div class="cards">
                <div class="surface">Card</div>
                <div class="surface">Card</div>
                <div class="surface">Card</div>
                <div class="surface">Card</div>
            </div>
        </div>
        <div class="screen">
            <StatusBar />
        </div>
        <div class="screen">
            <StatusBar />
        </div>
    </div>
</section>

<style lang="scss">
    .screens {
        display: flex;
        column-gap: 1rem;
    }
    .screen {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        height: 495px;
        width: calc(33% - 0.6666rem);
        box-sizing: border-box;
        border-radius: 16px;
        overflow: hidden;
        color: var(--on-background);
    }

    .cards {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        padding: 1rem;
    }
</style>
