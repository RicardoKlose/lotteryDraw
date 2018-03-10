<template>
  <section>
    <div class="columns buttons-container">
      <div class="column line-first">
        <button class="button" @click="generateMega">机选5注</button>
      </div>
      <div class="column line-middle">
        <span class="app-title">超级大乐透</span>
      </div>
      <div class="column line-last">
        <button class="button" @click="clear">清空</button>
      </div>
    </div>
    <div
      class="columns balls-container"
      v-for="(result, index) in resultArr"
      :key="index">
      <div
        class="column ball"
        v-for="(num, i) in result.normalArr" :key="i">
        <div class="ball-content normal-ball">{{ num }}</div>
      </div>
      <div
        class="column ball"
        v-for="(num, i) in result.specialArr" :key="i">
        <div class="ball-content special-ball">{{ num }}</div>
      </div>
    </div>
  </section>
</template>


<script>
import { drawNumber } from '../lib/drawNumber';

export default {
  name: 'Mega',
  data() {
    return {
      resultArr: [],
    };
  },
  methods: {
    generateMega() {
      this.clear();
      for (let i = 0; i < 5; i += 1) {
        this.resultArr.push({
          normalArr: drawNumber(35, 5),
          specialArr: drawNumber(12, 2),
        });
      }
    },
    clear() {
      this.resultArr.splice(0);
    },
  },
  mounted() {
    this.generateMega();
  },
};

</script>
