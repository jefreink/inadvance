<template>
    <div id="who-we-are" class="relative w-screen">
        <div class="flex flex-col md:flex-row md:flex-nowrap  md:w-full">
            <img
                src="/images/home/who_we_are.jpg"
                class="h-96 md:h-full object-cover object-left md:absolute md:left-0 md:w-1/2"
            />
            <div
                v-scroll-reveal="{ delay: 300 }"
                class="font-primary flex flex-col px-4 py-12 md:py-28 w-full items-center md:w-1/2  md:ml-auto md:pl-16 "
            >
                <div class=" text-secondary text-4xl md:text-5xl pb-4 text-left w-full max-w-xs md:max-w-full ">
                    {{ title_1 }} <span class="font-primary-bold">{{ title_2 }}</span>
                </div>
                <div class="text-base text-primary font-primary w-full md:py-6">
                    <div class="max-w-xs flex mx-auto md:mx-0 md:max-w-xl">
                        {{ text_1 }}
                    </div>
                    <br />
                    <div class="max-w-xs flex mx-auto md:mx-0 md:max-w-xl">
                        {{ text_2 }}
                    </div>
                    <br />
                    <div class="max-w-xs flex mx-auto md:mx-0 md:max-w-xl">
                        {{ text_3 }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        title_1() {
            return this.$store.getters['lang/texts']['home']['who-we-are']['title_1'];
        },
        title_2() {
            return this.$store.getters['lang/texts']['home']['who-we-are']['title_2'];
        },
        text_1() {
            return this.$store.getters['lang/texts']['home']['who-we-are']['text_1'];
        },
        text_2() {
            return this.$store.getters['lang/texts']['home']['who-we-are']['text_2'];
        },
        text_3() {
            return this.$store.getters['lang/texts']['home']['who-we-are']['text_3'];
        },
    },
};
</script>
