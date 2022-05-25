<template>
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <div>
            <q-btn round color="white" icon="menu" />
          </div>
          <q-toolbar-title class="text-center">
            <q-img
              src="~assets/logo-sanxs.png"
              spinner-color="white"
              style="max-width: 150px; display: block; margin-left: auto; margin-right: auto"
            />
          </q-toolbar-title>
          <div>
            <q-btn round color="yellow" icon="alarm" />
          </div>
        </q-toolbar>
      </q-header>

      <q-footer bordered class="bg-white text-primary">
        <q-tabs
          v-model="tab"
          dense
          align="center"
          class="bg-white text-blue shadow-2"
          :breakpoint="0"
        >
          <q-tab name="facebook" icon="facebook" />
          <q-tab name="chat" icon="chat" />
          <q-tab name="share" icon="share" />
        </q-tabs>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>

</script>
