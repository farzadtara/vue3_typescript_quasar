<template>
  <div class="row justify-center">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <QInput v-model="detailDescription" type="textarea" label="جزییات سفارش را وارد کنید" outlined />
        <QBtn color="white" text-color="black" label="ثبت جزییات" @click="submitDetailDescription"  />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { stepThree } from "../utils/types";
import { Component, Vue, toNative, Ref, Setup, Prop } from "vue-facing-decorator";
import { ApplicationDS } from "../stores/appState";



@Component
class DetailAndSubmit extends Vue {

  @Prop({ required: true })stepData!: stepThree

  @Setup(() => ref(''))detailDescription!: string

  get selectedRestaurant(){
    return ApplicationDS().getSelectedRestaurant
  }

  submitDetailDescription() {
    ApplicationDS().setSelectedOrderDetail(this.detailDescription);
  }

}

export default toNative(DetailAndSubmit);

</script>

<style scoped></style>
