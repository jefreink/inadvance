<template>
    <q-page class="flex flex-col bg-grey-light">
        <hero />
        <div class="flex flex-col container mx-auto px-8 lg:px-12">
            <pagination
                :storiesLength="stories.length"
                :perPage="perPage"
                :currentPage="currentPage"
                @changePage="changePage"
            />
            <div class="flex flex-col space-y-24">
                <success-stories-item
                    v-for="(item, index) in stories.slice(currentPage * perPage - perPage, currentPage * perPage)"
                    :key="`success-stories-item-${item.order}-${item.title}`"
                    :data="item"
                />
            </div>
            <pagination
                :storiesLength="stories.length"
                :perPage="perPage"
                :currentPage="currentPage"
                @changePage="changePage"
            />
        </div>
        <contact-footer />
    </q-page>
</template>

<script>
import Hero from '../components/success_stories/Hero.vue';
import Pagination from '../components/success_stories/Pagination.vue';
import SuccessStoriesItem from '../components/success_stories/SuccessStoriesItem.vue';
import ContactFooter from '../components/misc/Footer.vue';

export default {
    name: 'SuccessStories',
    components: {
        Hero,
        Pagination,
        SuccessStoriesItem,
        ContactFooter,
    },
    data() {
        return {
            currentPage: 1,
            perPage: 4,
        };
    },
    computed: {
        stories() {
            return this.$store.getters['lang/texts']['success-stories']['stories'];
        },
    },
    methods: {
        changePage(currentPage) {
            this.currentPage = currentPage;
            window.scrollTo({
                top: window.document.getElementById('success-stories-hero').scrollHeight,
                behavior: 'smooth',
            });
        },
    },
};
</script>
