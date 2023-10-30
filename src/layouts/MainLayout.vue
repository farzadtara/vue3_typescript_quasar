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
            @click="$refs.stepper.next()"
            color="primary"
            :label="
              step === 3 ? persianSentences.FINISH : persianSentences.CONTINUE
            "
          />
          <QBtn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            :label="persianSentences.BACK"
            class="q-ml-sm"
          />
        </QStepperNavigation>
      </template>
    </QStepper>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PERSIAN_SENTENCES } from "../utils/constants";
import wizardJson from '../mock/qStepsData.json'
import chooseRestaurant from "../components/chooseRestaurant.vue";
import chooseFood from "../components/chooseFood.vue";
import detailAndSubmit from "../components/detailAndSubmit.vue";
import { IWizard } from '../utils/types'

const step = ref(1);

const persianSentences = PERSIAN_SENTENCES;

const  wizard: Readonly<IWizard>  =  wizardJson.wizard
</script>
