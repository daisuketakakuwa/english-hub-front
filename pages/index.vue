<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h2>ログイン画面</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        USERNAME：
        <v-text-field v-model="username" outlined />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        PASSWORD：
        <v-text-field v-model="password" outlined />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-btn color="primary" x-large @click="login">ログイン</v-btn>
      </v-col>
    </v-row>
    <app-dialog
      :dialog.sync="loginFailedDialog"
      :max-width="new String(750)"
      :hide-cancel="true"
      ok-title="閉じる"
      header-title="ログイン結果"
    >
      ログイン処理に失敗しました。
    </app-dialog>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import User from "@/domains/user/User";
import ServiceFactory from "@/domains/ServiceFactory";
import AuthService from "@/domains/auth/AuthService";

@Component
export default class Index extends Vue {
  authService!: AuthService;

  username = "";
  password = "";

  loginFailedDialog = false;

  async fetch() {
    this.authService = await ServiceFactory.getAuthService();
  }

  async login() {
    const result = await this.authService.login(
      new User(this.username, this.password)
    );
    if (result) {
      this.$router.push("/auth/home");
    } else {
      this.loginFailedDialog = true;
      this.username = "";
      this.password = "";
    }
  }
}
</script>
