<template>
  <footer class="idsk-footer" role="contentinfo">
    <div class="govuk-width-container">
      <div class="idsk-footer__meta">
        <div class="idsk-footer__meta-item footer-logo-wrap">
          <div class="footer-logo-inner">
            <div class="textwidget">
              <a
                class="idsk-footer__link"
                href="https://www.pezinok.sk/"
                style="display: block"
              >
                <img src="../assets/images/pezinok.svg" width="80px"
              /></a>
            </div>
          </div>
        </div>
        <div class="idsk-footer__meta-item idsk-footer__meta-item--grow">
          <span class="idsk-footer__licence-description">
            <div class="textwidget">
              Prevádzkovateľom služby je Scholtz &amp; Company, j.s.a.<br />
              <a class="idsk-footer__link" href="#/terms-and-conditions"
                >Obchodné podmienky</a
              ><br />
              <a class="idsk-footer__link" href="#/pricing"
                >Cenník pre odberné miesta</a
              >
            </div>
          </span>
          <h2 class="govuk-visually-hidden">Dôležité odkazy</h2>

          <div class="textwidget">
            <ul class="idsk-footer__inline-list">
              <li class="idsk-footer__inline-list-item">
                OpenSource zdrojové kódy:
              </li>
              <li class="idsk-footer__inline-list-item">
                <a
                  class="idsk-footer__link"
                  href="https://github.com/scholtz/covid-sk"
                >
                  FE: vue.js
                </a>
              </li>
              <li class="idsk-footer__inline-list-item">
                <a
                  class="idsk-footer__link"
                  href="https://github.com/scholtz/covid-sk-api"
                >
                  BE: .NET Core API
                </a>
              </li>
              <li class="idsk-footer__inline-list-item">
                <a
                  class="idsk-footer__link"
                  href="https://hub.docker.com/r/scholtz2/mass-covid-testing-api"
                >
                  BE: Docker image
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="govuk-width-container">
      <h5>Aplikácia bola podporená</h5>
      <ul>
        <li>
          <a class="idsk-footer__link" href="https://www.pezinok.sk/"
            >Mestom Pezinok</a
          >
          - prvý business owner
        </li>
        <li>
          <a class="idsk-footer__link" href="https://ludovit.scholtz.sk/"
            >Ľudovít Scholtz</a
          >
          - Architekt
        </li>
        <li>
          <a class="idsk-footer__link" href="https://www.gosms.eu/">GoSMS</a> -
          Zadarmo SMSky pre testovacie účely
        </li>
        <li>
          <a class="idsk-footer__link" href="https://www.srdcomdoma.sk/"
            >oz. SrdcomDoma</a
          >
          - Rebranding, pomoc s vývojom, testovaním a procesmi
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>
