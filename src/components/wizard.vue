<template>
  <div class="q-pa-md">
    <QStepper v-model="step" ref="stepper" color="primary" animated>
      <QStep
        :name="1"
        :title="persianSentences.SELECT_RESTAURANT"
        icon="settings"
        :done="step > 1"
      >
        <chooseRestaurant :stepData="wizard.step1" />
      </QStep>

      <QStep :name="2" :title="persianSentences.SELECT_FOOD" :done="step > 2">
        <chooseFood :stepData="wizard.step2" />
      </QStep>
      <QStep :name="3" :title="persianSentences.DETAIL_ORDER">
        <detailAndSubmit :stepData="wizard.step3" />
      </QStep>

      <template v-slot:navigation>
        <QStepperNavigation>
          <QBtn
            @click="next"
            color="primary"
            :label="
              step === 3 ? persianSentences.FINISH : persianSentences.CONTINUE
            "
          />
          <QBtn
            v-if="step > 1"
            flat
            color="primary"
            @click="previous"
            :label="persianSentences.BACK"
            class="q-ml-sm"
          />
        </QStepperNavigation>
      </template>
    </QStepper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative, Ref, Setup } from "vue-facing-decorator";
import { ref } from 'vue'
import { PERSIAN_SENTENCES } from "../utils/constants";
import { QStepper } from "quasar";
import { IWizard } from '../utils/types'
import wizardJson from '../mock/qStepsData.json'
import chooseRestaurant  from "./chooseRestaurant.vue";
import chooseFood from "./chooseFood.vue";
import detailAndSubmit from "./detailAndSubmit.vue";
import { ApplicationDS } from "../stores/appState";
import { storeToRefs } from "pinia";




@Component({
    components:{chooseRestaurant, chooseFood, detailAndSubmit}
})
class Wizard extends Vue {

    persianSentences = PERSIAN_SENTENCES

    wizard: Readonly<IWizard>  =  wizardJson.wizard


    @Ref('stepper')
    stepper!: QStepper

    @Setup(() => ref(1))
    step!: number

    mounted(){
      window.addEventListener('keydown',(e)=>{
        if(e.key === '.' && e.ctrlKey){
          if(this.step === 1){
            console.log(ApplicationDS().getSelectedRestaurant);
          }else if(this.step === 2){
            console.log(ApplicationDS().getSelectedFood);
          }else if(this.step === 3){
            console.log(ApplicationDS().getOrderDetail);
          }
           
        }
      })
    }

    next(){
        this.stepper.next()
    }

    previous(){
        this.stepper.previous()
    }


}

export default toNative(Wizard);
</script>

<style scoped></style>
