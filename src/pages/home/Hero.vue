<template>
    <div id="inicio" class="overflow-hidden w-screen md:h-screen z-20">
        <section class="relative h-auto md:h-full w-full md:py-12 lg:py-0 ">
            <div
                id="hero-home"
                class=" flex flex-col flex-no-wrap w-full  lg:leading-none mx-auto h-full z-20  justify-between tracking-normal mt-auto px-4"
            >
                <div
                    class="flex flex-col h-screen md:flex-nowrap md:h-auto md:container lg:px-12 md:mx-auto items-center justify-center md:items-start mt-auto md:my-auto"
                >
                    <transition name="fade" mode="out-in">
                        <div
                            class="flex flex-col mx-auto h-auto justify-evenly "
                            key="hero-text-content"
                        >
                            <div v-html="hero_title"></div>
                        </div>
                    </transition>
                    <div
                        class="absolute md:left-0 md:right-0 container lg:px-12 mx-auto bottom-0 md:flex md:flex-row flex flex-col-reverse md:items-end md:justify-between w-full mb-6 md:mb-12"
                        v-scroll-reveal="{ delay: 500 }"
                    >
                        <div
                            class="flex flex-col mt-6 md:mt-0 ml-6 md:ml-0 md:w-1/3"
                        >
                            <div class="flex flex-row items-center mt-4">
                                <div class="flex flex-row items-center">
                                    <img src="/icons/office_icon.svg" alt="" />
                                    <div
                                        class="font-primary text-white font-bold ml-2 text-base"
                                        v-html="officesText"
                                    ></div>
                                </div>
                                <hr
                                    style="background-color:#Fafafa !important"
                                    class="w-5 text-primary h-0.5 mt-1 mx-6 border-none"
                                />
                            </div>
                            <div
                                class="flex flex-row font-primary-bold text-sm  text-white mt-2"
                            >
                                Argentina • Chile • Colombia • Perú • USA
                            </div>
                        </div>
                        <div
                            class="flex flex-1 w-full items-center justify-center mx-auto md:w-1/3"
                        >
                            <div
                                class="cursor-pointer"
                                v-scroll-to="{ el: '#who-we-are', offset: -50 }"
                            >
                                <div
                                    class="cursor-pointer lg:h-6 bounce-arrow hidden md:flex"
                                >
                                    <!-- prettier-ignore -->
                                    <svg width="24" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M32 1.80036C32 2.26114 31.8258 2.72191 31.4791 3.0729L17.2571 17.4722C16.562 18.1759 15.4385 18.1759 14.7434 17.4722L0.521326 3.0729C-0.173775 2.36913 -0.173775 1.23159 0.521326 0.527824C1.21643 -0.175941 2.33997 -0.175941 3.03507 0.527824L16.0002 13.6546L28.9654 0.527824C29.6605 -0.175941 30.784 -0.175941 31.4791 0.527824C31.8258 0.878806 32 1.33958 32 1.80036Z" fill="#fafafa"/> </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-row flex-nowrap w-full  items-center justify-center md:justify-end md:w-1/3"
                        >
                            <img
                                @click="moveToPage('#footer')"
                                src="/icons/email_icon.svg"
                                class="mr-4 cursor-pointer h-4"
                                alt=""
                            />
                            <img
                                @click="
                                    openLinkedin(
                                        'https://www.linkedin.com/company/inadvance-consulting-group/'
                                    )
                                "
                                src="/icons/linkedin_icon.svg"
                                class="ml-4 cursor-pointer h-6"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: "hero",
    methods: {
        moveToPage(id) {
            this.$scrollTo(id);
        },
        openLinkedin(link) {
            window.open(link);
        },
    },
    computed: {
        hero_title() {
            return this.$store.getters["lang/texts"]["home"]["hero"]["title"];
        },
        officesText() {
            return this.$store.getters["lang/texts"]["home"]["hero"]["offices"];
        },
    },
};
</script>

<style lang="css">
#inicio section {
    background-size: cover;
    background-position: 60% center;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-image: url("/images/hero_home.jpg");
}

.q-page-container {
    padding-top: 0% !important;
}

@media (max-width: 768px) {
    .text-hero {
        font-size: 32px;
    }
}

@media (min-width: 768px) {
    .text-hero {
        font-size: 40px;
    }
    #inicio section {
        background-image: url("/images/hero_home.jpg");
    }
}

.animated-arrow {
    animation: bounce 2s infinite;
}
@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}
</style>
