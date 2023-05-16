<template>
    <div id="why-us" class="w-full  bg-white px-4">
        <div class="flex flex-col container relative md:mx-auto lg:px-12">
            <div class="font-primary flex flex-col px-4 py-12 md:pt-24 w-full items-center md:w-full  md:ml-auto ">
                <div
                    v-scroll-reveal="{ delay: 300 }"
                    class=" text-secondary text-4xl md:text-5xl pb-4 text-center w-full md:max-w-full "
                >
                    {{ title_1 }} <span class="font-primary-bold">{{ title_2 }}</span>
                </div>
                <div
                    v-scroll-reveal="{ delay: 300 }"
                    class="font-primary-bold text-accent-alt-a  text-lg flex md:hidden"
                >
                    {{ text }}
                </div>
                <q-carousel
                    v-model="slide"
                    transition-prev="jump-right"
                    transition-next="jump-left"
                    ref="whyUsCarousel"
                    animated
                    infinite
                    control-color="accent"
                    prev-icon="arrow_left"
                    next-icon="arrow_right"
                    class="py-6 md:w-full carousel-container"
                    v-scroll-reveal="{ delay: 600 }"
                >
                    <q-carousel-slide
                        v-for="(item, index) in items"
                        :key="index"
                        :name="item.number"
                        class="h-96 w-full pointer-events-none"
                    >
                        <div
                            class="flex flex-col md:flex-row md:flex-nowrap md:max-w-5xl md:mx-auto  md:w-full items-center justify-center"
                        >
                            <div class="flex flex-col items-center justify-center my-auto">
                                <div class="font-primary-bold text-accent text-9xl">
                                    {{ item.number }}
                                </div>
                                <div class="font-primary text-base text-accent pt-4">
                                    {{ item.subtitle }}
                                </div>
                            </div>
                            <div class="md:flex md:flex-col text-base md:max-w-xl md:ml-16">
                                <div
                                    v-html="item.category"
                                    class="hidden md:flex font-primary-light text-accent-alt-a"
                                ></div>
                                <div class="font-primary-light text-black text-lg pt-6  lg:mt-auto select-none">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
                <div
                    v-scroll-reveal="{ delay: 800 }"
                    class="absolute md:hidden right-0 top-0 bottom-0 flex my-auto mb-32 md:mb-0 md:mt-12 md:justify-start w-10 md:w-32 px-2 cursor-pointer"
                >
                    <img src="/icons/right_arrow.svg" @click="$refs.whyUsCarousel.next()" alt="" />
                </div>
                <div
                    v-scroll-reveal="{ delay: 800 }"
                    class="absolute md:hidden left-0 top-0 bottom-0 flex my-auto mb-32 md:mb-0 md:mt-12 md:justify-end  w-10 md:w-32 px-2 cursor-pointer"
                >
                    <img src="/icons/left_arrow.svg" @click="$refs.whyUsCarousel.previous()" alt="" />
                </div>
                <div
                    v-scroll-reveal="{ delay: 800 }"
                    class="hidden md:absolute right-0 top-0 bottom-0 md:flex md:mt-10 h-full my-auto md:justify-start w-10 md:w-32 px-2 cursor-pointer"
                >
                    <img src="/icons/right.png" class="h-12 flex my-auto" @click="$refs.whyUsCarousel.next()" alt="" />
                </div>
                <div
                    v-scroll-reveal="{ delay: 800 }"
                    class="hidden md:absolute left-0 top-0 bottom-0 md:flex md:mt-10 h-full my-auto md:justify-end  w-10 md:w-32 px-2 cursor-pointer"
                >
                    <img
                        src="/icons/left.png"
                        class="h-12 flex my-auto"
                        @click="$refs.whyUsCarousel.previous()"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: '20+',
        };
    },

    computed: {
        title_1() {
            return this.$store.getters['lang/texts']['home']['why-us']['title_1'];
        },
        title_2() {
            return this.$store.getters['lang/texts']['home']['why-us']['title_2'];
        },
        text() {
            return this.$store.getters['lang/texts']['home']['why-us']['text'];
        },
        items() {
            return this.$store.getters['lang/texts']['home']['why-us']['items'];
        },
    },
};
</script>
<style lang="css">
@media (max-width: 768px) {
    .carousel-container {
        height: 28rem;
    }
}
@media (min-width: 768px) {
    .carousel-container {
        height: 18rem;
    }
}
</style>
