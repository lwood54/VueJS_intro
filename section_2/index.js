var app = new Vue({
  el: '#app',
  data: {
    vueTitle: 'Title Hello',
    lwgitHubLink: 'https://github.com/lwood54',
    // NOTE: You open yourself up to cross-site scripting attacks if this is exposed to
    // outside input by users.
    finishedLink:
      '<a href="https://codepen.io/lwood54/" target=_blank >Codepen.io Profile</a>',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    sayHello: function() {
      // can't user arrow functions here, special binding done by Vue
      this.vueTitle = 'updated hello';
      return this.vueTitle;
    },
    increase: function(step, ev) {
      // every v-on: by Vue stores the event in the variable $event that can
      // be accessed in HTML, and used as shown here. Obviously you could
      // access something and print to the screen or use this info for whatever
      // you need to, like a drag and drop.
      console.log(ev);
      this.counter += step;
    },
    updateCoords: function(ev) {
      this.x = ev.clientX;
      this.y = ev.clientY;
    },
    option1EvStopper: function(ev) {
      ev.stopPropagation();
    },
    alertMe: function() {
      alert('Consider yourself alterted!');
    }
  }
});
