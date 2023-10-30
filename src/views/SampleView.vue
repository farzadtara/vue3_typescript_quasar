<!-- <script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template> -->
<!-- 
<template>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Select campaign settings"
          icon="settings"
          :done="step > 1"
        >
          nice
        </q-step>
  
        <q-step
          :name="2"
          title="Create an ad group"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >
          An ad group contains one or more ads which target a shared set of keywords.
        </q-step>
  
        <q-step
          :name="3"
          title="Ad template"
          icon="assignment"
          disable
        >
          This step won't show up because it is disabled.
        </q-step>
  
        <q-step
          :name="4"
          title="Create an ad"
          icon="add_comment"
        >
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.
        </q-step>
  
        <template v-slot:navigation>
          <q-stepper-navigation>
            <button @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" > nice</button>
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        step: ref(1)
      }
    }
  }
  </script>
   -->