<template>
    <div :class="data.reverse ? 'bg-grey-light' : 'bg-white'">
        <div
            class="flex flex-col-reverse items-center lg:items-start  pt-20 lg:py-32 container mx-auto px-0 lg:px-12"
            :class="data.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
            v-scroll-reveal="{ delay: 500 }"
        >
            <div class="flex flex-1 mt-16 lg:mt-0 w-full">
                <img
                    :src="data.img_url"
                    alt="item image"
                    class="w-full h-full object-contain"
                />
            </div>
            <div
                class="flex flex-1 flex-col text-grey-dark text-base font-primary px-8 lg:px-0"
                :class="
                    data.reverse ? 'lg:pr-24 xl:pr-32' : 'lg:pl-24 xl:pl-32'
                "
            >
                <div class="">
                    <img
                        :src="data.icon_url"
                        alt="item icon"
                        class="h-14 w-14 object-contain"
                    />
                </div>
                <h2
                    v-html="data.title"
                    class="mt-5 font-primary-bold text-grey-darkest text-4xl lg:text-5xl"
                ></h2>
                <p v-html="data.description" class="mt-5"></p>
                <ul class="mt-5 lg:mt-10">
                    <li
                        v-for="(bullet, index) in data.bullets"
                        :key="`item-bullet-${data.title}-${index}`"
                        class="mt-3 relative inline-flex"
                    >
                        <span class="mt-1 text-accent-alt-b">
                            <!-- prettier-ignore -->
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                        <span v-html="bullet" class="pl-4 lg:pl-4"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WhatWeDoItem",
    props: ["data"],
    data() {
        return {};
    },
};
</script>

<style lang="css" scoped></style>
