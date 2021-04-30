<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <v-checkbox v-model="createNewTag" label="新しいタグを作成する" />
      </v-col>
      <v-col cols="3" v-if="createNewTag">
        <v-text-field
          v-model="inputNewTag"
          :disabled="!createNewTag"
          @input="checkInput"
          :items="tags"
          label="新しいタグを作成する"
          outlined
        />
      </v-col>
      <v-col cols="3" v-else>
        <v-select
          v-model="inputExistTag"
          :disabled="createNewTag"
          @input="checkInput"
          :items="tags"
          label="既存タグを選ぶ"
          outlined
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
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
          rows="10"
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

  createNewTag: boolean = false;
  showBtn: boolean = false;
  inputNewTag: string = "";
  inputExistTag: string = "";
  inputTitle: string = "";
  inputContent: string = "";
  tags: String[] = [];

  async fetch() {
    this.cardService = await ServiceFactory.getCardService();
    this.tags = await this.cardService.getCardTags();
  }

  checkInput() {
    let inputTag = "";
    if (this.createNewTag) {
      inputTag = this.inputNewTag;
    } else {
      inputTag = this.inputExistTag;
    }

    this.showBtn = !!inputTag && !!this.inputTitle && !!this.inputContent;
  }
}
</script>
