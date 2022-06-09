<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-pa-none" style="max-width: 400px">
      <BtnIcon />
      <q-card-actions vertical class="q-px-none q-pb-xl">
        <q-form>
          <p>{{ estados }}</p>
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
      estados: ref([])
    }
  },
  methods: {
    getEstados () {
      this.$axios.get('https://lucre7combr.pipedrive.com/api/v1/deals:(title)?status=won&api_token=a17cd786b809463b1a2d18053d021a349a618991')
        .then((res) => {
          this.estados = res.data
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getEstados()
  }
}
)
</script>
