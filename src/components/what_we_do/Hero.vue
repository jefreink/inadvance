<template>
    <div id="what-we-do-hero" class="text-grey-light">
        <div
            v-scroll-reveal="{ delay: 200 }"
            class="container mx-auto px-8 lg:px-20 flex flex-col justify-center text-center max-w-screen-xl pt-48 pb-32 lg:pt-40 lg:pb-24"
        >
            <h1 class="text-4xl lg:text-7xl">
                <span class="font-primary-light">{{ $store.getters['lang/texts']['what-we-do']['hero_title_1'] }}</span
                ><span class="font-primary-bold">{{ $store.getters['lang/texts']['what-we-do']['hero_title_2'] }}</span>
            </h1>
            <div
                class="mt-16 lg:mt-12 font-primary w-full text-lg lg:text-xl"
                v-html="$store.getters['lang/texts']['what-we-do']['hero_subtitle']"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    data() {
        return {};
    },
};
</script>

<style lang="css" scoped>
#what-we-do-hero {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-image: url('/images/what_we_do/hero_background_desktop_compressed.jpg');
}
</style>
