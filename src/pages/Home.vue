<template>
    <q-page class="flex flex-center">
        <Hero />
        <who-we-are />
        <what-we-do />
        <why-us />
        <our-people-work-with />
        <executive-team />
        <success-stories />
        <our-partners />
        <contact-footer />
    </q-page>
</template>

<script>
import Hero from "./home/Hero.vue";
import OurPeopleWorkWith from "./home/OurPeopleWorkWith.vue";
import WhatWeDo from "./home/WhatWeDo.vue";
import WhoWeAre from "./home/WhoWeAre.vue";
import WhyUs from "./home/WhyUs.vue";
import ExecutiveTeam from "./home/ExecutiveTeam.vue";
import SuccessStories from "./home/SuccessStories.vue";
import OurPartners from "./home/OurPartners.vue";
import ContactFooter from "src/components/misc/Footer.vue";

export default {
    components: {
        Hero,
        WhoWeAre,
        WhatWeDo,
        WhyUs,
        OurPeopleWorkWith,
        ExecutiveTeam,
        SuccessStories,
        OurPartners,
        ContactFooter,
    },
    name: "Home",
};
</script>
