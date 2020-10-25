<template>
  <div>
    <ul class="header-megamenu nav">
      <li class="nav-item">
        <b-button variant="link" id="exPopover3">
          <span>
            <i class="nav-link-icon pe-7s-gift" />
            Mega Menu
            <font-awesome-icon class="ml-2 opacity-5" icon="angle-down" />
          </span>
        </b-button>
      </li>
      <li class="nav-item">
        <b-dropdown variant="link" no-caret>
          <span slot="button-content">
            <div class="badge badge-pill badge-danger ml-0 mr-2">4</div>
            Settings
            <font-awesome-icon class="ml-1 opacity-5" icon="angle-down" />
          </span>
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-focus">
              <div class="menu-header-image opacity-2 dd-header-bg-5" />
              <div class="menu-header-content">
                <h5 class="menu-header-title">Overview</h5>
                <h6 class="menu-header-subtitle">
                  Dropdown menus for everyone
                </h6>
              </div>
            </div>
          </div>
          <div class="scroll-area-xs">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
              <h6 tabindex="-1" class="dropdown-header">Key Figures</h6>
              <button type="button" tabindex="0" class="dropdown-item">
                Service Calendar
              </button>
              <button type="button" tabindex="0" class="dropdown-item">
                Knowledge Base
              </button>
              <button type="button" tabindex="0" class="dropdown-item">
                Accounts
              </button>
              <div tabindex="-1" class="dropdown-divider" />
              <button type="button" tabindex="0" class="dropdown-item">
                Products
              </button>
              <button type="button" tabindex="0" class="dropdown-item">
                Rollup Queries
              </button>
            </VuePerfectScrollbar>
          </div>
          <ul class="nav flex-column">
            <li class="nav-item-divider nav-item" />
            <li class="nav-item-btn nav-item">
              <button class="btn-wide btn-shadow btn btn-danger btn-sm">
                Cancel
              </button>
            </li>
          </ul>
        </b-dropdown>
      </li>
      <li class="nav-item">
        <b-dropdown
          variant="link"
          no-caret
          class="dropdown-menu-rounded"
          menu-class="dropdown-menu-lg"
        >
          <span slot="button-content">
            <i class="nav-link-icon pe-7s-settings" />
            Projects
            <font-awesome-icon class="ml-1 opacity-5" icon="angle-down" />
          </span>
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-success">
              <div class="menu-header-image opacity-1 dd-header-bg-3" />
              <div class="menu-header-content text-left">
                <h5 class="menu-header-title">Overview</h5>
                <h6 class="menu-header-subtitle">Unlimited options</h6>
                <div class="menu-header-btn-pane">
                  <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                  <button class="btn-icon btn-icon-only btn btn-warning btn-sm">
                    <i class="pe-7s-config btn-icon-wrapper" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button type="button" tabindex="0" class="dropdown-item">
            <i class="dropdown-icon lnr-file-empty" />Graphic Design
          </button>
          <button type="button" tabindex="0" class="dropdown-item">
            <i class="dropdown-icon lnr-file-empty" />App Development
          </button>
          <button type="button" tabindex="0" class="dropdown-item">
            <i class="dropdown-icon lnr-file-empty" />Icon Design
          </button>
          <div tabindex="-1" class="dropdown-divider" />
          <button type="button" tabindex="0" class="dropdown-item">
            <i class="dropdown-icon lnr-file-empty" />Miscellaneous
          </button>
          <button type="button" tabindex="0" class="dropdown-item">
            <i class="dropdown-icon lnr-file-empty" />Frontend Dev
          </button>
        </b-dropdown>
      </li>
    </ul>
    <b-popover
      @show="onPopoverShow"
      ref="PopoverMegaMenu"
      target="exPopover3"
      triggers="focus"
      placement="bottomright"
    >
      <div class="dropdown-mega-menu">
        <div class="grid-menu grid-menu-3col">
          <div class="no-gutters row">
            <div class="col-sm-6 col-xl-4">
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
                    disabled
                    href="javascript:void(0);"
                    class="nav-link disabled"
                    ><i class="nav-link-icon lnr-file-empty" /><span
                      >Dashboards</span
                    ></a
                  >
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-xl-4">
              <ul class="nav flex-column">
                <li class="nav-item-header nav-item">Favourites</li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    >Reports Conversions</a
                  >
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    >Quick Start
                    <div class="ml-auto badge badge-success">New</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link"
                    >Users &amp; Groups</a
                  >
                </li>
                <li class="nav-item">
                  <a href="javascript:void(0);" class="nav-link">Proprieties</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-xl-4">
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
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VuePerfectScrollbar,
  },

  methods: {
    onPopoverShow() {
      this.$refs.PopoverMegaMenu._toolpop
        .getTipElement()
        .classList.add("rm-max-width");
    },
  },
};
</script>
