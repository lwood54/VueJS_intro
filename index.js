var app = new Vue({
  el: '#app',
  data: {
    vueTitle: 'Title Hello',
    lwgitHubLink: 'https://github.com/lwood54',
    // NOTE: You open yourself up to cross-site scripting attacks if this is exposed to
    // outside input by users.
    finishedLink:
      '<a href="https://codepen.io/lwood54/" target=_blank >Codepen.io Profile</a>'
  },
  methods: {
    sayHello: function() {
      // can't user arrow functions here, special binding done by Vue
      this.vueTitle = 'updated hello';
      return this.vueTitle;
    }
  }
});
