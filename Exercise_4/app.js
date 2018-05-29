new Vue({
  el: '#exercise',
  data: {
    highlighted: false,
    currentClass: '',
    userClass: '',
    shadesOfGray: '',
    choseUpSize: false,
    width: 100,
    toggle: false,
    progressBarWidth: 0
  },
  computed: {
    switchColor: function() {
      return {
        backgroundColor: this.toggle ? 'orange' : 'maroon'
      };
    },
    progressBar: function() {
      return {
        backgroundColor: 'blue',
        height: '20px',
        width: this.progressBarWidth + 'px'
      };
    }
  },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.currentClass =
          this.currentClass === 'highlight' ? 'shrink' : 'highlight';
      }, 2000);
    },
    increaseSize: function(ev) {
      console.log(ev.target.value);
      this.choseUpSize = ev.target.value.toLowerCase() === 'yes' ? true : false;
    },
    startProgress: function() {
      setInterval(() => {
        this.progressBarWidth += 5;
        if (this.progressBarWidth >= 100) {
          this.progressBarWidth = 0;
        }
      }, 1000);
    }
  }
});
