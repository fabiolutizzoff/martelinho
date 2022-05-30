<template>
  <q-card-actions align="around" class="q-pb-xl">
    <q-btn round color="grey-10" icon="my_location" />
    <q-btn round color="grey-9" glossy icon="local_grocery_store" />
    <q-btn round color="grey-8" icon="my_location" />
    <q-btn round color="grey-7" icon="local_grocery_store" />
  </q-card-actions>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BtnIcon'
})
</script>
