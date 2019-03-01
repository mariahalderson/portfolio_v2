export default{

  template: /*html */ `
    <header>
      <div class="content-container">

        <div class="logo-container">
          <img src="assets/images/logo.svg">
        </div>

        <div id="hamburgerMenu" class="hamburger-container">
          <div class="hamburger-line line-1"></div>
          <div class="hamburger-line line-2"></div>
          <div class="hamburger-line line-3"></div>
        </div>

        <nav id="mainNavigation">
          <ul class="navigation">
            <li><a href="#" class="navigation-link">home</a></li>
            <li><a href="#" class="navigation-link">about</a></li>
            <li><a href="#" class="navigation-link">portfolio</a></li>
            <li><a href="#" class="navigation-link">resume</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  `,

  data: function(){
    return{

    }
  },

  methods: {}

}
