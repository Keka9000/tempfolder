<template>

    <div class="scrollarea">

        <div class="scrollarea__wrapper">

            <div class="scrollarea__container">

                <div v-if="$slots.header" class="scrollarea__header">
                    <slot name="header"></slot>
                </div>

                <!-- <v-divider v-if="$slots.header"/> -->

                <!-- <div v-if="$slots.body" class="scrollarea__body"> -->
                <!-- <div v-bar ref="body" class="scrollarea__body" :class="{ 'scrollarea__scroll': scroll.visible, 'scrollarea__gradient-bottom': scroll.reached.bottom }" @scroll="onScroll">
                    <div>
                        <slot name="body"></slot>
                        <div v-for="index in 150">{{ index }}</div>
                    </div>
                </div> -->

                <div ref="body" class="scrollarea__body" :class="{ 'scrollarea__scroll': scroll.visible, 'scrollarea__gradient-bottom': scroll.reached.bottom }" @scroll="onScroll">
                    <slot name="body"></slot>
                </div>

                <v-divider v-if="$slots.footer"/>

                <div v-if="$slots.footer" class="scrollarea__footer">
                    <slot name="footer"></slot>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

    // TODO: Vuebar (directive v-bar)
    // import Vuebar from 'vuebar'

    export default {

        // directives: {
        //
        //     Vuebar
        //
        // },

        data: () => ({

            scroll: {

                visible: false,
                reached: {

                    top: false,
                    bottom: false,

                },

            },

        }),


        mounted: function () {

            this.setupScroll(this.$refs.body)

        },

        updated: function () {

            this.setupScroll(this.$refs.body)

        },

        methods: {

            onScroll: function (e) {

                this.setupScroll(e.target)

            },

            setupScroll: function (element) {

                this.scroll.visible = (element.scrollHeight > element.offsetHeight) ? true : false
                this.scroll.reached.bottom = (element.scrollTop >= (element.scrollHeight - element.offsetHeight)) ? false : true

            },

        },

    }

</script>

<style lang="stylus">

    .scrollarea

        position: relative

        width: 100%
        height: 100%

        &__wrapper

            position: absolute

            bottom: 0
            left: 0
            right: 0
            top: 0

        &__container

            display: flex
            flex-direction: column

            width: 100%
            height: 100%

        &__header

            display: flex
            flex-wrap: wrap
            flex: 0 0 auto

            /* padding: 16px */

        &__body

            /* flex: 1 1 auto */
            flex: auto
            overflow-y: auto
            min-height: 0px

            position: relative

        &__footer
            min-height: 30%
            max-height: 30%
            display: auto
            overflow-y: auto
            /* align-items: center */
            flex: 0 0 auto

            /* padding: 16px */

        /* &__footer
            min-height: 40%
            display: flex
            align-items: center
            flex: 0 0 auto */

            /* padding: 16px */

</style>
