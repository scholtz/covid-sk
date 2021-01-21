<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>{{ $t("helpTitle") }}</h1>
      </b-container>
    </div>
    <div>
      <b-container class="py-4">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Na úvod" active>
              <b-card-text>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="p-3" block v-b-toggle.accordion-1>{{
                        $t("helpCommonQ1")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="public-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpCommonA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-card-text>
            </b-tab>

            <b-tab title="Verejnosť">
              <b-card-text>
                <div class="accordion" role="tablist">

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="p-3" block v-b-toggle.accordion-1>{{
                        $t("helpPublicQ0")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="public-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpPublicA0')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="p-3" block v-b-toggle.accordion-10>{{
                        $t("helpPublicQ1")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-10"
                      accordion="public-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpPublicA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="p-3" block v-b-toggle.accordion-2>{{
                        $t("helpPublicQ2")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-2"
                      accordion="public-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpPublicA2')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="p-3" block v-b-toggle.accordion-3>{{
                        $t("helpPublicQ3")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-3"
                      accordion="public-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpPublicA3')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="p-3" block v-b-toggle.accordion-4>{{
                        $t("helpPublicQ4")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-4"
                      accordion="public-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpPublicA4')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-card-text>
            </b-tab>



            <b-tab title="Prevádzkovateľ">
              <b-card-text>
                <div class="accordion" role="tablist">
                  
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-provider-1
                        >{{ $t("helpProviderQ1") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-provider-1"
                      visible
                      accordion="provider-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpProviderA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-provider-2
                        >{{ $t("helpProviderQ2") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-provider-2"
                      visible
                      accordion="provider-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpProviderA2')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-provider-3
                        >{{ $t("helpProviderQ3") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-provider-3"
                      visible
                      accordion="provider-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpProviderA3')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  
                </div>
              </b-card-text>
            </b-tab>

            <b-tab title="Administrátor">
              <b-card-text>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-admin-1
                        >{{ $t("helpAdminQ1") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-admin-1"
                      visible
                      accordion="admin-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpAdminA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-admin-2
                        >{{ $t("helpAdminQ2") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-admin-2"
                      accordion="admin-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpAdminA2')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-admin-3
                        >{{ $t("helpAdminQ3") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-admin-3"
                      accordion="admin-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpAdminA3')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-admin-4
                        >{{ $t("helpAdminQ4") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-admin-4"
                      accordion="admin-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpAdminA4')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-admin-5
                        >{{ $t("helpAdminQ5") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-admin-5"
                      accordion="admin-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpAdminA5')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-admin-6
                        >{{ $t("helpAdminQ6") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-admin-6"
                      accordion="admin-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpAdminA6')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                </div>
              </b-card-text>
            </b-tab>

            <b-tab title="Testovanie I.">
              <b-card-text>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-testing-1
                        >{{ $t("helpAdminQ1") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-testing-1"
                      visible
                      accordion="admin-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <iframe src="https://player.vimeo.com/video/502757010?byline=0&portrait=0" width="300" height="533" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-card-text>
            </b-tab>
            
          </b-tabs>
        </b-card>
      </b-container>
    </div>
  </div>
</template>


<script>
export default {};
</script>
<style lang="scss">
</style>