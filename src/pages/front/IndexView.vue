<template>
  <section class="fade-in">
    <div class="mx-auto mt-12 mb-[100px] grid max-w-[1260px] md:grid-cols-2 gap-x-4 px-10">
      <div class="overflow-hidden hidden md:block shadow-md">
        <swiper
          :effect="'fade'"
          :loop="true"
          :pagination="true"
          :modules="modules"
          :autoplay="{
            delay: 3500,
          }"
          class="mySwiper"
        >
          <swiper-slide
            v-for="img in swiperImgUrlArray"
            class="bg-center bg-cover bg-no-repeat"
            :style="{
              backgroundImage: `url(${img})`
            }"
          ></swiper-slide>
        </swiper>
      </div>
      <div class="flex flex-col overflow-hidden rounded px-6 pt-8 tracking-wider text-stone-900">
        <h2 class="font-display border-1 tracking-in-expand mb-1 border-b pb-1 text-3xl">KADO KADO</h2>
        <p class="tracking-in-expand mb-5 font-medium">最懂你肌膚的手工香皂</p>
        <article class="flex flex-col tracking-widest md:text-base text-lg">
          <p class="mb-3">
            2012年，為打造天然、不傷膚質的手工香皂，我們決定引入歐洲最優質的天然植物。進口的天然植物
            #品質優良，我們擁有維護天然植物品質的 #高規格運輸鏈。使用優質天然植物萃取最純淨的天然精油。
          </p>
          <p class="mb-3">採用歐盟官方認證有機作物，追求人類與大自然生態的平衡。而品質把關與永續經營，是我們品牌追求的理念。</p>
          <RouterLink
            to="/about"
            class="mr-auto mt-7 mb-7 flex h-[40px] w-[160px] items-center justify-center rounded border-2 border-yellow-800 text-white bg-yellow-800 hover:bg-yellow-900 focus:ring focus:ring-yellow-400 focus:ring-offset-0"
          >
            瞭解更多
            <heroicons-outline-chevron-right class="mt-[2px]" />
          </RouterLink>
        </article>
        <div class="mt-auto h-[260px] hidden md:block">
          <img
            class="fade-in h-full w-full object-cover"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645169595011.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aXSYASIbfIUsB3Rr4e%2FDK01S7U7lMN7ILaB%2FVaaAz3zgKBKhkcy37WTkM4oqBqSP1XK2maVe1sFTz1A7verAjgQSLd9Lo67xTjJDzhdHUcoNY6%2BXn0NTrGDbvan9z6DrFpfoLx4gb0jIzUIiN8I5uM12bVbXzqMY4xP%2BOufLxM3qeB%2Fb3huOlxBrbdaSNitEOwGYvQq0JJxgAd9WhpUv2q3z0x5ainegSXu4Fpy%2FowUMYH11s1rvLSusM4xh60Z6rikUuS4ec0vmP0gS7CnVMbtjrSTt200vBEu3soUnBxhzWI%2BUOgfdf3NOdWUGcJkBchRtfTJJWKNzNWP6BX%2FbTQ%3D%3D
