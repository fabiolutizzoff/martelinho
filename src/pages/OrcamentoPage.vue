<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <BtnIcon />
      <q-card-actions vertical class="q-px-none q-pb-xl">
        <q-form>
          <q-badge color="secondary">Modelo</q-badge>
          <q-select outlined v-model="model" :options="modelo" class="q-mb-md" />
          <q-badge color="secondary">Peça</q-badge>
          <q-select outlined v-model="model" :options="peca" class="q-mb-md" />
          <q-badge color="secondary">Tamanho do amassado</q-badge>
          <q-select outlined v-model="model" :options="tamanho" class="q-mb-md" />
          <q-badge color="secondary">Quantidade de amassados</q-badge>
          <q-select outlined v-model="model" :options="quantidade" class="q-mb-md" />
        </q-form>
        <q-separator inset class="q-mb-md" />

      </q-card-actions>
    </q-card-section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BtnIcon from 'components/BtnIcon.vue'

export default defineComponent({
  name: 'MainPage',

  components: {
    BtnIcon
  },
  setup () {
    return {
      model: ref(null),
      modelo: [
        'FIAT', 'Ford', 'Honda', 'Toyota', 'Audi'
      ],
      peca: [
        'Peça', 'Porta mala', 'Porta', 'Capo', 'Paralama'
      ],
      tamanho: [
        '10cm', '20cm', '30cm', '40cm', '50cm'
      ],
      quantidade: [
        '1', '2', '3', '4', '5'
      ]
    }
  }
}
)
</script>
