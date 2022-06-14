<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <q-badge color="white" text-color="grey" class="q-ml-md q-mb-md">Orçamento nº: {{num_orcamento}} </q-badge>
      <q-separator inset class="q-mb-sm" />
      <q-form>
        <q-card-actions vertical class="q-px-none q-pb-none">
          <q-badge color="white" text-color="grey" class="q-ml-md">Nome do cliente</q-badge>
          <q-select outlined rounded v-model="cliente" :options="clientes" class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">Celular</q-badge>
          <q-input outlined rounded type="number" v-model.number="celular"  class="q-mb-md" />
          <q-badge color="white" text-color="grey" class="q-ml-md">e-mail</q-badge>
          <q-input outlined rounded v-model="email"  class="q-mb-md" />
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
        <q-separator inset class="q-mb-md" />
          <q-btn rounded size="lg" to="/OrcamentoPonto" color="red" label="Voltar" class="q-mb-md" no-caps />
          <q-btn rounded size="lg" color="blue" label="Continuar" no-caps />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'OrcamentoClientePage',

  setup () {
    return {
      num_orcamento: (20220614001),
      ponto: ref('1'),
      dataponto: ref('teste'),
      cliente: ref(null),
      clientes: [
        'Navaia', 'Barbeiro', 'Esposa', 'Veio', 'Filho'
      ],
      celular: ref(null),
      email: ref(null),
      arquivo_pdf: ref(true),
      arquivo_jpg: ref(true),
      mensagem_whatsapp: ref(true)
    }
  }
}
)
</script>
