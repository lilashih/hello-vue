<template>
  <div class="container">
    <Header
      title="Youtube"
      @restart="restart"
    >
      <template #title>
        <div class="font-black">
          Repeating the Youtube Video
        </div>
      </template>
    </Header>
    <YoutubeVue3
      ref="youtube"
      :videoid="videoId"
      :loop="1"
      :width="480"
      :height="320"
    />
    <div class="reload">
      <textarea
        v-model="url"
        class="url"
        rows="3"
        placeholder="youtube's url..."
      />
      <button
        class="play"
        @click="playVideo()"
      >
        Play
      </button>
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
    const defaultVideoId = 'nROvY9uiYYk';
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
iframe {
  @apply w-full;
}
.container {
  @apply md:w-3/5 lg:w-2/5;
}
iframe {
  @apply m-auto w-full;
}
.reload{
  @apply mt-4;
}
.url {
  @apply w-full p-2 block;
}
.play{
  @apply my-3 py-2 font-bold w-full text-xl bg-green-900 border-4 border-green-900 rounded-md text-youtube;
}
.play:hover{
  @apply text-green-900;
  background-color: transparent;
}
</style>