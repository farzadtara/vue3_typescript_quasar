<template>
  <div>
    <div class="q-pa-lg">
      <QOptionGroup v-model="currentValue" :options="optionList" color="primary" @update:model-value="selectedItem($event)">
        <template v-slot:label="opt">
          <div class="row items-center option-items">
            <span class="text-teal">{{ opt.label }}</span>
            <!-- <span class="">  {{opt.star}}</span> -->
          </div>
        </template>
      </QOptionGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative, Ref, Setup, Prop } from "vue-facing-decorator";
import { ref } from 'vue'
import { stepOne } from "../utils/types";
import {ApplicationDS} from '../stores/appState'


@Component({
    components:{}
})
class ChooseRestaurant extends Vue {

  @Prop({ required: true}) stepData!: stepOne

  @Setup(() => ref(ApplicationDS().getSelectedRestaurant))currentValue!: string

  get optionList(){
    const options: { label: string; value: string; disable: boolean, star: string }[] = [];
      this.stepData.data.forEach((item)=>{
          const option = {
            label: item.name,
            value: item.id,
            disable: item.available,
            star:item.star
          };
          options.push(option);
    })  

    return options
  }

  selectedItem(value: string){
    ApplicationDS().setSelectedRestaurant(value)
  }

}

export default toNative(ChooseRestaurant);



</script>


<style lang="scss" scoped>
.option-items{
    display: flex;
    flex-direction: row;
    gap: 10px
}
</style>
