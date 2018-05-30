let vm = new Vue({
  el: '#app',
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    persons: [
      { name: 'Logan', age: 36, color: 'blue' },
      { name: 'Max', age: 27, color: 'red' }
    ],
    games: ['Fortnite', 'BLOPS4', 'FarCry5']
  },
  computed: {
    personKeyStyle: function() {
      return {
        display: 'inline-block',
        color: 'blue',
        margin: '2px'
      };
    },
    personValueStyle: function() {
      return {
        display: 'inline-block',
        color: 'green',
        margin: '2px'
      };
    }
  }
});
