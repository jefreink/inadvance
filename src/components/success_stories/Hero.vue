<template>
    <div id="success-stories-hero" class="text-grey-light">
        <div
            class="container mx-auto px-8 lg:px:24 flex flex-col justify-center text-center max-w-screen-lg pt-48 pb-32 lg:pt-56 lg:pb-44"
            v-scroll-reveal="{ delay: 200 }"
        >
            <h1 class="text-4xl lg:text-7xl">
                <span class="font-primary">{{
                    $store.getters["lang/texts"]["success-stories"]["hero_1"]
                }}</span
                ><span class="font-primary-bold">{{
                    $store.getters["lang/texts"]["success-stories"]["hero_2"]
                }}</span>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero",
    data() {
        return {};
    },
};
</script>

<style lang="css" scoped>
#success-stories-hero {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-image: url("/images/success_stories/hero_background_compressed.jpg");
}
</style>
