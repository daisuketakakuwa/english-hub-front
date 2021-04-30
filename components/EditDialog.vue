<template>
  <v-dialog v-model="showDialog" :max-width="maxWidth" :persistent="persistent">
    <v-card>
      <v-toolbar class="text-h6" :color="headerColor" dark height="45px">
        {{ headerTitle }}
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col>
            <h2 class="ml-2">title</h2>
            <v-text-field v-model="editTitle" height="10" outlined />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 class="ml-2">content</h2>
            <v-textarea v-model="editContent" rows="10" outlined />
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions class="pa-2">
        <v-spacer />
        <v-btn
          v-if="!hideUpdate"
          id="update"
          :color="updateColor"
          @click="update"
          >{{ updateTitle }}</v-btn
        >
        <v-btn
          v-if="!hideDelete"
          id="delete"
          :color="deleteColor"
          class="ml-2"
          @click="deletes"
          >{{ deleteTitle }}</v-btn
        >
        <v-btn v-if="!hideCancel" id="cancel" class="ml-2" @click="cancel">{{
          cancelTitle
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "nuxt-property-decorator";
@Component
export default class EditDialog extends Vue {
  @PropSync("inputTitle", { type: String, default: "" })
  editTitle!: string;

  @PropSync("inputContent", { type: String, default: "" })
  editContent!: string;

  @PropSync("dialog", { type: Boolean, default: false })
  showDialog!: boolean;

  @Prop({ type: String || Number, default: null })
  maxWidth!: string | number;

  @Prop({ type: String, default: "" })
  headerTitle!: string;

  @Prop({ type: String, default: "primary" })
  headerColor!: string;

  @Prop({ type: String, default: "更新" })
  updateTitle!: string;

  @Prop({ type: String, default: "primary" })
  updateColor!: string;

  @Prop({ type: Boolean, default: false })
  hideUpdate!: boolean;

  @Prop({ type: Boolean, default: true })
  hideUpdateEvent!: boolean;

  @Prop({ type: String, default: "削除" })
  deleteTitle!: string;

  @Prop({ type: String, default: "primary" })
  deleteColor!: string;

  @Prop({ type: Boolean, default: false })
  hideDelete!: boolean;

  @Prop({ type: Boolean, default: true })
  hideDeleteEvent!: boolean;

  @Prop({ type: Boolean, default: false })
  hideCancel!: boolean;

  @Prop({ type: String, default: "閉じる" })
  cancelTitle!: string;

  @Prop({ type: Boolean, default: true })
  hideCancelEvent!: boolean;

  @Prop({ type: Boolean, default: false })
  persistent!: boolean;

  update() {
    if (this.hideUpdateEvent) {
      this.showDialog = false;
    }
    this.$emit("update");
  }

  deletes() {
    if (this.hideDeleteEvent) {
      this.showDialog = false;
    }
    this.$emit("deletes");
  }

  cancel() {
    if (this.hideCancelEvent) {
      this.showDialog = false;
    }
    this.$emit("cancel");
  }
}
</script>
