<template>
  <div class="row justify-center">
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <QInput v-model="text" type="textarea" label="جزییات سفارش را وارد کنید" :outlined="true" @update:model-value="setTypedValue($event)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { IWizard, stepThree } from "../utils/types";

const props = defineProps<{
  stepData: stepThree;
}>();

const text = ref('')

function setTypedValue(e: any){
    console.log('e :>> ', e);

}
</script>

<style scoped></style>
