<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <StepperComponent />
      <q-card-actions vertical class="q-px-none q-pb-none">
        <q-form>
          <q-badge color="white" text-color="grey" class="q-ml-md">Marca</q-badge>
          <q-select outlined rounded v-model="marca" :options="marcas" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Modelo</q-badge>
          <q-select outlined rounded v-model="modelo" :options="modelos" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Preço base</q-badge>
          <q-input outlined rounded type="number" v-model.number="preco" mask="#.##" fill-mask="0" reverse-fill-mask prefix="R$" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Peça</q-badge>
          <q-select outlined rounded v-model="peca" :options="pecas" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Tamanho do amassado (cm)</q-badge>
          <q-input outlined rounded type="number" v-model.number="tamanho" suffix="cm" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Quantidade de amassados</q-badge>
          <q-select outlined rounded v-model="quantidade" :options="quantidades" class="q-mb-none" />
          <div class="q-pa-md">
            <q-list>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Em quina</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="red" v-model="em_quina" val="quina" />
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Montagem externa</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="red" v-model="montagem_externa" val="mont_externa" />
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Montagem interna</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="red" v-model="montagem_interna" val="mont_interna" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-form>
        <q-separator inset class="q-mb-md" />
        <q-btn rounded size="lg" color="red" text-color="white" label="Incluir ponto" class="q-mb-md" no-caps @click="incluir_pontos = true" />
      </q-card-actions>
      <q-dialog v-model="incluir_pontos" persistent full-width>
        <q-card>
            <q-card-section>
              <div class="text-h6">Ponto</div>
            </q-card-section>
            <q-separator inset />

            <q-card-section class="q-pt-none">
              <q-card-actions vertical class="q-px-none q-pb-none">
                <q-badge color="white" text-color="grey" class="q-ml-md">Peça</q-badge>
                <q-select outlined rounded v-model="peca" :options="pecas" class="q-mb-md" />
              </q-card-actions>
              Ponto incluido com sucesso
            </q-card-section>

            <q-card-actions align="right">
              <q-btn rounded label="Incluir" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
      </q-dialog>
      <q-separator inset class="q-mb-md" />
      <q-badge color="white" text-color="grey" class="q-ml-md">Pontos</q-badge>
      <q-card class="my-card q-mb-md" style="border-radius: 30px">
        <q-card-section>
          {{ ponto }}
        </q-card-section>
        <q-separator />
        <q-card-section>
          {{ dataponto }}
        </q-card-section>
      </q-card>
      <q-card class="my-card q-mb-md" style="border-radius: 30px">
        <q-card-section>
          {{ ponto }}
        </q-card-section>
        <q-separator />
        <q-card-section>
          {{ dataponto }}
        </q-card-section>
      </q-card>
      <q-separator inset class="q-mb-md" />
      <q-card-actions vertical class="q-pa-none">
        <q-btn rounded size="lg" to="/OrcamentoCliente" color="blue" text-color="white" label="Continuar" class="q-mb-md" no-caps />
      </q-card-actions>
    </q-card-section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import StepperComponent from '../components/StepperComponent.vue'

export default defineComponent({
  name: 'Orcamento1Page',

  components: {
    StepperComponent
  },

  setup () {
    return {
      incluir_pontos: ref(false),
      ponto: ref('1'),
      dataponto: ref('teste'),
      step: ref(1),
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
