<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: white">
        <q-toolbar-title>
          <q-img
            src="~assets/logo-sanxs.png"
            spinner-color="white"
            style="max-width: 150px; display: block; margin-left: auto; margin-right: auto"
          />
        </q-toolbar-title>
        <div><q-btn round color="brown-5" icon="directions" /></div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

</script>
