<script>
import { Scatter } from 'vue-chartjs'
export default {
  extends: Scatter,
  props: ['chartdata'],
  mounted() {
    this.renderChart(this.chartdata)
  },
}
</script>
