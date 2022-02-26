<template>
  <div class="container">
    <Header
      title="Youtube"
      @restart="restart"
    >
      <template #title>
        <span class="title"><span>Repeat YouTube</span></span>
      </template>
    </Header>
    <YoutubeVue3
      ref="youtube"
      :videoid="videoId"
      :loop="1"
      :width="1200"
      :height="600"
      @ended="restart"
    />
    <div class="reload">
      <input
        v-model="url"
        type="text"
        class="url"
        placeholder="YouTube URL..."
      >
      <div
        class="play"
        @click="playVideo()"
      >
        <span><Fa
          icon="play"
          size="lg"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash';
import { ref } from 'vue';
import { YoutubeVue3 } from 'youtube-vue3';
import Header from '@/components/Header.vue';

export default {
  components: {
    YoutubeVue3,
    Header,
  },
  setup() {
    const defaultVideoId = import.meta.env.VITE_DEFULT_YOUTUBE_ID;
    const url = ref('');
    const videoId = ref(defaultVideoId);
    const youtube = ref(null);
    const playVideo = () => {
      if (url.value.startsWith('https://www.youtube.com/')) {
        const urlParams = new URL(url.value);
        const id = urlParams.searchParams.get('v');
        if (!isEmpty(id)) {
          videoId.value = id;
        }
      }
    };
    const stop = () => {
      youtube.value.player.stopVideo();
    };
    const start = () => {
      youtube.value.player.playVideo();
    };
    const restart = () => {
      stop();
      start();
    };

    return {
      url,
      videoId,
      youtube,
      playVideo,
      restart,
    };
  },
  mounted() {
    $('body').attr('class', 'body-youtube');
  },
};
</script>

<style lang="scss" scoped>
.container {
  @apply md:w-3/5 lg:w-3/5;
}
.reload{
  @apply mt-4;
}
.url {
  @apply w-full p-2 block rounded-md bg-gray-900;
}
.play{
  @apply mt-4 font-bold w-full text-xl rounded-md text-center cursor-pointer;
}
.play:hover span {
  @apply hidden;
}
.play:hover:before {
  content: "P L A Y"
}
</style>