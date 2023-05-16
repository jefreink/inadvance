<template>
    <q-page class="">
        <hero />
        <div class="flex flex-col ">
            <what-we-do-item
                v-for="(item, index) in what_we_do_items"
                :key="`what-we-do-item-${index}`"
                :data="item"
            />
        </div>
        <contact-footer />
    </q-page>
</template>

<script>
import Hero from "../components/what_we_do/Hero.vue";
import WhatWeDoItem from "../components/what_we_do/WhatWeDoItem.vue";
import ContactFooter from "../components/misc/Footer.vue";

export default {
    name: "WhatWeDo",
    components: {
        Hero,
        WhatWeDoItem,
        ContactFooter,
    },
    data() {
        return {};
    },
    computed: {
        what_we_do_items() {
            return this.$store.getters["lang/texts"]["what-we-do"]["items"];
        },
    },
};
</script>
