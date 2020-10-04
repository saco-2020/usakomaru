<template>
<div>
    <v-row>
        <v-col cols="12">
        <h2>可視化</h2>
        </v-col>
        <br>
        <v-col cols="12" md="6">
        <h3>地表温度</h3>
        <div>
            <v-img
            src="/tanzania.jpeg"
            ></v-img>
        </div>
        </v-col>
        <v-col cols="12" md="6">
        <h3>飢餓指数</h3>
        <div>
            <v-img
            src="/tanzania.jpeg"
            ></v-img>
        </div>
        </v-col>
    </v-row>
    <v-content>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h2 class="mt-3">分析</h2>
                </v-col>
                <v-col cols="12">
                    <Scatter :chartdata="scatterdata" :options="options" />
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</div>
</template>

<style>
.v-content {
  max-width: 80% !important;
}
</style>

<script>
import BarChart from '@/components/BarChart.vue'
import Scatter from '@/components/Scatter.vue'

export default {
  components: {
    BarChart,
    Scatter,
  },
  data() {
    return {
      scatterdata: {
        datasets: [
            {
                label: '頭痛薬',
                data: [{x:24, y:20},{x:40, y:30},{x:13, y:12},{x:20, y:18},{x:30, y:19}],
                backgroundColor: 'mediumvioletred',
                pointRadius: 5,
            },
            {
                label: '腹痛薬',
                data: [{x:24, y:29},{x:40, y:7},{x:13, y:5},{x:20, y:14},{x:30, y:30}],
                backgroundColor: 'teal',
                pointRadius: 5,
            },
            {
                label: '解熱薬',
                data: [{x:24, y:18},{x:40, y:38},{x:13, y:9},{x:20, y:15},{x:30, y:27}],
                backgroundColor: 'gold',
                pointRadius: 5,
            },
            {
                label: '風邪薬',
                data: [{x:24, y:16},{x:40, y:3},{x:13, y:37},{x:20, y:23},{x:30, y:15}],
                backgroundColor: 'darkorange',
                pointRadius: 5,
            },
            {
                label: '軟膏',
                data: [{x:24, y:14},{x:40, y:16},{x:13, y:20},{x:20, y:10},{x:30, y:11}],
                backgroundColor: 'royalblue',
                pointRadius: 5,
            },
        ],
      },
      options: {
        title: {
            display: true,
            text: '薬注文数と地表温度の相関',
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                display: true,
                labelString: '地表温度'
                },
                ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
                stepSize: 5,
                callback: function(value, index, values){
                    return  value
                }
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '薬注文数'
                },
                ticks: {
                    suggestedMax: 40,
                    suggestedMin: 0,
                    stepSize: 10,
                    callback: function(value, index, values){
                        return  value
                    }
                }
            }]
        }
      },
    }
  },
}
</script>