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
            <tr @click="showDetailDialog(item)">
              <td>#{{ item.tag }}</td>
              <td>{{ item.title }}</td>
            </tr>
          </template>
        </v-data-table>
        <app-dialog
          :dialog.sync="detailDialog"
          :max-width="new String(900)"
          ok-title="編集"
          @ok="showEditDialog()"
          cancel-title="閉じる"
          :header-title="selectedCard.title"
        >
          <span v-html="selectedCard.content"></span>
        </app-dialog>
        <edit-dialog
          :dialog.sync="editDialog"
          :max-width="new String(900)"
          :input-title.sync="updateTitle"
          :input-content.sync="updateContent"
          header-title="編集画面"
          @update="showUpdateConfirmDialog"
          @deletes="showDeleteConfirmDialog"
        />
        <app-dialog
          :dialog.sync="updateConfirmDialog"
          :max-width="new String(500)"
          ok-title="OK"
          @ok="updateCard()"
          cancel-title="キャンセル"
          header-title="更新確認"
        >
          本カードを更新します。
        </app-dialog>
        <app-dialog
          :dialog.sync="deleteConfirmDialog"
          :max-width="new String(500)"
          ok-title="OK"
          @ok="deleteCard()"
          cancel-title="キャンセル"
          header-title="削除確認"
        >
          本カードを削除します。
        </app-dialog>
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

  searchTag = "";
  searchWord = "";

  selectedCard = new Card();

  updateTitle = "";
  updateContent = "";

  tags: String[] = [];
  cards: Card[] = [];

  detailDialog = false;
  editDialog = false;
  updateConfirmDialog = false;
  deleteConfirmDialog = false;

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

  async updateCard() {
    await this.cardService.updateCard(
      new Card(
        this.selectedCard.id,
        this.updateTitle,
        this.selectedCard.tag,
        this.updateContent
      )
    );
    await this.searchCard();
  }

  async deleteCard() {
    await this.cardService.deleteCard(this.selectedCard.id);
    await this.searchCard();
  }

  showDetailDialog(card: Card) {
    this.selectedCard = card;
    this.detailDialog = true;
  }
  showEditDialog() {
    this.updateTitle = this.selectedCard.title;
    this.updateContent = this.selectedCard.content.replaceAll("<br>", "\n");
    this.detailDialog = false;
    this.editDialog = true;
  }
  showUpdateConfirmDialog() {
    this.updateConfirmDialog = true;
  }
  showDeleteConfirmDialog() {
    this.deleteConfirmDialog = true;
  }
}
</script>
