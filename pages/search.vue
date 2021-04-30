<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <v-select v-model="searchTag" label="tag" :items="tags" outlined />
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="searchWord" label="title・content" outlined />
      </v-col>
      <v-col cols="3">
        <v-btn color="primary" x-large @click="searchCard">検索</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <h2>検索結果</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-data-table :headers="headers" :items="cards" hide-default-footer>
          <template #[`item`]="{ item }">
            <tr @click="showDetail">
              <td>#{{ item.tag }}</td>
              <td>{{ item.title }}</td>
            </tr>
            <app-dialog
              :dialog.sync="showDialog"
              :max-width="new String(900)"
              :hide-cancel="true"
              ok-title="閉じる"
              :header-title="item.title"
            >
              <span v-html="item.content"></span>
            </app-dialog>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import Card from "@/domains/card/Card";
import CardService from "@/domains/card/CardService";
import ServiceFactory from "@/domains/ServiceFactory";
import CardSearch from "@/domains/card/CardSearch";

@Component
export default class Search extends Vue {
  cardService!: CardService;

  tags: String[] = [];
  searchTag = "";
  searchWord = "";
  cards: Card[] = [];
  showDialog = false;

  headers = [
    { text: "TAG", value: "tag", width: "20%" },
    { text: "TITLE", value: "color", width: "50%" }
  ];

  async fetch() {
    this.cardService = await ServiceFactory.getCardService();
    this.tags = await this.cardService.getCardTags();
  }

  async searchCard() {
    this.cards = await this.cardService.searchCard(
      new CardSearch(this.searchTag, this.searchWord)
    );
  }

  showDetail() {
    this.showDialog = true;
  }
}
</script>
