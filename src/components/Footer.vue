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
              Túto vzorovú službu vytvoril a ju prevádzkuje
              <a class="idsk-footer__link" href="https://ludovit.scholtz.sk"
                >Ľudovít Scholtz</a
              >.<br />
              Vytvorené v súlade s
              <a
                href="https://idsk.gov.sk/"
                class="idsk-footer__link"
                target="_blank"
                rel="noopener noreferrer"
                >Jednotným dizajn manuálom elektronických služieb.</a
              ><br /><a
                href="https://korona.gov.sk/vyhlasenie-o-pristupnosti/"
                class="idsk-footer__link"
                >Vyhlásenie o prístupnosti</a
              >
            </div>
          </span>
          <h2 class="govuk-visually-hidden">Dôležité odkazy</h2>
          <div class="textwidget">
            <ul class="idsk-footer__inline-list">
              <li class="idsk-footer__inline-list-item">
                <a
                  class="idsk-footer__link"
                  title="Koronavírus a Slovensko - Domov"
                  href="https://korona.gov.sk/"
                >
                  Hlavná stránka korona.gov.sk
                </a>
              </li>
              <li class="idsk-footer__inline-list-item">
                Call centrum:
                <a class="idsk-footer__link" href="tel:00421232353030"
                  >02/3235&nbsp;3030</a
                >
              </li>
              <li class="idsk-footer__inline-list-item">
                <a
                  class="idsk-footer__link"
                  href="https://korona.gov.sk/co-je-covid-19/"
                >
                  Čo je COVID-19 </a
                ><a class="idsk-footer__link" href="https://korona.gov.sk/faq/">
                  FAQ
                </a>
              </li>
              <li class="idsk-footer__inline-list-item">
                <a
                  class="idsk-footer__link"
                  href="https://korona.gov.sk/ludia/"
                >
                  Ľudia
                </a>
              </li>
            </ul>
          </div>
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
              <li class="idsk-footer__inline-list-item">
                <a
                  class="idsk-footer__link"
                  href="https://github.com/scholtz/covid-sk-android"
                >
                  Android OCR: - Xamarin, Tesseract
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
          - business owner
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