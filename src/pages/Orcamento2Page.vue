<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <BtnIcon />
      <q-card-actions vertical class="q-px-none q-pb-none">
        <q-form>
          <q-badge color="white" text-color="grey">Nome do cliente</q-badge>
          <q-select outlined v-model="cliente" :options="clientes" class="q-mb-md" />
          <q-badge color="white" text-color="grey">Celular para contato</q-badge>
          <q-input outlined type="number" v-model.number="celular"  class="q-mb-md" />
          <div class="q-pa-md">
            <q-list>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Arquivo formato PDF</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="blue" v-model="arquivo_pdf" val="arq_pdf" />
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Arquivo formato JPG</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="green" v-model="arquivo_jpg" val="arq_jpg" />
                </q-item-section>
              </q-item>
              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Mensagem de texto Whatsapp</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="red" v-model="mensagem_whatsapp" val="msg_whatsapp" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-form>
        <q-separator inset class="q-mb-md" />
      </q-card-actions>
      <q-card-actions align="around">
        <q-btn push to="/orcamento1" style="min-width: 45%" color="yellow" label="Voltar" size="20px" />
        <q-btn push style="min-width: 45%" color="green" label="Enviar" size="20px" />
      </q-card-actions>
    </q-card-section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BtnIcon from 'components/BtnIcon.vue'

export default defineComponent({
  name: 'Orcamento2Page',

  components: {
    BtnIcon
  },
  setup () {
    return {
      cliente: ref(null),
      clientes: [
        'Navaia', 'Barbeiro', 'Esposa', 'Veio', 'Filho'
      ],
      celular: ref(null),
      arquivo_pdf: ref(true),
      arquivo_jpg: ref(true),
      mensagem_whatsapp: ref(true)
    }
  }
}
)
</script>
