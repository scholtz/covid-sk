<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>
          Na tejto stránke sa môžete zaregistrovať k odberu vzorky pre hromadné
          testovanie populácie proti chorobe covid-19
        </h1>
      </b-container>
    </div>

    <div class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6">
      <b-container>
        <h2>Táto aplikácia bola vytvorená pre mesto Pezinok</h2>
      </b-container>
    </div>

    <div class="py-2">
      <b-container>
        <b-row>
          <b-col cols="12" md="6">
            <ol class="steps">
              <li>Výber odberného miesta a času</li>
              <li>Registrácia ku konkrétnemu času</li>
              <li>Reálny odber vzorky</li>
              <li>Výsledky testu</li>
              <li>Certifikát v papierovej forme</li>
            </ol>

            <b-link
              to="/register"
              target="_self"
              role="button"
              draggable="false"
              class="govuk-button govuk-!-margin-right-3 govuk-button--start my-4"
              data-module="govuk-button"
              >Začnite výberom odberného miesta
              <svg
                class="govuk-button__start-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="17.5"
                height="19"
                viewBox="0 0 33 40"
                role="presentation"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M0 0h13l20 20-20 20H0l20-20z"
                /></svg
            ></b-link>
          </b-col>
          <b-col cols="12" md="6">
            <div>
              <div class="alert alert-danger">
                <b
                  >Vyskúšajte si, ako by mohla vyzerať verzia testovania s
                  podporou IT</b
                >
              </div>

              <ul>
                <li>Čas strávený pri odbere - <b>10 až 20</b> sekúnd</li>
                <li>Žiadne fronty</li>
                <li>Jasná definícia práce s osobnými údajmi</li>
              </ul>
              <p>
                Web je optimalizovaný pre chrome a ostatné prehliadače ktoré
                dodržiavajú štandardy. Práca registračného manažéra a
                laboratórneho medika vyžaduje mobilný prístup s povolenou
                kamerou pre scanovanie čiarových kódov.
              </p>
              <p>
                Vyskúšajte si jednotlivé role:
                <b-table-simple>
                  <b-tr>
                    <b-th>Login</b-th>
                    <b-th>Heslo</b-th>
                  </b-tr>
                  <b-tr>
                    <b-td>RegistrationManager</b-td
                    ><b-td>!_b_59i?7E</b-td></b-tr
                  >
                  <b-tr> <b-td>MedicTester</b-td><b-td> 62f@Ok$XUV</b-td></b-tr>
                  <b-tr> <b-td>MedicLab</b-td><b-td>v@F?RvbR2O</b-td></b-tr>
                  <b-tr>
                    <b-td>DocumentManager</b-td><b-td>LwY@9bQx0M</b-td></b-tr
                  >
                </b-table-simple>
              </p>
            </div>
            <!--
            <div class="alert alert-danger">
              <p>
                Odberné miesta v tejto aplikácii sú určené iba pre osoby ktoré
                žijú v meste Pezinok a blízkom okolí
              </p>
            </div>
            <div class="text-center">
              <img
                src="../assets/images/pezinok.svg"
                width="200px"
                class="m-2 d-none d-sm-block m-auto"
              />
            </div>
            -->
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
</style>