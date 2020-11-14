<template>
  <div>
    <ul class="header-megamenu nav">
      <li class="nav-item">
        <b-button variant="link" id="exPopover33">
          <span>
            <i class="nav-link-icon pe-7s-gift" />
            Footer Menu
            <font-awesome-icon class="ml-2 opacity-5" icon="angle-up" />
          </span>
        </b-button>
      </li>
      <li class="nav-item">
        <b-dropdown
          variant="link"
          menu-class="dropdown-menu-lg"
          no-caret
          dropup
          right
        >
          <span slot="button-content">
            Grid Menu
            <font-awesome-icon class="ml-1 opacity-5" icon="angle-up" />
          </span>
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-tempting-azure">
              <div class="menu-header-image dd-header-bg-1" />
              <div class="menu-header-content text-dark">
                <h5 class="menu-header-title">Two Column Grid</h5>
                <h6 class="menu-header-subtitle">
                  Easy grid navigation inside popovers
                </h6>
              </div>
            </div>
          </div>
          <div class="grid-menu grid-menu-2col">
            <div class="no-gutters row">
              <div class="col-sm-6">
                <button
                  class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark"
                >
                  <i
                    class="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2"
                  />Automation
                </button>
              </div>
              <div class="col-sm-6">
                <button
                  class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger"
                >
                  <i
                    class="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2"
                  />Reports
                </button>
              </div>
              <div class="col-sm-6">
                <button
                  class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success"
                >
                  <i
                    class="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2"
                  />Activity
                </button>
              </div>
              <div class="col-sm-6">
                <button
                  class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-focus"
                >
                  <i
                    class="lnr-gift text-focus opacity-7 btn-icon-wrapper mb-2"
                  />Settings
                </button>
              </div>
            </div>
          </div>
          <ul class="nav flex-column">
            <li class="nav-item-divider nav-item" />
            <li class="nav-item-btn clearfix nav-item">
              <div class="float-left">
                <button class="btn btn-link btn-sm">Link Button</button>
              </div>
              <div class="float-right">
                <button class="btn-shadow btn btn-info btn-sm">
                  Info Button
                </button>
              </div>
            </li>
          </ul>
        </b-dropdown>
      </li>
    </ul>
    <b-popover
      @show="onPopoverShow"
      ref="PopoverMegaMenu2"
      target="exPopover33"
      triggers="focus"
      placement="bottomright"
    >
      <div class="dropdown-mega-menu dropdown-mega-menu-sm">
        <div class="grid-menu grid-menu-2col">
          <div class="no-gutters row">
            <div class="col-sm-6 col-xl-6">
              <ul class="nav flex-column">
                <li class="nav-item-header nav-item">Overview</li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    ><i class="nav-link-icon lnr-inbox" /><span
                      >Contacts</span
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    ><i class="nav-link-icon lnr-book" /><span>Incidents</span>
                    <div class="ml-auto badge badge-pill badge-danger">5</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    ><i class="nav-link-icon lnr-picture" /><span
                      >Companies</span
                    ></a
                  >
                </li>
                <li class="nav-item">
                  <a
                    disabled=""
                    href="javascript:void(0);"
                    class="nav-link disabled"
                    ><i class="nav-link-icon lnr-file-empty" /><span
                      >Dashboards</span
                    ></a
                  >
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-xl-6">
              <ul class="nav flex-column">
                <li class="nav-item-header nav-item">Sales &amp; Marketing</li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link">Queues</a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    >Resource Groups</a
                  >
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    >Goal Metrics
                    <div class="ml-auto badge badge-warning">3</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link">Campaigns</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  methods: {
    onPopoverShow() {
      this.$refs.PopoverMegaMenu2._toolpop
        .getTipElement()
        .classList.add("rm-max-width");
    },
  },
};
</script>