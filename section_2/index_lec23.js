new Vue({
  el: '#sec2_lec23',
  data: {
    counter: 0,
    secondCounter: 0,
    githubProfile: 'https://github.com/lwood54',
    codepenProfile: 'https://codepen.io/lwood54/'
  },
  // everything stored in computed can be used like a property,
  // it's not called as a function. It can be used like a property in the 'data' object
  // Even more interesting, computed will only run if it needs to, unlike methods, which
  // will run every time because Vue doesn't know what's inside the function.
  // In computed, you can't actually called 'output' here as a function in the html,
  // it only reads the result of the function and I guess stores it in the variable 'output'.
  // Vue will recognize when the 'output' in computed has changed, which does not occur when
  // secondCounter is increased, which is why this just won't be called, unlike result().
  ///// COMPUTED MUST RUN SYNCNRONOUSLY /////
  computed: {
    output: function() {
      console.log('computed');
      return this.counter > 5
        ? 'Currently greater than 5'
        : 'Currently less than 5';
    }
  },
  // This sort of works like the opposite of computed. You have to identify the property
  // that you want to watch. So clearly it has to match one of the data properties.
  ///// WATCH RUNS ASYNCHRONOUSLY /////
  watch: {
    counter: function(value) {
      // if you use () => {}, then you can just use this.counter
      let vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result: function() {
      console.log('methods');
      return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
    }
  }
});
