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
          <q-select outlined v-model="quantidade" :options="quantidades" class="q-mb-none" />
          <div class="q-pa-md">
            <q-list>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Em quina</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="blue" v-model="em_quina" val="quina" />
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Montagem externa</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="green" v-model="montagem_externa" val="mont_externa" />
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
      </q-card-actions>
      <q-card-actions align="around">
        <q-btn push style="min-width: 45%" color="red" size="20px" no-caps>
          <div class="row items-center no-wrap">
            <div class="text-center">
              Adicionar<br>mais pontos
            </div>
          </div>
        </q-btn>
        <q-btn push to="/orcamento2" style="min-width: 45%" color="blue" size="20px" no-caps>
          <div class="row items-center no-wrap">
            <div class="text-center q-pa-none q-ma-none">
              Revisar dados<br>e enviar
            </div>
          </div>
        </q-btn>
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