"
            alt
          />
        </div>
      </div>
    </div>
  </section>

  <section class="fade-in mb-[100px]">
    <h2 class="mb-8 text-center text-4xl font-medium tracking-widest text-yellow-800/80">精選系列商品</h2>
    <div class="mx-auto max-w-[1260px] px-10 tracking-widest">
      <div class="mb-8 border-b"></div>
      <ul>
        <li class="mb-6 flex">
          <div class="relative flex-1 overflow-hidden p-3 shadow-md">
            <RouterLink
              to="/products"
              class="absolute inset-0 flex items-center justify-center duration-200 first:opacity-0 hover:bg-stone-800/30 hover:opacity-100"
            >
              <span
                class="border border-white px-8 py-3 tracking-wider text-white hover:bg-yellow-600/50 active:bg-yellow-700"
              >手工香皂</span>
            </RouterLink>
            <img
              class="h-full w-full object-cover"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645164274133.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nj1LVFzNEOIMMzyrvrlG5Q5R0Gu%2BWCI1oOYtfBt9v%2FkLipKjfKNQpKuJi4PgjKJpAsFBl%2BR3YH2yXhb5H%2BoJ%2B2PaLMhRpa%2FB89wUnqr9OSeIkPgSKhVOSuIbOfFk70meh4XvNr0OnMcYo1zGlgyHRRPEcKBL9zTl3OeVu5jzpvRaTHMQX6RNYUULrfENe5eF9OfBFfbYWONNmtIbeby1yOK6mkS2%2Be97sY9xXz9UfNQ4rhfJoYzQN91tm23GNhdFVwUjhxjNOmQCDLMjzt1kA7t7Hiu4OHnE0i6i1j5%2FKK3CEKTqteuSSYsODDKqRUDscGRXSwsaW8JlSJmt%2BCr1vg%3D%3D"
              alt
            />
          </div>
          <div class="ml-4 flex flex-1 items-center justify-start">
            <div class="flex flex-col">
              <h3 class="mb-2 flex items-center text-2xl font-medium text-green-800">
                <span class="mr-2 h-5 w-5 bg-stone-200"></span>
                手工香皂
              </h3>
              <article class="text-stone-700">
                油膩膚質以及乾燥膚質，最重視清潔力的調整。
                <br />我們的手工香皂有不同強度的清潔力，從極度乾燥到油膩，
                <br />尋找適合你肌膚的優質手工皂，維持肌膚健康！
              </article>
            </div>
          </div>
        </li>
        <li class="mb-6 flex md:flex-row-reverse">
          <div class="relative flex flex-1 overflow-hidden p-3 shadow-md">
            <RouterLink
              to="/products"
              class="absolute inset-0 flex items-center justify-center duration-200 first:opacity-0 hover:bg-stone-800/30 hover:opacity-100"
            >
              <span
                class="border border-white px-8 py-3 tracking-wider text-white hover:bg-yellow-600/50 active:bg-yellow-700"
              >造型香皂</span>
            </RouterLink>
            <img
              class="h-full w-full object-cover"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645163609594.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=f2WOW02koq9q2p%2FX8DzEDgCPMxjmraDmNTFOCc8UgHer29twSPGwHfciHgr9XY91VTrysiYkJHfeWb7RosUrKrDpRBos53BIzC0oCqGDOyqGJsCDcZws7Q4BFGksPtKNbmGd8ThjH0RKMy23ahy1cFpTDLsqWNr98nI7CITZhl79bSLLldv2xaPBQyXoTAuJU1nFbkICnEwHH8dF6o3DpBOWTh8hYINVdjMR%2Fftg2MNOmKyC6CY20ttN0WRg4rjZTUM%2BaTx0Zh8PKI1Deo918%2B8fnQdhbULpaNaLaZnP9N%2FcQuojP5tsNrmxNNEh4oNGs41IiTAncqHGLWqcHfnP%2BA%3D%3D"
              alt
            />
          </div>
          <div class="md:mr-4 ml-4 flex items-center flex-1 justify-end">
            <div class="flex flex-col">
              <h3 class="mb-2 flex items-center text-2xl font-medium text-green-800">
                <span class="mr-2 md:ml-auto h-5 w-5 bg-stone-200"></span>
                造型香皂
              </h3>
              <article class="md:text-right text-stone-700">
                同為天然植物製成，實用可愛的造型手工皂，
                <br />實用與美觀兼具， 讓你的家人或小孩對清潔愛不釋手
                <br />為浴室增添可愛與俏皮的氛圍！
              </article>
            </div>
          </div>
        </li>
        <li class="mb-6 flex">
          <div class="relative flex-1 overflow-hidden p-3 shadow-md">
            <RouterLink
              to="/products"
              class="absolute inset-0 flex items-center justify-center duration-200 first:opacity-0 hover:bg-stone-800/30 hover:opacity-100"
            >
              <span
                class="border border-white px-8 py-3 tracking-wider text-white hover:bg-yellow-600/50 active:bg-yellow-700"
              >天然精油</span>
            </RouterLink>
            <img
              class="h-full w-full object-cover"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645163424848.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pBlsBocO0WRS7ajGEDyoMxaYfARWnotBCR7lWJcnWUj17N9aj%2B0k9d%2FiP%2Fb1ulEPECWAM82kN00VxGojWMnAe6GaT5waOFEsPo5SrERmtyVDqj2ej1v2Q2Wt6jEFj5UJ1ugKzUhS8k6cmvkpoNN6VQc1ynP5O%2B%2BGabZ4462BzBRorUALPxC6tGSmO2HUFtz%2FWD26JgnQqsu86vEflcLUsNoprnac3ciXQJqw75Fz2g386fEkQRXMaPWIlTNKatjrWt6tUpvzE94Zc%2FlbLSYvpt23ut7jnmkDEgzvWXxCXzVK8AYXbN40oLS3GGhchcTU8z%2FbYONzEWoTbJMiFMM6Tw%3D%3D"
              alt
            />
          </div>
          <div class="ml-4 flex flex-1 items-center justify-start">
            <div class="flex flex-col">
              <h3 class="mb-2 flex items-center text-2xl font-medium text-green-800">
                <span class="mr-2 h-5 w-5 bg-stone-200"></span>
                天然精油
              </h3>
              <article class="text-stone-700">
                氣味清新愉悅，高純度優質天然精油，
                <br />有適合上班提神的沁涼精油、也有心靈療癒的鎮靜精油。
              </article>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section class="mb-[120px]">
    <h2 class="mb-8 text-center text-4xl font-medium tracking-widest text-yellow-800/80">我們的堅持</h2>
    <div class="mx-auto max-w-[1260px] px-10 tracking-wider">
      <div class="mb-8 border-b"></div>
      <div class="flex flex-col lg:flex-row text-stone-700">
        <div class="mb-5 flex flex-1 flex-col items-center lg:mb-0">
          <mdi-water-check-outline class="mb-2 text-8xl text-green-800"></mdi-water-check-outline>
          <h3 class="mb-3 text-2xl text-yellow-900">純淨萃取</h3>
          <article class="px-20 text-lg">原生態嚴選製造，手工皂原料的多款優質純精油，使用頂級黑晶瓶保存精油。</article>
        </div>
        <div class="mb-5 flex flex-1 flex-col items-center lg:mb-0">
          <mdi-check-circle-outline class="mb-2 text-8xl text-green-800"></mdi-check-circle-outline>
          <h3 class="mb-3 text-2xl text-yellow-900">歐盟有機認證</h3>
          <article
            class="px-20 text-lg"
          >歐盟 ECOCERT 認證，嚴格把關。 產品至少95%是天然原料。所使用的防腐、乳化劑等皆須符合 ECOCERT 規定。</article>
        </div>
        <div class="mb-5 flex flex-1 flex-col items-center lg:mb-0">
          <mdi-airplane class="mb-2 text-8xl text-green-800"></mdi-airplane>
          <h3 class="mb-3 text-2xl text-yellow-900">產地直送</h3>
          <article class="px-20 text-lg">從種植產地開始，嚴謹的運輸鏈、產品銷售的全部過程都列入管理。</article>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-[100px]">
    <h2 class="mb-8 text-center text-4xl font-medium tracking-widest text-yellow-800/80">顧客推薦</h2>
    <div class="mx-auto max-w-[1260px] px-10 tracking-wider">
      <div class="border-b"></div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 text-stone-700">
        <div>
          <div class="m-16 sm:mx-40 sm:my-10 md:mx-20 md:my-10 lg:m-8 overflow-hidden rounded-full">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645291716770.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cc9mJtq63rbIM1DrGKkJqauAlIwLt%2Bl%2BoY%2Bv4ylOeSS8nseQCX7swjUyE%2Bc9LKefShX%2BRLy06yBxhFYKgIyc6RHfzzMX5JW4SX4KsRQLpXXgbEhLl%2F9tpG%2F7NGAdjRGXOE9D8Tej5oPZfb3V9ylHzhc%2BzKJKsMNF9ZdQCFaeeZ6lYB1O5TDMaMFTRGcGsr4R6g5ZpA7UJm3NRO70inN9nwdnBVpeqmhTALiPtG1W%2BCXaDrDcavGbyBfxsYOEjgoEnDl3Z6gBeXjDqX2fC%2ByIFg7tClUwN7lzy5fS4HuwyXhuJLWrA7lnuzgbV%2FlPbtUJlLoIRPoDXYusoQODU4X43Q%3D%3D
