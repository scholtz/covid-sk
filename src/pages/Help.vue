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
            <b-tab title="Verejnosť" active>
              <b-card-text>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
                      <b-button class="p-3" block v-b-toggle.accordion-1>{{
                        $t("helpPublicQ1")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="public-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpPublicA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
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
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
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
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
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
            <b-tab title="Administrátor">
              <b-card-text>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
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
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
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
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
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
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
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
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Medic Tester / Registration manager">
              <b-card-text>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-tester-1
                        >{{ $t("helpTesterQ1") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-tester-1"
                      visible
                      accordion="tester-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpTesterA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-tester-2
                        >{{ $t("helpTesterQ2") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-tester-2"
                      accordion="tester-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpTesterA2')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-tester-3
                        >{{ $t("helpTesterQ3") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-tester-3"
                      accordion="tester-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpTesterA3')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
                      <b-button
                        class="p-3"
                        block
                        v-b-toggle.accordion-tester-4
                        >{{ $t("helpTesterQ4") }}</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-tester-4"
                      accordion="tester-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpTesterA4')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Medic Lab">
              <b-card-text>
                <div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
                      <b-button class="p-3" block v-b-toggle.accordion-lab-1>{{
                        $t("helpLabQ1")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-lab-1"
                      visible
                      accordion="lab-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpLabA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Document Manager">
              <b-card-text
                ><div class="accordion" role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header
                      header-tag="header"
                      class="p-0 govuk-button"
                      role="tab"
                    >
                      <b-button class="p-3" block v-b-toggle.accordion-doc-1>{{
                        $t("helpDocQ1")
                      }}</b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-doc-1"
                      visible
                      accordion="doc-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <div v-html="$t('helpDocA1')" />
                      </b-card-body>
                    </b-collapse>
                  </b-card></div
              ></b-card-text>
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