let app = new Vue({
  el: '#app',
  data: {
    playerNamesStyle: {
      height: '150px',
      padding: '0%'
    },
    playerContainer: {
      marginLeft: '10%',
      wordWrap: 'break-word'
    },
    playerProgressBar: 100,
    playerSpecialAttacksLeft: 3,
    monsterContainer: {
      marginRight: '10%',
      wordWrap: 'break-word'
    },
    monsterProgressBar: 100
  },
  computed: {
    playerProgress: function() {
      return {
        borderRadius: '5px',
        height: '20px',
        width: this.playerProgressBar + '%'
      };
    },
    bgProgress: function() {
      return {
        borderRadius: '5px',
        marginBottom: '10px',
        height: '20px'
      };
    },
    monsterProgress: function() {
      return {
        borderRadius: '5px',
        height: '20px',
        width: this.monsterProgressBar + '%'
      };
    },
    bgplayerProgress: function() {
      return {
        borderRadius: '5px',
        marginBottom: '10px',
        height: '20px'
      };
    }
  },
  methods: {
    attack: function() {
      const randomPlayer = Math.floor(Math.random() * 4);
      const randomMonster = Math.floor(Math.random() * 8);
      this.playerProgressBar -= randomPlayer;
      this.monsterProgressBar -= randomMonster;
      if (this.playerProgressBar <= 0 || this.monsterProgressBar <= 0) {
        this.playerProgressBar = 100;
        this.monsterProgressBar = 100;
        this.playerSpecialAttacksLeft = 3;
      }
    },
    special: function() {
      if (this.playerSpecialAttacksLeft > 0) {
        this.playerSpecialAttacksLeft -= 1;
        const randomSpecial = Math.floor(Math.random() * 10);
        const randomSpecialCost = Math.floor(Math.random() * 4);
        this.playerProgressBar -= randomSpecialCost;
        this.monsterProgressBar -= randomSpecial;
      }
      if (this.playerProgressBar <= 0 || this.monsterProgressBar <= 0) {
        this.playerProgressBar = 100;
        this.monsterProgressBar = 100;
        this.playerSpecialAttacksLeft = 3;
      }
    },
    heal: function() {},
    reset: function() {}
  }
});
