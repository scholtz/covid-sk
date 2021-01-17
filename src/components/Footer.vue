<template>
  <footer class="idsk-footer" role="contentinfo">
    <b-container :fluid="fluid">
      <b-row>
        <b-col offset-md="2" md="4">
          <h5>Aplikáciu podporili:</h5>
          <ul>
            <li>
              <a class="idsk-footer__link" href="https://www.pezinok.sk/"
                >Mesto Pezinok</a
              >
              - prvé nasadenie na Slovensku
            </li>
            <li>
              <a class="idsk-footer__link" href="https://ludovit.scholtz.sk/"
                >Ľudovít Scholtz</a
              >
              - architekt
            </li>
            <li>
              <a class="idsk-footer__link" href="https://www.gosms.eu/"
                >GoSMS</a
              >
              - bezplatné SMSky pre testovacie účely
            </li>
            <li>
              <a class="idsk-footer__link" href="https://www.srdcomdoma.sk/"
                >Srdcom doma o.z.</a
              >
              - rebranding, pomoc s vývojom, testovaním a procesmi
            </li>
          </ul>
        </b-col>
        <b-col md="4">
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
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    fluid: Boolean,
  },
};
</script>
