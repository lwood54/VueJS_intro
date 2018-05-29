new Vue({
  el: '#exercise',
  data: {
    highlighted: false,
    currentClass: '',
    userClass: '',
    shadesOfGray: '',
    upsize: false
  },
  computed: {},
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.currentClass =
          this.currentClass === 'highlight' ? 'shrink' : 'highlight';
      }, 2000);
    },
    makeBig: function(ev) {
      console.log(ev.target.value);
      return (this.upsize =
        ev.target.value.toLowerCase() === 'yes' ? true : false);
    }
  }
});
