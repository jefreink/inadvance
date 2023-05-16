<template>
    <div id="success-stories-home" class="w-full bg-gray-100 ">
        <div class="flex flex-col container md:mx-auto">
            <div
                class="font-primary flex flex-col py-12 md:py-20 w-full items-center md:w-full"
            >
                <div
                    v-scroll-reveal="{ delay: 300 }"
                    class=" text-secondary text-4xl md:text-5xl pb-4 md:pb-0 text-center w-full md:max-w-full "
                >
                    {{ title_1 }}
                    <span class="font-primary-bold">{{ title_2 }}</span>
                </div>
                <q-carousel
                    v-model="slide"
                    transition-prev="jump-right"
                    transition-next="jump-left"
                    animated
                    padding
                    control-color="primary"
                    prev-icon="img:/icons/arrow-pagination-left.svg"
                    next-icon="img:/icons/arrow-pagination-right.svg"
                    :arrows="!$q.platform.is.mobile"
                    navigation-icon="stop_circle"
                    navigation
                    class="bg-transparent px-0 carousel-stories"
                    v-scroll-reveal="{ delay: 500 }"
                >
                    <q-carousel-slide
                        v-for="(slide, slideIndex) in stories.length / 4"
                        :key="slideIndex"
                        :name="slideIndex"
                        class=""
                    >
                        <div
                            class="grid grid-cols-1 h-full md:h-auto md:grid-cols-4 flex-nowrap items-start justify-center py-12 md:p-12"
                        >
                            <div
                                class="m-2 md:h-full md:mt-6 mx-1 w-auto cursor-pointer flex flex-col max-w-xs md:max-w-none"
                                v-for="(item, index) in stories.slice(
                                    (slideIndex + 1) * 4 - 4,
                                    (slideIndex + 1) * 4
                                )"
                                @click="$router.push('/success-stories')"
                            >
                                <div class="">
                                    <div class="img-hover-zoom">
                                        <img
                                            :src="item.img_url"
                                            class="h-72 md:h-48 object-cover w-full"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="font-primary font-bold text-lg text-grey-darkest py-4 leading-snug"
                                    >
                                        {{ checkTitle(item.title) }}
                                    </div>
                                    <div
                                        class="font-primary text-primary font- text-base"
                                    >
                                        {{ checkText(item.text) }}
                                    </div>
                                    <div
                                        class="flex flex-row items-center py-6 cursor-pointer"
                                    >
                                        <div
                                            id="read-more"
                                            class="font-primary text-accent text-base font-bold"
                                        >
                                            Read more
                                        </div>
                                        <q-icon
                                            name="east"
                                            color="accent"
                                            class="px-3 hover:pl-6 pt-0.5"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
        };
    },
    methods: {
        checkText(text) {
            return text.length > 60 ? text.substring(0, 100) + " ..." : text;
        },
        checkTitle(title) {
            return title.length > 60 ? title.substring(0, 100) + " ..." : title;
        },
    },
    computed: {
        title_1() {
            return this.$store.getters["lang/texts"]["home"][
                "success_stories_home"
            ]["title_1"];
        },
        title_2() {
            return this.$store.getters["lang/texts"]["home"][
                "success_stories_home"
            ]["title_2"];
        },
        stories() {
            return this.$store.getters["lang/texts"]["home"][
                "success_stories_home"
            ]["stories"];
        },
    },
};
</script>

<style lang="css">
#success-stories-home .q-carousel__slide {
    padding: 0% !important;
}
#success-stories-home .q-btn__content.q-anchor--skip i {
    /* font-size: 32em; */
}

@media (min-width: 768px) {
    .carousel-stories {
        height: 38rem;
    }
    .img-hover-zoom {
        height: auto; /* [1.1] Set it as per your need */
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    }

    /* [2] Transition property for smooth transformation of images */
    .img-hover-zoom img {
        transition: transform 0.5s ease;
    }

    /* [3] Finally, transforming the image when container gets hovered */
    .img-hover-zoom:hover img {
        transform: scale(1.1);
    }
}

@media (max-width: 768px) {
    .carousel-stories {
        height: 100%;
    }
}

#read-more {
    transition: 0.2s !important;
}
#read-more:hover {
    padding-right: 10px;
}
</style>
