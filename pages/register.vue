<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <v-select
          v-model="inputTag"
          @input="checkInput"
          :items="tags"
          label="Tag"
          outlined
        />
      </v-col>
      <v-col cols="7">
        <v-text-field
          v-model="inputTitle"
          @input="checkInput"
          label="Title"
          outlined
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-textarea
          v-model="inputContent"
          @input="checkInput"
          label="Content"
          outlined
          rows="13"
        />
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="2">
        <v-btn x-large color="primary" :disabled="!showBtn">登録</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import CardService from "@/domains/card/CardService";
import ServiceFactory from "@/domains/ServiceFactory";

@Component
export default class Register extends Vue {
  cardService!: CardService;

  showBtn: boolean = false;
  inputTag: string = "";
  inputTitle: string = "";
  inputContent: string = "";
  tags: String[] = [];

  async fetch() {
    this.cardService = await ServiceFactory.getCardService();
    this.tags = await this.cardService.getCardTags();
  }

  checkInput() {
    this.showBtn = this.showBtn =
      !!this.inputTag && !!this.inputTitle && !!this.inputContent;
  }
}
</script>