"
              alt
            />
          </div>
          <div class="px-8">
            <h3 class="mb-3 text-center text-xl text-yellow-800">知名名模 - 李瑞莎</h3>
            <article class="text-lg">
              <p>
                多年來反覆問我自己：身體肌膚的清潔與保養，是不是可以如此簡單？KADOKADO
                手工香皂完全符合我的需求。
              </p>
            </article>
          </div>
        </div>

        <div>
          <div class="m-16 sm:mx-40 sm:my-10 md:mx-20 md:my-10 lg:m-8 overflow-hidden rounded-full">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645291740795.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QIiRVTSWkHXtnfIlMHkGR1VpuuJW8P%2F0%2F3jCJMMOFmNR7f05drO7F8HmmccGm5nj2ro4G%2Fl8XN3SraHJPQwUJB06Xp5A5qGEM3nQ5Df5Zh66yhZVxLdkyM1AKxVHwV9x9OLKV09NYvZDC67OsPN4Id%2Fuz4mkSeKRjbqm4zNBdrT3qp0E%2FlxYP0JGkEqoaoO7xQQVyXs3KshLB%2Bf43EWGmxEKGROPQW39i5N84b1dS1ElUmx3OElRdcTuCqM5QQbFBTrvmRHAXJPvQVJjSK0odfKjLitzFptRqqVYI%2F1zlYrL9iE4sezg9gRm7RgN3mftNqLhNX2a0vateM35BFcy4A%3D%3D
  "
              alt
            />
          </div>
          <div class="px-8">
            <h3 class="mb-3 text-center text-xl text-yellow-800">職棒新星 - 楊麥可</h3>
            <article class="text-lg">
              <p>薄荷手工皂幾乎成了我的最愛。激烈的運動練習結束後的沖涼，使用薄荷手工皂，喚醒精神同時舒緩肌肉疲勞。</p>
            </article>
          </div>
        </div>

        <div>
          <div class="m-16 sm:mx-40 sm:my-10 md:mx-20 md:my-10 lg:m-8 overflow-hidden rounded-full">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645291732674.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mERdljI4XQMQc%2Bg4HBhQwYY0AHmO3my1PtxULygUyiVkS1JZb%2B4W3AJiQhRlLKSJhoci1WriCvEbGoEW%2BpbHhFQy5LoUq4L48mDkbdo423JHc4Skg1hN%2Fdxh69RQiBH2xyA%2B%2BLnNJzO47btXUVkQYGQSgYZItw1H7w8r7t1268zD5olR5yJsbyLWCBFQiJmTTM%2FMjmAE7g03bwgnVcg%2B%2FxZqJjuxg0shZWbAAdu9BLe6RWqpHWZ18b7NU4NAVqpyF8VQnRq8lO3HGmqBQcp8xxbfRO6ZxWOgsI3T%2BAXzraYCj2OXQyqd4Citz2gJSlvJAClhLyOVJIlJmU16BIn7Tw%3D%3D
  "
              alt
            />
          </div>
          <div class="px-8">
            <h3 class="mb-3 text-center text-xl text-yellow-800">晚間劇演員 - 沈蘿拉</h3>
            <article class="text-lg">
              <p>在被邀請代言前我就是常客。這次實際參觀過工廠內的製程，KADOKADO 的品質更是讓我安心又讚賞。</p>
            </article>
          </div>
        </div>

        <div>
          <div class="m-16 sm:mx-40 sm:my-10 md:mx-20 md:my-10 lg:m-8 overflow-hidden rounded-full">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645291757944.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HPeyF6NF%2F0XMoawIZRdLwBfwF1mk9eVwb%2FvxBY43HmIcfAmUNfpfP%2FsoyZwg1txrh7xWEFeSXmJl70MSyNq%2BPKITy737RCp0dgO%2FjbU3EWvTznX6OzOgNNOIkZs7unOgJZxB2Ru98ydQuYfAMgnZIQJLf%2B3%2BkBQV%2FeHNGnCcBGlTQ2C57fBFd6Ld6pU0lPayqZlnj3sRjAPM4sZ%2BVO6okKKP4%2FU8H%2F6BcqySZ52RO6YPElxtaKgVBs9wvUeELGkbdmEkMUGzQxqZmxJzzrVaoum3GR7kVdx71X%2FzFYfYy%2By8%2B2aeNjSFpWqtutGbPMZj%2FTPEfBSErRPJdcOtjGmSAw%3D%3D
  "
              alt
            />
          </div>
          <div class="px-8">
            <h3 class="mb-3 text-center text-xl text-yellow-800">服裝設計師 - 歐瑞克</h3>
            <article class="text-lg">
              <p>泡熱水澡時加入幾滴放鬆身心的純淨精油，有如在雲上飄地舒適。我的靈感總在美好的泡澡時光源源不絕。</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperImgUrlArray = [
      'https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645117077177.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qF7oaNHWUgvtQgvF4jtkgXRXfy57nkpWn2fWXgVD4zeieGvDvoPSsSQfYZFG56WkRPWwyqMq90KWoREXWJ9orsFrqR0BL3k%2F5kUdKJeg5JXd1UQokhf%2FUB2DzWXy9NOgKmPoulzNYvDfhnaFiTx5%2FfP38RsvReVkQIqKuIEuX4wsdfKsLwMv1e1hg3jLcx21nXP176CII%2BKaLF7mQa8Qwvv3YU%2FpTF3DxetCqwCJtjNG4IjJLh5Y3UeA9SixjmQqRLhAHbbG9qq%2B1rZAWbFg9F9SAaoUs3xZlIncVRWZu0%2FZdUlEgVcNB8P0M0FJyGCxsxKusYkkyzha%2F1UQ8RfPcQ%3D%3D',
      'https://storage.googleapis.com/vue-course-api.appspot.com/kadokado/1645175857652.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DtIWCggFyL9y%2FVfQU7C%2FY%2F%2FD3z5loN%2BJrqeHvUHmfEJJSFD3Yr5ysA0VCzRhXSrkxYEcCD08p8zGQd7%2Fo2F4ffE2XejVXfgp%2F0XMVXfMnuKypF%2BcWZctyBnnlTqasE%2BW8%2BHTED8Xx8pTNyYRPmmZXui5hE7JpUwfTTjNf3L%2FOAUWF9pGm48ReIs1N%2Bsu%2BW0c%2B%2FIVPUoCo4xaljE97clBhUtxrNfAA%2FAxptXa0bK%2FdyX%2F7PiseMvdVKA9iHg2gB%2F4puim0PfKTMfn8yKt1IuHTOjvnSaXSJinM3kBYm1so%2BDPIvq3xOzvdYI0bxuFbl38DXQDt0fKWaxfy4mCUHkGaA%3D%3D',
    ];
    return {
      modules: [EffectFade, Pagination, Autoplay],
      swiperImgUrlArray,
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  height: 100%;
}
.swiper-pagination-bullet {
  background-color: #ffbb00;
  width: 15px;
  height: 15px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
