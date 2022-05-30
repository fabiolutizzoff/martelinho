<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <BtnIcon />
      <q-card-actions vertical class="q-px-none q-pb-xl">
        <q-btn push class="q-mb-lg text-italic text-bold" color="red-10" text-color="pink-2" size="25px" label="Gerar orçamento" />
        <q-btn push class="q-mb-lg text-italic text-bold" color="red-9" text-color="red-2" size="25px" label="Promoções da loja" />
        <q-btn push class="q-mb-lg text-italic text-bold" color="red-8" text-color="pink-1" size="25px" label="Cupons especiais" />
        <q-btn push class="q-mb-lg text-italic text-bold" color="red-7" text-color="red-1" size="25px" label="Meus dados" />
        <q-separator inset class="q-mb-md" />
        <q-btn flat color="grey-6" size="20px" no-caps>
          <div class="row items-center no-wrap">
            <q-icon left name="share" />
            <div class="text-left">
              Compartilhe o aplicativo<br>e ganhe descontos
            </div>
          </div>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import BtnIcon from 'components/BtnIcon.vue'

export default defineComponent({
  name: 'MainPage',

  components: {
    BtnIcon
  }
}
)
</script>
