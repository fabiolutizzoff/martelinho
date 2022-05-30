<template>
  <q-page class="flex row flex-center">
    <q-card-section class="my-card col-12 col-sm-8 col-md-6 q-px-none" style="max-width: 400px">
      <q-card-section>
        <div class="text-h4">{{ text1 }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ text2 }}
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-px-none">
        <q-form>
          <q-badge color="white" text-color="grey">Usuário</q-badge>
          <q-input outlined v-model="text" class="q-mb-md" />
          <q-badge color="white" text-color="grey">Senha</q-badge>
          <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
            <q-btn flat color="primary" label="Esqueceu a senha?" class="q-mb-md" no-caps />
          <q-card-actions vertical class="q-px-none">
            <q-btn color="red" text-color="white" label="Entrar" class="q-mb-md" no-caps />
          </q-card-actions>
        </q-form>
          <q-separator inset class="q-mb-md" />
          <q-card-actions vertical class="q-px-none">
            <q-btn outline color="red" text-color="grey" icon="img:src/assets/GoogleIcon.png" label="Entrar com Google" class="q-mb-md" no-caps/>
          </q-card-actions>
      </q-card-section>
      <q-card-section class="q-pt-none" align="center">
          Novo no app? Cadastre-se
      </q-card-section>
    </q-card-section>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text1: 'Entrar',
      text2: 'O app profissional do martelinho de ouro',
      password: ref(''),
      isPwd: ref(true)
    }
  }
}
</script>
