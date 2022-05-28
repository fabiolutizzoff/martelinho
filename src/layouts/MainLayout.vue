<template>
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-img
              src="~assets/logo-sanxs.png"
              spinner-color="white"
              style="max-width: 150px; display: block; margin-left: auto; margin-right: auto"
            />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>

</script>
