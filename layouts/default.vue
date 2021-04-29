<template>
  <v-app>
    <v-app-bar app class="black white--text" height="100px">
      <h1 class="ml-5">ENGLISH-HUB</h1>
    </v-app-bar>
    <v-main>
      <navigate-menu />
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class Default extends Vue {}
</script>
