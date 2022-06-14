<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <q-badge color="white" text-color="grey" class="q-ml-md q-mb-md">Orçamento nº: {{num_orcamento}} </q-badge>
      <q-separator inset class="q-mb-sm" />
      <q-form>
        <q-card-actions vertical class="q-px-none q-pb-none">
          <q-badge color="white" text-color="grey" class="q-ml-md">Marca</q-badge>
          <q-select outlined rounded v-model="marca" :options="marcas" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Modelo</q-badge>
          <q-select outlined rounded v-model="modelo" :options="modelos" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Preço base</q-badge>
          <q-input outlined rounded v-model="preco" mask="#,##" fill-mask="0" reverse-fill-mask prefix="R$" class="q-mb-md" />
          <q-separator inset class="q-mb-md" />
          <q-btn rounded size="lg" color="red" text-color="white" label="Clique aqui para incluir o ponto" class="q-mb-md" no-caps @click="incluir_pontos = true" />
        </q-card-actions>
        <q-dialog v-model="incluir_pontos" persistent>
          <q-card style="width: 400px; max-width: 95vw;">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">Ponto {{ ponto }}</div>
              <q-space />
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator inset />
            <q-card-section class="q-pt-none">
              <q-card-actions vertical class="q-px-none q-pb-none">
                <q-badge color="white" text-color="grey" class="q-ml-md">Peça</q-badge>
                <q-select outlined rounded v-model="peca" :options="pecas" class="q-mb-md" />
                <q-badge color="white" text-color="grey" class="q-ml-md">Tamanho do amassado (cm)</q-badge>
                <q-input outlined rounded  v-model="tamanho" mask="#,##" fill-mask="0" reverse-fill-mask suffix="cm" class="q-mb-md" />
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
              </q-card-actions>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn rounded label="Incluir" color="primary" v-close-popup style="min-width: 50%;" />
            </q-card-actions>
          </q-card>
        </q-dialog>
        </q-form>
      <q-separator inset class="q-mb-md" />
      <q-card class="my-card q-mb-md q-pb-sm"  style="border-radius: 20px">
        <q-card-section class="q-py-xs" align="center">
         Ponto {{ ponto }}
        </q-card-section>
        <q-separator class="q-mb-sm" />
        <q-card-section horizontal>
          <q-card-section style="min-width: 50%" class="q-py-xs">
            Peça: {{ peca }}
          </q-card-section>
          <q-card-section style="min-width: 50%" class="q-py-xs">
            Tamanho: {{ tamanho }} cm
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section style="min-width: 50%" class="q-py-xs">
            Qtd: {{ quantidade }}
          </q-card-section>
          <q-card-section style="min-width: 50%" class="q-py-xs">
            Quina: {{ em_quina }}
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal>
          <q-card-section style="min-width: 50%" class="q-py-xs">
            Mtg ext: {{ montagem_externa }}
          </q-card-section>
          <q-card-section style="min-width: 50%" class="q-py-xs">
            Mtg int: {{ montagem_interna }}
          </q-card-section>
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

export default defineComponent({
  name: 'Orcamento1Page',

  setup () {
    return {
      num_orcamento: (20220614001),
      incluir_pontos: ref(false),
      ponto: ref('1'),
      dataponto: ref('teste'),
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
      em_quina: ref(false),
      montagem_externa: ref(false),
      montagem_interna: ref(false)
    }
  }
}
)
</script>
