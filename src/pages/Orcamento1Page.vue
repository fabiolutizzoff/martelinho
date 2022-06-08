<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <BtnIcon />
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
        <q-btn rounded size="lg" to="/auth" color="red" text-color="white" label="Incluir ponto" class="q-mb-md" no-caps />
        <q-btn rounded size="lg" to="/auth" color="blue" text-color="white" label="Continuar" class="q-mb-md" no-caps />
      </q-card-actions>
    </q-card-section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BtnIcon from 'components/BtnIcon.vue'

export default defineComponent({
  name: 'Orcamento1Page',

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
