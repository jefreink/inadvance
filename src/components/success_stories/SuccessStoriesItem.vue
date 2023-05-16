<template>
    <div
        v-scroll-reveal="{ delay: 500 }"
        class="grid grid-cols-1 lg:grid-cols-2"
    >
        <div class="flex">
            <img
                :src="data.img_url"
                alt="story image"
                class="lg:pr-20 h-72 md:h-96 md:w-full object-cover object-center"
            />
        </div>
        <div class="flex flex-col mt-8 lg:mt-0">
            <h3
                v-html="data.heading"
                class="text-base text-accent-alt-a font-primary-bold leading-normal"
            ></h3>
            <h2
                v-html="data.title"
                class="mt-2 text-3xl text-grey-darkest font-primary-bold leading-none w-10/12"
            ></h2>
            <div class="flex flex-col space-y-7 mt-4">
                <div
                    v-for="(section, index) in data.sections"
                    :key="`section-${index}-${section.title}`"
                >
                    <h4
                        v-html="section.title"
                        class="text-base text-secondary font-primary-bold leading-normal"
                    ></h4>
                    <p
                        v-html="section.text"
                        class="text-base text-secondary font-primary leading-normal"
                    ></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuccessStoriesItem",
    props: ["data"],
    data() {
        return {};
    },
};
</script>

<style lang="css" scoped></style>
