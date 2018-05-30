new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alertUser: function() {
      alert('You have been alerted.');
    },
    handleKeydown: function(ev) {
      this.value = ev.target.value;
    },
    handleEnter: function(ev) {
      this.value = `You want to say: ${ev.target.value}`;
    }
  }
});
