<template>
  <q-scroll-area style="height: calc(100vh - 32px - 56px)">
    <q-tabs
      v-model="tab"
      inline-label
      outside-arrows
      mobile-arrows
      class="settings-tabs text-white shadow-2"
    >
      <q-tab name="general" icon="display_settings" label="일반" />
      <q-tab name="damage_meter" icon="speed" label="미터기" />
      <q-tab name="log" icon="article" label="기록 " />
      <q-tab name="shortcuts" icon="keyboard" label="단축키 " />
      <!-- <q-tab name="upload_logs" icon="cloud_upload" label="Uploading" /> -->
    </q-tabs>

    <div class="settings-page">
      <GeneralPage v-if="tab === 'general'" />
      <DamageMeterPage v-if="tab === 'damage_meter'" />
      <LogPage v-if="tab === 'log'" />
      <ShortcutsPage v-if="tab === 'shortcuts'" />
      <UploadPage v-if="tab === 'upload_logs'" />
    </div>
  </q-scroll-area>
</template>

<script setup>
import { ref } from "vue";
import GeneralPage from "src/components/SettingsPage/GeneralPage.vue";
import DamageMeterPage from "src/components/SettingsPage/DamageMeterPage.vue";
import UploadPage from "src/components/SettingsPage/UploadPage.vue";
import LogPage from "src/components/SettingsPage/LogPage.vue";
import ShortcutsPage from "src/components/SettingsPage/ShortcutsPage.vue";

import { useSettingsStore } from "src/stores/settings";
const settingsStore = useSettingsStore();

let tab = ref("general");

settingsStore.$subscribe(() => {
  settingsStore.saveSettings();
});
</script>

<style>
.settings-tabs {
  background: #121519;
}
.settings-page {
  padding: 12px 24px;
}
</style>
