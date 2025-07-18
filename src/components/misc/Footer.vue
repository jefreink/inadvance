<template>
  <div id="footer" class="w-full bg-black  relative pt-12 md:pt-0">
    <div
      class="flex flex-col md:flex-row-reverse md:flex-nowrap md:justify-between container lg:px-12 md:mx-auto"
    >
      <div class="relative " style="height:42rem">
        <img
          src="/images/map_footer.png"
          class="h-full object-cover md:hidden pointer-events-none"
          alt=""
        />
        <img
          src="/images/map_footer_desktop.png"
          class="h-full object-fill hidden md:flex  pointer-events-none"
          alt=""
        />
        <div class="bottom-gradient md:hidden"></div>
      </div>
      <div
        v-scroll-reveal="{ delay: 700 }"
        class="z-50  px-4 md:px-0 mt-2 md:pt-12 "
      >
        <div class="md:hidden font-primary-light text-grey-light text-3xl">
          {{ title_mobile_1 }}
        </div>
        <div
          class=" md:hidden font-bold py-6 font-primary text-grey-light text-3xl"
        >
          {{ title_mobile_2 }}
        </div>
        <div class="hidden md:flex font-primary-light text-grey-light text-3xl">
          {{ title_desktop_1 }}
        </div>
        <div
          class="hidden md:flex font-bold  font-primary text-grey-light text-3xl"
        >
          {{ title_desktop_2 }}
        </div>
        <div class="flex flex-col md:grid md:grid-cols-2 md:gap-4">
          <div
            class="flex flex-col  text-grey-light py-6 md:pt-10"
            v-for="(item, index) in offices"
            :key="index"
          >
            <div class="font-primary-semibold text-lg">
              {{ item.country }}
            </div>
            <div class="font-primary-light text-base md:text-sm py-1">
              {{ item.address }}
            </div>
            <div class="font-primary-light text-base md:text-sm">
              {{ item.city }}
            </div>
            <div class="font-primary-light text-base md:text-sm py-1">
              {{ item.number }}
            </div>
          </div>
          <div class="py-6">
            <div class="font-bold font-primary text-grey-light text-xl">
              {{ contact }}
            </div>
            <a
              class="font-primary text-accent-alt-a text-base py-2"
              href="mailto:info@inadvancecg.com"
            >
              info@inadvancecg.com
            </a>
          </div>
          <div class="py-6">
            <div class="font-bold font-primary text-grey-light text-xl">
              {{ rrhh_1 }}
            </div>
            <div class="font-primary-light text-grey-light text-base">
              {{ rrhh_2 }}
            </div>
            <a
              class="font-primary text-accent-alt-a text-base py-2"
              href="mailto:rrhh@inadvancecg.com"
            >
              rrhh@inadvancecg.com
            </a>
          </div>
          <div
            class="md:hidden flex flex-col items-center justify-center py-20 "
          >
            <div>
              <img
                src="/images/logo.png"
                class="h-16 py-2 lg:transition duration-500"
                alt=""
              />
            </div>
            <div
              class="font-primary-light text-grey-light text-base text-center py-20"
            >
              {{ rights }}
            </div>
            <img
              @click="
                openLinkedin(
                  'https://www.linkedin.com/company/inadvance-consulting-group/'
                )
              "
              class="h-12 cursor-pointer"
              src="/icons/linkedin_icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <q-intersection once>
      <div
        style="background: #111111 0% 0% no-repeat padding-box;"
        class=" mx-auto w-full"
      >
        <div
          class="hidden md:flex flex-row items-center justify-between w-full container lg:px-12 mx-auto"
          v-scroll-reveal="{ delay: 300, distance: 0, reset: false }"
        >
          <div class="flex flex-row items-center justify-center">
            <div>
              <img
                src="/images/logo.png"
                class="h-16 py-2 lg:transition duration-500"
                alt=""
              />
            </div>
            <div
              class="font-primary-light text-grey-light text-base text-center py-16 mx-12"
            >
              {{ rights }}
            </div>
          </div>
          <img
            @click="
              openLinkedin(
                'https://www.linkedin.com/company/inadvance-consulting-group/'
              )
            "
            class="h-8 cursor-pointer"
            src="/icons/linkedin_icon.svg"
            alt=""
          />
        </div>
      </div>
    </q-intersection>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      offices: [
        {
          country: "Argentina",
          address: "Leandro N. Alem 1026, Piso 5;",
          city: "Buenos Aires, C1001AAS CABA, Argentina",
          number: "+54 9 11 4948 3842"
        },
        {
          country: "Colombia",
          address: "Carrera 13 # 90 – 17, Piso 2",
          city: "110221, Bogotá, Colombia",
          number: "+57 318 531 0735"
        },
        {
          country: "Chile",
          address: "Los Espinos 4090,",
          city: "RM Santiago de Chile",
          number: "+56 9 9739 8451"
        },
        {
          country: "Peru",
          address: "Jr. Loreto 205 Int 202,",
          city: "15024, La Molina, Lima",
          number: "+51 99 3482981"
        },
        {
          country: "USA",
          address: "1395 Brickell Ave STE 800",
          city: "Miami FL 33131 US",
          number: ""
        },
      ]
    };
  },
  methods: {
    openLinkedin(link) {
      window.open(link);
    }
  },
  computed: {
    title_desktop_1() {
      return this.$store.getters["lang/texts"]["footer"]["title_desktop_1"];
    },
    title_desktop_2() {
      return this.$store.getters["lang/texts"]["footer"]["title_desktop_2"];
    },
    title_mobile_1() {
      return this.$store.getters["lang/texts"]["footer"]["title_mobile_1"];
    },
    title_mobile_2() {
      return this.$store.getters["lang/texts"]["footer"]["title_mobile_2"];
    },
    contact() {
      return this.$store.getters["lang/texts"]["footer"]["contact"];
    },
    rrhh_1() {
      return this.$store.getters["lang/texts"]["footer"]["rrhh_1"];
    },
    rrhh_2() {
      return this.$store.getters["lang/texts"]["footer"]["rrhh_2"];
    },
    rights() {
      return this.$store.getters["lang/texts"]["footer"]["rights"];
    }
  }
};
</script>

<style lang="css" scoped>
.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 8%;
  /*    background: linear-gradient(
        180deg,
        #000000 50.44%,
        rgba(223, 219, 219, 0.049) 100%
    );*/
  background: transparent
    linear-gradient(180deg, #050011 0%, #050011e4 45%, #05001100 100%) 0% 0%
    no-repeat padding-box;
  background-blend-mode: multiply;
  transform: rotate(-180deg);
}

#footer {
  background: linear-gradient(
    90deg,
    rgb(1 0 23) 3%,
    rgb(2 1 14) 98%
  ) !important;
}
</style>
