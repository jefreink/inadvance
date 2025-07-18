<template>
  <div id="what-we-do" class="w-full  bg-gray-100 px-4">
    <div class="flex flex-col container-fluid mx-auto lg:px-12">
      <div
        class="font-primary flex flex-col px-4 md:px-0 py-12 lg:py-32 w-full items-center lg:w-full lg:my-auto lg:ml-auto "
      >
        <div
          v-scroll-reveal="{ delay: 300 }"
          class=" text-secondary text-4xl lg:text-5xl pb-4 text-left lg:text-center w-full lg:max-w-full "
        >
          {{ title_1 }} <span class="font-primary-bold">{{ title_2 }}</span>
        </div>
        <div
          v-scroll-reveal="{ delay: 300 }"
          class="text-base text-primary w-full "
        >
          <p
            class=" mx-auto items-center lg:tracking-wide lg:leading-relaxed lg:font-black lg:justify-center text-left lg:text-center lg:my-6 "
            v-html="text_1"
          ></p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-y-1 lg:gap-8 py-4">
          <div
            v-scroll-reveal="{ delay: item.delay }"
            @click="$router.push('/what-we-do')"
            v-for="(item, index) in items"
            :key="index"
            class="md:flex md:my-auto"
          >
            <div
              style=""
              class="card-desktop  flex flex-col flex-nowrap items-center justify-center md:justify-around px-4 md:px-1 py-10 h-auto my-2 hover:bg-white hover:shadow-xl hover:rounded-2xl transition-all  duration-300 cursor-pointer lg:bg-transparent bg-white-important shadow-sm lg:shadow-none rounded-sm"
            >
              <img
                :src="item.icon"
                class="py-4 h-24 w-24 object-contain"
                alt=""
              />
              <div
                v-html="item.title"
                class="font-primary h-12 text-black font-black text-2xl pt-4 text-center my-auto card-title mt-auto"
              >
                {{ item.title }}
              </div>
              <div
                class="font-primary h-32 text-primary text-base text-center py-6 md:py-0 mt-auto lg:leading-relaxed select-none md:mb-auto md:px-6"
              >
                {{ item.text }}
              </div>
              <img src="/icons/arrow.svg" class="h-12 flex lg:hidden" alt="" />
            </div>
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
      return this.$store.getters["lang/texts"]["home"]["what-we-do-home"][
        "title_1"
      ];
    },
    title_2() {
      return this.$store.getters["lang/texts"]["home"]["what-we-do-home"][
        "title_2"
      ];
    },
    text_1() {
      return this.$store.getters["lang/texts"]["home"]["what-we-do-home"][
        "text_1"
      ];
    },
    items() {
      return this.$store.getters["lang/texts"]["home"]["what-we-do-home"][
        "items"
      ];
    }
  }
};
</script>

<style lang="css">
@media (max-width: 768px) {
  .bg-white-important {
    background-color: white !important;
  }
}
.bg-white-important-desktop {
  background-color: white !important;
}

@media (min-width: 768px) {
  .card-desktop {
    height: 32rem;
  }
  .card-title {
    transition: 0.2s !important;
  }
  .card-desktop:hover .card-title {
    color: #339ff1 !important;
  }
}
</style>
