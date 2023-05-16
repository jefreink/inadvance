<template>
    <div class="w-full  bg-white px-4">
        <div class="flex flex-col container lg:px-12 md:mx-auto">
            <div class="font-primary flex flex-col px-4 py-12 md:py-32 w-full items-center md:w-full  md:ml-auto ">
                <div
                    v-scroll-reveal="{ delay: 300 }"
                    class=" text-secondary text-4xl md:text-5xl pb-4 text-center w-full md:max-w-full "
                >
                    {{ title_1 }} <span class="font-primary-bold">{{ title_2 }}</span>
                </div>
                <div class="flex flex-col grid-content md:py-12 md:w-full items-center justify-center">
                    <div
                        v-for="(member, index) in members"
                        v-scroll-reveal="{ delay: member.delay }"
                        :key="index"
                        class="flex flex-col  items-center justify-center my-6 box select-none"
                    >
                        <div class="content">
                            <div class="content-overlay"></div>

                            <q-img
                                transition="flip"
                                class="content-image object-cover rounded-full shadow-sm h-36 w-36"
                                :src="member.image"
                            />
                            <div
                                @click="openLinkedInProfile(member.linkedin)"
                                class="content-details cursor-pointer fadeIn-left"
                            >
                                <div class="flex flex-col justify-center items-center w-full">
                                    <img class="h-8" src="/icons/linkedin_icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center mt-4">
                            <div class="font-primary-bold text-base lg:pt-2">
                                {{ member.name }}
                            </div>
                            <div class="font-primary text-base py-0.5">
                                {{ member.charge }}
                            </div>
                            <div class="font-primary text-base">
                                {{ member.region }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        openLinkedInProfile(url) {
            window.open(url, '_blank');
        },
    },
    computed: {
        title_1() {
            return this.$store.getters['lang/texts']['home']['executive_team']['title_1'];
        },
        title_2() {
            return this.$store.getters['lang/texts']['home']['executive_team']['title_2'];
        },
        members() {
            return this.$store.getters['lang/texts']['home']['executive_team']['members'];
        },
    },
};
</script>

<style lang="css">
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.main-title {
    color: #2d2d2d;
    text-align: center;
    text-transform: capitalize;
    padding: 0.7em 0;
}

.container-img-desktop .title {
    color: #1a1a1a;
    text-align: center;
}
@media (min-width: 1024px) {
    .content {
        height: 9rem !important;
    }
}
@media (max-width: 1024px) {
    .content {
        height: 9rem !important;
    }
}
.content {
    position: relative;
    border-radius: 9999px;
    width: 9rem;
    height: 9rem;
    margin: auto;
    overflow: hidden;
    transition: all;
    transition-duration: 0.4s;
}

.content.hide-grid-item {
    height: 0 !important;
}

.content .content-overlay {
    background: rgba(232, 30, 121, 0.51);
    cursor: pointer;
    border-radius: 9999px;
    position: absolute;
    height: 9rem;
    width: 9rem;
    left: 0;
    top: 0;
    z-index: 10;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
    opacity: 1;
}

.content-details {
    position: absolute;
    text-align: left;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    z-index: 50;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
    top: 50%;
    left: 50%;
    opacity: 1;
}

.content:hover .content-image {
    filter: blur(2px);
}

.fadeIn-left {
    left: 50%;
}

@media (min-width: 768px) {
    .grid-content {
        display: grid !important;
        grid-gap: 0 6.5rem !important;
        grid-template-rows: repeat(4, minmax(0, 1fr)) !important;
        grid-template-areas:
            'empt box1 box1 box2 box2 box3 box3 emp2'
            'box4 box4 box5 box5 box6 box6 box7 box7' !important;
        grid-template-rows: 1fr 1fr !important;
    }
    .grid-content .box:nth-child(1) {
        grid-area: box1;
    }

    .grid-content .box:nth-child(2) {
        grid-area: box2;
    }

    .grid-content .box:nth-child(3) {
        grid-area: box3;
    }

    .grid-content .box:nth-child(4) {
        grid-area: box4;
    }

    .grid-content .box:nth-child(5) {
        grid-area: box5;
    }

    .grid-content .box:nth-child(6) {
        grid-area: box6;
    }

    .grid-content .box:nth-child(7) {
        grid-area: box7;
    }
}
</style>
