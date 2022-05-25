<template>
    <div class="q-pa-md"
    style="
        max-width: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 150px"
    >
      <div class="q-gutter-y-md column">
        <q-input v-model="email" filled type="email" label="email" />
        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="senha">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
          <q-btn color="primary" label="Login" />
          <q-btn flat color="primary" label="Esqueci minha senha" />
      </div>
    </div>
</template>

<script>

</script>
