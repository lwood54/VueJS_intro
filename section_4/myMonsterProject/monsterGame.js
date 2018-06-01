let app = new Vue({
  el: '#app',
  data: {
    message: 'hello Vue',
    playerNamesStyle: {
      height: '150px',
      padding: '0%'
    },
    playerContainer: {
      marginLeft: '10%'
    },
    playerProgressBar: 100,
    monsterContainer: {
      marginRight: '10%'
    },
    monsterProgressBar: 100
  },
  computed: {
    playerProgress: function() {
      return {
        backgroundColor: 'blue',
        height: '20px',
        width: this.playerProgressBar + '%'
      };
    },
    monsterProgress: function() {
      return {
        backgroundColor: 'green',
        height: '20px',
        width: this.monsterProgressBar + '%'
      };
    }
  },
  methods: {
    attack: function() {
      if (this.playerProgressBar <= 0 || this.monsterProgressBar <= 0) {
        this.playerProgressBar = 100;
        this.monsterProgressBar = 100;
      } else {
        this.playerProgressBar -= 5;
        this.monsterProgressBar -= 6;
      }
    }
  }
});
