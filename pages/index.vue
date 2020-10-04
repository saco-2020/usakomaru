<template>
  <v-row>
    <v-col cols="12">
      <v-img
        src="/overview-map.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12">
      <h2 class="mb-5">在庫</h2>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>
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
          head: 1,
          stomache: 2,
          fever: 3,
          chill: 8,
          diabetic: 0,
        },
        {
          name: 'A薬局(予測)',
          head: 14,
          stomache: 5,
          fever: 10,
          chill: 13,
          diabetic: 4,
        },
        {
          name: 'B薬局',
          head: 4,
          stomache: 3,
          fever: 4,
          chill: 0,
          diabetic: 2,
        },
        {
          name: 'B薬局(予測)',
          head: 5,
          stomache: 3,
          fever: 8,
          chill: 5,
          diabetic: 16,
        },
        {
          name: 'C薬局',
          head: 10,
          stomache: 3,
          fever: 6,
          chill: 8,
          diabetic: 18,
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
          name: 'D薬局(予測)',
          head: 14,
          stomache: 3,
          fever: 24,
          chill: 36,
          diabetic: 9,
        },
      ],
    }
  },
}
</script>
