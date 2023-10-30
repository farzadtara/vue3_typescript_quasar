<template>
  <div class="q-pa-lg">
    <QOptionGroup
      v-model="group"
      :options="options"
      color="primary"
      @update:model-value="selectedItem($event)"
    >
      <template v-slot:label="opt">
        <div class="row items-center option-items">
          <span class="text-teal">{{ opt.label }}</span>
        </div>
      </template>
    </QOptionGroup>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { IWizard, stepTwo } from "../utils/types";
import { ApplicationDS } from "../stores/appState";

const props = defineProps<{
  stepData: stepTwo;
}>();

const group = ref("op1");

const ApplicationDataStore = ApplicationDS();

const selectedRestaurant = ApplicationDataStore.getSelectedRestaurant;

const restaurantFoods = props.stepData.data.find(
  (item) => item.id === selectedRestaurant
);

const options: { label: string, value: string }[] = [];

restaurantFoods!.data.forEach((item) => {
  const option = {
    label: item.name,
    value: item.name
  };

  options.push(option);
});

function selectedItem(value: string) {
  ApplicationDataStore.setSelectedRestaurant(value);
}
</script>

<style scoped></style>
