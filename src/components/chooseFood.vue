<template>
  <div class="q-pa-lg">
    <QOptionGroup
      v-model="currentValue"
      :options="optionList"
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

<script lang="ts">
import { ref } from "vue";
import { stepTwo } from "../utils/types";
import { ApplicationDS } from "../stores/appState";
import { Component, Vue, toNative, Ref, Setup, Prop } from "vue-facing-decorator";


@Component
class ChooseFood extends Vue {

  @Prop({required: true})stepData!: stepTwo

  @Setup(() => ref(ApplicationDS().getSelectedFood))currentValue!: string

  get selectedRestaurant(){
    return ApplicationDS().getSelectedRestaurant
  }

  get selectedRestaurantFoods(){
    return  this.stepData.data.find((item)=> item.id === this.selectedRestaurant)
  }

  get optionList(){
    const options: { label: string, value: string }[] = [];
    this.selectedRestaurantFoods?.data.forEach((item)=>{
      const option = {
          label: item.name,
          value: item.name
        };
        options.push(option);
      })  

    return options
  }

  selectedItem(value: string) {
    ApplicationDS().setSelectedFood(value);
  }

}

export default toNative(ChooseFood);

</script>

<style scoped></style>
