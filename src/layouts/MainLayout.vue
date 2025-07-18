<template>
  <q-layout
    view="lHh Lpr lFf"
    :key="`layout-lang-${$store.getters['lang/selected']}`"
  >
    <q-header
      :class="{
        'bg-black-important':
          (scrollPosition > 100 && $q.platform.is.mobile) || menuOpen,
        'bg-white-important-layout':
          scrollPosition > 100 && !$q.platform.is.mobile
      }"
      class="h-24 bg-transparent lg:transition duration-500"
    >
      <q-toolbar
        :class="{
          'bg-white': scrollPosition > 100
        }"
        class="h-20 bg-transparent border-b border-transparent lg:transition duration-500 px-0 py-4 md:py-2"
      >
        <div class="container mx-auto px-4 md:px-0 pt-6 bg-transparent">
          <div class="md:hidden flex flex-row items-center justify-between">
            <div
              @click="moveToPage('/', '#inicio')"
              class=" bg-transparent w-auto h-full flex items-center justify-center"
            >
              <div v-if="scrollPosition > 100">
                <img
                  src="/images/logo.png"
                  class="h-12 py-2 lg:transition duration-500"
                  alt=""
                />
              </div>
              <div v-else>
                <img src="/images/logo.png" class="h-12" alt="" />
              </div>
            </div>
            <button
              @click="menuOpen = !menuOpen"
              class=" z-50 p-2 text-white block hamburger hamburger--spin outline-none focus:outline-none"
              type="button"
              :class="{ 'is-active': menuOpen }"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner hamburger-not-about"></span>
              </span>
            </button>
            <div
              :class="{ closed: !menuOpen }"
              style="margin-top:5.5rem;"
              class="fixed h-screen inset-0 z-10"
              @click="menuOpen = false"
            >
              <div class="flex w-full">
                <div
                  style="background-color:black !important; transition: opacity 0.2s ease-in, height 0ms ease-out;"
                  class="rounded-menu flex flex-col w-full  h-screen justify-start items-center border-black border-t"
                >
                  <div
                    class="flex flex-col text-center items-center justify-center my-8 md:my-12"
                  >
                    <div
                      class="flex flex-row text-2xl md:text-3xl py-3 md:py-4"
                    >
                      <div
                        @click="setLang('en')"
                        class="font-primary text-white font-bold"
                        :class="{
                          'font-primary-bold':
                            $store.getters['lang/selected'] == 'en',
                          'font-primary-light':
                            $store.getters['lang/selected'] != 'en'
                        }"
                      >
                        EN
                      </div>
                      <div class="font-primary text-white px-1 font-bold">
                        /
                      </div>
                      <div
                        @click="setLang('es')"
                        class="font-primary text-white opacity-1"
                        :class="{
                          'font-primary-bold':
                            $store.getters['lang/selected'] == 'es',
                          'font-primary-light':
                            $store.getters['lang/selected'] != 'es'
                        }"
                      >
                        ES
                      </div>
                    </div>
                    <div
                      class="flex font-primary text-white tracking-wide font-bold text-3xl md:text-4xl py-3 md:py-4 cursor-pointer hover-text-primary hover-font-primary-bold"
                      @click="$router.push('/what-we-do'), closeMenu()"
                    >
                      {{ $store.getters["lang/texts"]["navbar"]["what-we-do"] }}
                    </div>
                    <div
                      class="flex font-primary text-white tracking-wide font-bold text-3xl md:text-4xl py-3 md:py-4 cursor-pointer hover-text-primary hover-font-primary-bold"
                      @click="moveToPage('/', '#why-us')"
                    >
                      {{ $store.getters["lang/texts"]["navbar"]["why-us"] }}
                    </div>
                    <div
                      class="flex font-primary text-white tracking-wide font-bold text-3xl md:text-4xl py-3 md:py-4 cursor-pointer hover-text-primary hover-font-primary-bold"
                      @click="moveToPage('/', '#they-trust-us')"
                    >
                      {{
                        $store.getters["lang/texts"]["navbar"]["they-trust-us"]
                      }}
                    </div>
                    <div
                      class="flex font-primary text-white tracking-wide font-bold text-3xl md:text-4xl py-3 md:py-4 cursor-pointer hover-text-primary hover-font-primary-bold"
                      @click="$router.push('/success-stories'), closeMenu()"
                    >
                      {{
                        $store.getters["lang/texts"]["navbar"][
                          "success-stories"
                        ]
                      }}
                    </div>
                    <div
                      class="flex font-primary text-white tracking-wide font-bold text-3xl md:text-4xl py-3 md:py-4 cursor-pointer hover-text-primary hover-font-primary-bold"
                      @click="scrollToFooter()"
                    >
                      {{ $store.getters["lang/texts"]["navbar"]["contact-us"] }}
                    </div>
                    <div
                      class="flex flex-row flex-nowrap w-32 items-center justify-around pt-12"
                    >
                      <img
                        @click="scrollToFooter()"
                        src="/icons/email_icon.svg"
                        alt=""
                      />
                      <img
                        @click="
                          openLinkedin(
                            'https://www.linkedin.com/company/inadvance-consulting-group/'
                          )
                        "
                        class="h-8"
                        src="/icons/linkedin_icon.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden md:flex md:container lg:px-12 flex-row items-center w-full py-3 justify-between"
          >
            <div
              class="w-full flex flex-row flex-no-wrap items-center justify-between"
            >
              <router-link to="/" @click.native="moveToPage('/', '#inicio')">
                <div v-if="scrollPosition > 100 && !$q.platform.is.mobile">
                  <img
                    src="/images/logo_color.png"
                    class="h-14 pr-2 lg:transition duration-500"
                    alt=""
                  />
                </div>
                <div v-else>
                  <img
                    src="/images/logo.png"
                    class="h-16 py-2 lg:transition duration-500"
                    alt=""
                  />
                </div>
              </router-link>
              <div class="flex flex-row items-center text-base justify-between">
                <div
                  :class="{
                    'text-sticky items-navbar-scroll': scrollPosition > 100
                  }"
                  class="flex font-primary text-grey-light font-light px-4  cursor-pointer items-navbar transition-all duration-200"
                  @click="$router.push('/what-we-do'), closeMenu()"
                >
                  {{ $store.getters["lang/texts"]["navbar"]["what-we-do"] }}
                </div>
                <div
                  :class="{
                    'text-sticky items-navbar-scroll': scrollPosition > 100
                  }"
                  class="flex font-primary text-grey-light font-light px-4  cursor-pointer items-navbar transition-all duration-200"
                  @click="moveToPage('/', '#why-us')"
                >
                  {{ $store.getters["lang/texts"]["navbar"]["why-us"] }}
                </div>
                <!-- <div
                  :class="{
                    'text-sticky items-navbar-scroll': scrollPosition > 100
                  }"
                  class="flex font-primary text-grey-light font-light px-4  cursor-pointer items-navbar transition-all duration-200"
                  @click="moveToPage('/', '#they-trust-us')"
                >
                  {{ $store.getters["lang/texts"]["navbar"]["they-trust-us"] }}
                </div> -->
                <div
                  :class="{
                    'text-sticky items-navbar-scroll': scrollPosition > 100
                  }"
                  class="flex font-primary text-grey-light font-light px-4  cursor-pointer items-navbar transition-all duration-200"
                  @click="$router.push('/success-stories'), closeMenu()"
                >
                  {{
                    $store.getters["lang/texts"]["navbar"]["success-stories"]
                  }}
                </div>
                <div
                  :class="{
                    'text-sticky items-navbar-scroll': scrollPosition > 100
                  }"
                  class="flex font-primary text-grey-light font-light px-4  cursor-pointer items-navbar transition-all duration-200"
                  @click="scrollToFooter()"
                >
                  {{ $store.getters["lang/texts"]["navbar"]["contact-us"] }}
                </div>
                <div class="flex flex-row pl-16 ">
                  <div
                    @click="setLang('en')"
                    class="text-grey-light  w-5 text-right cursor-pointer hover:opacity-75 transition duration-200"
                    :class="{
                      'font-primary-bold':
                        $store.getters['lang/selected'] == 'en',
                      'font-primary-light':
                        $store.getters['lang/selected'] != 'en',
                      'text-sticky items-navbar-scroll': scrollPosition > 100
                    }"
                  >
                    EN
                  </div>
                  <div
                    :class="{
                      'text-black': scrollPosition > 100
                    }"
                    class="font-primary  text-grey-light px-1 font-bold"
                  >
                    /
                  </div>
                  <div
                    @click="setLang('es')"
                    class="text-grey-light  w-5 text-left cursor-pointer hover:opacity-75 transition duration-200"
                    :class="{
                      'font-primary-bold':
                        $store.getters['lang/selected'] == 'es',
                      'font-primary-light':
                        $store.getters['lang/selected'] != 'es',
                      'text-black': scrollPosition > 100
                    }"
                  >
                    ES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-blue-500">
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { debounce } from "quasar";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      scrollPosition: 0,
      menuOpen: false,
      lang: this.$store.getters["lang/selected"]
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: debounce(function(event) {
      this.scrollPosition = window.pageYOffset;
    }, 100),
    closeMenu() {
      this.menuOpen = false;
    },
    scrollToFooter() {
      this.$scrollTo("#footer", { offset: -50 });
    },
    moveToPage(url, id) {
      if (this.$route.name == "home") {
        this.$scrollTo(id, { offset: -50 });
        this.menuOpen = false;
      } else {
        this.$router.push(url);
        this.$nextTick(() => {
          this.$scrollTo(id, { offset: -50 });
        });
        this.menuOpen = false;
      }
    },
    setLang(lang) {
      this.$store.commit("lang/setSelectedLang", lang);
    },
    openLinkedin(link) {
      window.open(link);
    }
  }
};
</script>

