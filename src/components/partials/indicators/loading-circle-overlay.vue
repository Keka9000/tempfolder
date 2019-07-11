<template>

    <v-fade-transition>
        <div v-show="show" class="loading-circle-overlay no-select" :style="{ position: position }">
            <v-progress-circular
                class="loading-circle-overlay__progress"
                indeterminate
                :size="size"
                :width="stroke"
                :color="color"
            ></v-progress-circular>
        </div>
    </v-fade-transition>

</template>

<script>

    export default {

        props: {

            show: {

                type: Boolean,
                default: false

            },

            size: {

                type: Number,
                default: 100

            },

            stroke: {

                type: Number,
                default: 1

            },

            color: {

                type: String,
                default: 'primary'

            },

            position: {

                type: String,
                default: 'fixed'

            },

        },

    }
</script>

<style lang="stylus">

    .loading-circle-overlay

        display: flex
        flex-direction: column

        align-items: center
        align-content: center
        justify-content: center

        /* position: fixed */
        z-index: 5

        top: 0
        left: 0
        right: 0
        bottom: 0

        background-color: alpha(#ffffff, .6)


        &__progress

            // opacity: .7

    .fade-transition

        &-leave-active

            transition: opacity 3s ease

        &-enter-active, &-leave, &-leave-to

            // transition: $primary-transition
            transition: opacity 1s ease

        &-enter, &-leave-to

            opacity: 0


</style>
