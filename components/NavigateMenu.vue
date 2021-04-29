<template>
  <v-container>
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
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class NavigateMenu extends Vue {
  items = [
    { title: "ホーム", to: "/" },
    {
      title: "新規登録",
      to: "/register"
    },
    { title: "検索", to: "/search" }
  ];
}
</script>
