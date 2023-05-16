<template>
    <div
        id="they-trust-us"
        ref="theyTrustUs"
        class="w-full bg-gray-100 px-4 h-auto"
    >
        <div class="flex flex-col container md:mx-auto lg:px-12">
            <div
                class="font-primary flex flex-col px-4 py-12 md:py-20 w-full items-center md:w-full  md:ml-auto "
            >
                <div
                    v-scroll-reveal="{ delay: 300 }"
                    class=" text-secondary text-4xl md:text-5xl pb-4 md:pb-0 text-center w-full md:max-w-full "
                >
                    <div>
                        {{ title_1 }} <br class="md:hidden flex" />
                        <span class="font-primary-bold">{{ title_2 }}</span>
                    </div>
                    <div>
                        <q-intersection>
                            <q-carousel
                                v-model="slide"
                                transition-prev="jump-right"
                                transition-next="jump-left"
                                animated
                                padding
                                :autoplay="3500"
                                infinite
                                control-color="white"
                                prev-icon="arrow_left"
                                next-icon="arrow_right"
                                navigation-icon="stop_circle"
                                navigation
                                style="min-height: 1px;"
                                class="bg-transparent carousel-worked overflow-y-hidden"
                            >
                                <q-carousel-slide
                                    v-for="(slide,
                                    slideIndex) in slides.length / 5"
                                    :key="slideIndex"
                                    :name="slide"
                                    class="h-96"
                                >
                                    <div
                                        class="flex flex-col md:flex md:flex-row md:w-full md:justify-evenly items-center justify-center py-6"
                                    >
                                        <div
                                            class="my-6 w-auto"
                                            v-for="(item,
                                            index) in slides.slice(
                                                (slideIndex + 1) * 5 - 5,
                                                (slideIndex + 1) * 5
                                            )"
                                            :class="{
                                                'hidden h-0 w-0 m-0':
                                                    slideIndex == 6 &&
                                                    (index == 3 || index == 4),
                                            }"
                                        >
                                            <img
                                                :src="item"
                                                class="h-auto w-32 md:max-w-xs md:max-h-24 my-2 md:mx-auto pointer-events-none object-contain logos"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </q-carousel-slide>
                            </q-carousel>
                        </q-intersection>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slide: 1,
            autoplay: true,
        };
    },
    mounted() {
        this.$nextTick(() => {
            // this.autoplay = true;
        });
    },
    methods: {
        visibilityChanged() {
            this.autoplay = true;
        },
        logos(slideIndex) {
            return slides.slice((slideIndex + 1) * 5 - 5, (slideIndex + 1) * 5);
        },
    },
    computed: {
        title_1() {
            return this.$store.getters["lang/texts"]["home"][
                "our-people-worked"
            ]["title_1"];
        },
        title_2() {
            return this.$store.getters["lang/texts"]["home"][
                "our-people-worked"
            ]["title_2"];
        },
        slides() {
            return this.$store.getters["lang/texts"]["home"][
                "our-people-worked"
            ]["slides"];
        },
    },
};
</script>

<style lang="css">
.q-btn.q-btn-item.q-carousel__navigation-icon i.q-icon {
    border-radius: 100% !important;
    background: grey !important;
    color: grey !important;
}
.q-btn.q-btn-item.q-carousel__navigation-icon--active i.q-icon {
    background: #e81e79 !important;
    color: #e81e79 !important;
}

.q-carousel__navigation-icon--inactive.material-icons.q-icon.notranslate {
    color: red !important;
    background: red !important;
}

@media (min-width: 768px) {
    .carousel-worked {
        height: 15rem;
    }
}

@media (max-width: 768px) {
    .carousel-worked {
        height: 100%;
    }
}
</style>
