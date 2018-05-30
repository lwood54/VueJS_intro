new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
  computed: {
    result: function() {
      return this.value === 37 ? 'match! value is now 37' : 'Not quite there.';
    }
  },
  watch: {
    result: function() {
      let vThis = this;
      setTimeout(() => {
        vThis.value = 0;
      }, 5000);
    }
  }
});
