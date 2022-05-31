<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <BtnIcon />
      <q-card-actions vertical class="q-px-none q-pb-xl">
        <q-form>
          <q-badge color="white" text-color="grey" class="q-ml-md">Estados</q-badge>
          <q-select outlined rounded v-model="estado" :options="estados" class="q-mb-md" />
        </q-form>
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
  data () {
    return {
      estado: ref(null),
      estados: ['sigla']
    }
  },
  methods: {
    getEstdos () {
      this.$axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((res) => {
          this.getEstdos = res.data
          console.log()
        })
    }
  },
  mounted () {
    this.getEstdos()
  }
}
)
</script>
