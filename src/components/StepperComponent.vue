<template>
    <q-stepper v-model="step" ref="stepper" alternative-labels color="primary" animated flat>
        <q-step :name="1" title="Pontos" icon="settings" :done="step > 1"></q-step>
        <q-step :name="2" title="Cliente" icon="create_new_folder" :done="step > 2"></q-step>
        <q-step :name="3" title="Orçamento" icon="add_comment"></q-step>
      </q-stepper>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'StepperComponent',
  data () {
    return {
      step: ref([])
    }
  }
})
</script>
