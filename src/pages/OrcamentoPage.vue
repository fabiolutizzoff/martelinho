<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <BtnIcon />
      <q-card-actions vertical class="q-px-none q-pb-none">
        <q-form>
          <q-badge color="white" text-color="grey">Marca</q-badge>
          <q-select outlined v-model="marca" :options="marcas" class="q-mb-md" />
          <q-badge color="white" text-color="grey">Modelo</q-badge>
          <q-select outlined v-model="modelo" :options="modelos" class="q-mb-md" />
          <q-badge color="white" text-color="grey">Preço base</q-badge>
          <q-input outlined type="number" v-model.number="preco" mask="#.##" fill-mask="0" reverse-fill-mask prefix="R$" class="q-mb-md" />
          <q-badge color="white" text-color="grey">Peça</q-badge>
          <q-select outlined v-model="peca" :options="pecas" class="q-mb-md" />
          <q-badge color="white" text-color="grey">Tamanho do amassado (cm)</q-badge>
          <q-input outlined type="number" v-model.number="tamanho" suffix="cm" class="q-mb-md" />
          <q-badge color="white" text-color="grey">Quantidade de amassados</q-badge>
          <q-select outlined v-model="quantidade" :options="quantidades" class="q-mb-md" />
          <div class="q-pa-md q-gutter-y-sm column">
          <q-toggle v-model="em_quina" label="Em quina" color="red" />
          <q-toggle v-model="montagem_externa" label="Montagem externa" color="red" />
          <q-toggle v-model="montagem_interna" label="Montagem interna" color="red" />
          </div>
        </q-form>
        <q-separator inset class="q-mb-md" />
      </q-card-actions>
        <q-btn push class="q-mr-md" style="max-width: 50%" color="red" size="20px" no-caps>
          <div class="row items-center no-wrap">
            <div class="text-center">
              Adicionar<br>mais pontos
            </div>
          </div>
        </q-btn>
        <q-btn push style="max-width: 50%" color="blue" size="20px" no-caps>
          <div class="row items-center no-wrap">
            <div class="text-center q-pa-none q-ma-none">
              Revisar dados<br>e enviar
            </div>
          </div>
        </q-btn>
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
      marca: ref(null),
      marcas: [
        'FIAT', 'Ford', 'Honda', 'Toyota', 'Audi'
      ],
      modelo: ref(null),
      modelos: [
        'Palio', 'Ford Ka', 'CIVIC', 'Corolla', 'A5'
      ],
      preco: ref(null),
      peca: ref(null),
      pecas: [
        'Peça', 'Porta mala', 'Porta', 'Capo', 'Paralama'
      ],
      tamanho: ref(null),
      quantidade: ref(null),
      quantidades: [
        '1 ponto', '2 a 5 pontos', '6 a 10 pontos', '11 a 15 pontos', '16 a 20 pontos'
      ],
      em_quina: ref(true),
      montagem_externa: ref(true),
      montagem_interna: ref(true)
    }
  }
}
)
</script>
