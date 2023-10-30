<template>
  <div>
    <div class="q-pa-lg">
      <QOptionGroup v-model="group" :options="options" color="primary" @update:model-value="selectedItem($event)">
        <template v-slot:label="opt">
          <div class="row items-center option-items">
            <span class="text-teal">{{ opt.label }}</span>
            <span class="">  {{opt.star}}</span>
          </div>
        </template>
      </QOptionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { IWizard, stepOne } from "../utils/types";
import {ApplicationDS} from '../stores/appState'

const group = ref("op1");

const ApplicationDataStore = ApplicationDS()

const props = defineProps<{
  stepData: stepOne;
}>();

const options: { label: string; value: string; disable: boolean, star: string }[] = [];

props.stepData.data.forEach((item) => {
  const option = {
    label: item.name,
    value: item.id,
    disable: item.available,
    star:item.star
  };

  options.push(option);
});

function selectedItem(value: string){
    ApplicationDataStore.setSelectedRestaurant(value)
}
</script>

<style lang="scss" scoped>
.option-items{
    display: flex;
    flex-direction: row;
    gap: 10px
}
</style>
