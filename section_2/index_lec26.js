new Vue({
  el: '#app',
  data: {
    title: 'Vue JS Section 2, Lecture 26',
    attachRed: false
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
});
