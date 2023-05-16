<template>
    <div
        class="flex flex-row items-center space-x-2 md:space-x-4 py-20 lg:py-24 mx-auto text-grey-darkest select-none"
    >
        <div
            class="cursor-pointer hidden md:flex pr-4 hover:opacity-75 transition duration-200"
            @click="prevPage"
        >
            <!-- prettier-ignore -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg>
        </div>
        <div
            v-for="i in totalPages"
            class="font-primary-semibold text-xl w-10 h-10 md:w-14 md:h-14 border-2 rounded-2xl flex items-center justify-center cursor-pointer hover:opacity-75 transition duration-200"
            :class="[
                currentPage == i
                    ? 'border-accent text-accent'
                    : 'border-transparent text-grey-darkest',
            ]"
            @click="changePage(i)"
        >
            {{ i }}
        </div>
        <div
            class="cursor-pointer hidden md:flex pl-4 hover:opacity-75 transition duration-200"
            @click="nextPage"
        >
            <!-- prettier-ignore -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["storiesLength", "perPage", "currentPage"],
    data() {
        return {};
    },
    computed: {
        totalPages() {
            return (
                Math.floor(Number(this.storiesLength) / Number(this.perPage)) +
                1
            );
        },
    },
    methods: {
        changePage(pageNumber) {
            this.$emit("changePage", pageNumber);
        },
        prevPage() {
            if (this.currentPage > 1) this.changePage(this.currentPage - 1);
        },
        nextPage() {
            if (this.currentPage < this.totalPages)
                this.changePage(this.currentPage + 1);
        },
    },
};
</script>

<style lang="css" scoped></style>
