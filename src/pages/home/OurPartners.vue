<template>
  <div class="w-full bg-gray-100 px-4">
    <div class="flex flex-col container md:mx-auto lg:px-12">
      <div
        class="font-primary flex flex-col px-4 py-12 md:py-20 w-full items-center md:w-full  md:ml-auto "
      >
        <div
          class=" text-secondary text-4xl md:text-5xl pb-4 text-center w-full md:max-w-full "
        >
          <div v-scroll-reveal="{ delay: 500 }">
            {{ title_1 }} <span class="font-primary-bold">{{ title_2 }}</span>
          </div>
          <q-carousel
            v-model="slide"
            transition-prev="jump-right"
            transition-next="jump-left"
            animated
            padding
            control-color="white"
            prev-icon="arrow_left"
            next-icon="arrow_right"
            navigation-icon="stop_circle"
            :navigation="slides.length > 7"
            class="bg-transparent carousel-partners"
            v-scroll-reveal="{ delay: 500 }"
          >
            <q-carousel-slide
              v-for="(slide, slideIndex) in slides.length / 7"
              :key="slideIndex"
              :name="slideIndex"
              class="pointer-events-none"
            >
              <div
                class="flex flex-col md:flex md:flex-row md:w-full md:flex-nowrap md:justify-between items-center justify-center py-6 "
              >
                <div
                  class="my-6 w-auto max-w-xs "
                  v-for="(item, index) in slides.slice(
                    (slideIndex + 1) * 7 - 7,
                    (slideIndex + 1) * 7
                  )"
                  :key="index"
                >
                  <div class="md:h-32 md:my-auto md:flex">
                    <img
                      :src="item"
                      class="h-auto w-32 md:max-w-xs  my-2 md:mx-auto object-contain md:max-h-24 logos"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0
    };
  },
  computed: {
    title_1() {
      return this.$store.getters["lang/texts"]["home"]["our_partners"][
        "title_1"
      ];
    },
    title_2() {
      return this.$store.getters["lang/texts"]["home"]["our_partners"][
        "title_2"
      ];
    },
    slides() {
      return this.$store.getters["lang/texts"]["home"]["our_partners"][
        "slides"
      ];
    }
  }
};
</script>

<style lang="css">
.q-btn.q-btn-item.q-carousel__navigation-icon i.q-icon {
  border-radius: 100% !important;
  background: grey !important;
  color: grey !important;
}
.q-btn.q-btn-item.q-carousel__navigation-icon--active i.q-icon {
  background: #e81e79 !important;
  color: #e81e79 !important;
}

.q-carousel__navigation-icon--inactive.material-icons.q-icon.notranslate {
  color: red !important;
  background: red !important;
}

.q-carousel__slide {
  padding: 0;
}

@media (min-width: 768px) {
  .carousel-partners {
    height: 15rem;
  }
}

@media (max-width: 768px) {
  .carousel-partners {
    height: 100%;
  }
}
</style>
