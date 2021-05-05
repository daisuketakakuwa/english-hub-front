<template>
  <v-container v-if="loggedIn">
    <v-row justify="center">
      <v-col>
        <v-tabs>
          <v-tabs-slider color="primary" />
          <v-tab v-for="item in items" :key="item.title">
            <nuxt-link :to="item.to" class="black--text text-decoration-none">
              {{ item.title }}
            </nuxt-link>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";

@Component
export default class NavigateMenu extends Vue {
  loggedIn = false;

  items = [
    { title: "ホーム", to: "/auth/home" },
    {
      title: "新規登録",
      to: "/auth/register"
    },
    { title: "検索", to: "/auth/search" }
  ];

  async fetch() {
    this.loggedIn = this.$route.path.startsWith("/auth/");
  }

  @Watch("$route")
  changedRoute() {
    this.loggedIn = this.$route.path.startsWith("/auth/");
  }
}
</script>
