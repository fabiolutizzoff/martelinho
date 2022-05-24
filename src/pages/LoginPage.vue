<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card-actions vertical>
        <q-input v-model="email" filled type="email" label="Email" />
        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="senha">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn color="primary" label="LOGIN" />
        <q-btn flat color="primary" label="Esqueci minha senha" />
      </q-card-actions>
    </div>
  </q-page>
</template>

<script>

</script>
