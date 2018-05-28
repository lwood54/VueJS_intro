const app = new Vue({
  el: '#exercise',
  data: {
    name: 'Logan Wood',
    age: 36,
    jupiter_img:
      'https://cnet4.cbsistatic.com/img/SLQ7lfIDl77ND9fooKe3m5Tfi6Y=/2017/06/16/42b23c63-8653-4750-a956-707444cbeb0d/junojupiter.jpg'
  },
  methods: {
    ageX: function(multiplier) {
      return this.age * multiplier;
    },
    random: function(min, max) {
      let num = Math.floor(Math.random() * (max - min) + min);
      return num;
    },
    addYears: function(incrAmnt) {
      this.age += incrAmnt;
    }
  }
});
