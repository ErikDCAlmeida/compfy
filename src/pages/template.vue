<template>
  <cmp-app>
    <cmp-btn @click="alertMsg('Clicou!')" outline color="label">
      Teste
    </cmp-btn>
  </cmp-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
  alertMsg(msg: string): void {
    alert(msg);
  }
}
</script>
