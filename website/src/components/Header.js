const HeaderContent = ({ isSticky }) => {
  return (
    <div class={`hdr-content ${isSticky ? "hdr-content-sticky" : ""}`}>
      <div class="container">
        <div class="row">
          <div class="col-auto show-mobile">
            {/* <!-- Menu Toggle --> */}
            <div class="menu-toggle">
              <a href="#" class="mobilemenu-toggle">
                <i class="icon-menu"></i>
              </a>
            </div>
            {/* <!-- /Menu Toggle --> */}
            <div class="col-auto hdr-logo">
              <a href="index.html" class="logo">
                <img
                  srcSet="/images/logo.png 1x, /images/logo2x.png 2x"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header class="hdr-wrap">
      <HeaderContent isSticky />
      <div class="hdr">
        <HeaderContent />
      </div>
    </header>
  );
};