<style lang="css">
.q-page-container {
  padding-top: 0% !important;
  outline: none !important;
}

.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row
  i {
  font-size: 1.2em !important;
}

.q-carousel__navigation.q-btn {
  padding: 0 !important;
}

.logos {
  -webkit-filter: grayscale(100%) !important; /* Safari 6.0 - 9.0 */
  filter: grayscale(100%) !important;
}

@media (min-width: 640px) {
  .sm\:flex {
    display: flex !important;
  }
}

@media (min-width: 768px) {
  .md\:flex {
    display: flex !important;
  }
}

@media (min-width: 768px) {
  .items-navbar:hover {
    text-shadow: -0.1px 0 white, 0.18px 0 white !important;
  }
  .items-navbar {
    transition-duration: 150ms !important;
  }
}
@media (min-width: 768px) {
  .items-navbar-scroll:hover {
    text-shadow: -0.06px 0 black, 0.06px 0 black !important;
  }
  .items-navbar {
    transition-duration: 150ms !important;
  }
}

.bg-black-important {
  background-color: black !important;
}

.bg-white-important-layout {
  background-color: white !important;
}
.bg-transparent-important {
  background-color: transparent !important;
}

.text-sticky {
  color: #666666 !important;
}

.bounce-arrow {
  padding: 10px;
  transform-origin: bottom;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

<style scoped lang="sass">


.closed
    pointer-events: none
    background: transperent
    .rounded-menu
        width: 500px !important
        height: 500px !important
        opacity: 0
.rounded-menu
    @media (min-width: 1024px)
        transition: all 1s
        width: 600px
        height: 600px
        opacity: 1
/*!
 * Hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger
    cursor: pointer
    transition-property: opacity, filter
    transition-duration: 0.15s
    transition-timing-function: linear
    font: inherit
    color: inherit
    text-transform: none
    border: 0
    margin: 0
    overflow: visible
    border-radius: 100%
.hamburger:hover
    opacity: 1
.hamburger.is-active:hover
    opacity: 1
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after
    background-color: white
    @media (min-width: 1024px)
        background-color: white
.hamburger-box
    width: 25px
    height: 16px
    display: inline-block
    position: relative
    top: 3px
    left: 2px
.hamburger-inner
    display: block
    top: 50%
    margin-top: -2px
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
    width: 22px
    height: 2px
    border-radius: 4px
    position: absolute
    transition-property: transform
    transition-duration: 0.15s
    transition-timing-function: ease
.hamburger-about, .hamburger-about::before, .hamburger-about::after
    background-color: white
.hamburger-not-about, .hamburger-not-about::before, .hamburger-not-about::after
    background-color: white

.hamburger-inner::before, .hamburger-inner::after
    content: ""
    display: block
.hamburger-inner::before
    top: -7px
.hamburger-inner::after
    bottom: -7px
.hamburger--spin .hamburger-inner
    transition-duration: 0.22s
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)
.hamburger--spin .hamburger-inner::before
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in
.hamburger--spin .hamburger-inner::after
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)
.hamburger--spin.is-active .hamburger-inner
    transform: rotate(225deg)
    transition-delay: 0.12s
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
.hamburger--spin.is-active .hamburger-inner::before
    top: 0
    opacity: 0
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out
.hamburger--spin.is-active .hamburger-inner::after
    bottom: 0
    transform: rotate(-90deg)
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)
</style>
