<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h2 class="mb-5">在庫</h2>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>

    <!-- <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col> -->
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      headers: [
        {
          text: '薬局名',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '頭痛薬', value: 'head' },
        { text: '腹痛薬', value: 'stomache' },
        { text: '解熱剤', value: 'fever' },
        { text: '風邪薬', value: 'chill' },
        { text: '軟膏', value: 'diabetic' },
      ],
      desserts: [
        {
          name: 'A薬局',
          head: 10,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
        {
          name: 'A薬局(予測)',
          head: 14,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
        {
          name: 'B薬局',
          head: 14,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
        {
          name: 'B薬局',
          head: 14,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
        {
          name: 'C薬局',
          head: 14,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
        {
          name: 'C薬局(予測)',
          head: 14,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
        {
          name: 'D薬局',
          head: 14,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
        {
          name: 'D薬局',
          head: 14,
          stomache: 2,
          fever: 24,
          chill: 34,
          diabetic: 4,
        },
      ],
    }
  },
}
</script>
