<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Posledný krok registrácie - Osobné údaje</h1>
        <p>
          Údaje o Vašom testovaní, vrátane osobných údajov môžete vymazať zo
          stránky výsledky testu ak sa preukáže, že ochorenie covid19 nemáte. V
          prípade pozitívne nálezu budú postúpené hygiene. Po dobu testovania
          budú Vaše osobné údaje chránené šifrovaním AES256. Všetky osobné údaje
          budú z tejto databáze odstránené najneskôr do 2 pracovných dní od
          posledného dňa testovania.
        </p>
      </b-container>
    </div>
    <div class="app-pane-blue govuk-!-padding-top-6 govuk-!-padding-bottom-6">
      <b-container>
        <h2>
          Vybrali ste si {{ $route.params.placeId }}, dňa
          {{ $route.params.dayId }}
        </h2>
      </b-container>
    </div>

    <b-container class="my-4">
      <b-row>
        <b-col cols="4">
          <label for="name">Meno</label>
          <b-input id="name" />
        </b-col>
        <b-col cols="4">
          <label for="lastname">Priezvisko</label>
          <b-input id="lastname" />
        </b-col>
        <b-col cols="4">
          <label for="rc">Rodné číslo / Číslo cestovného dokladu</label>
          <b-input id="rc" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <label for="address">Adresa miesta pobytu</label>
          <b-input id="address" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <label for="phone">Telefón bez medzier s predvoľbou štátu</label>
          <b-input id="phone" value="+421" />
        </b-col>
        <b-col cols="6">
          <label for="email">Email</label>
          <b-input id="email" type="email" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="my-2">
          <p>
            Cieľom registrácie pred návštevou odberného miesta je minimalizovať
            čas potrebný pre výkon testu. V ideálnom prípade doktor nascanuje
            čiarový kód Vašej registrácie, čiarový kód na testovacej súprave, a
            vykoná odobratie vzorky. Stlačením tlačítka nižšie vytvoríte svoj
            jedinečný kód registrácie, ktorý s kombináciou posledných 4 čísel
            rodného čísla (cestovného dokladu pre cudzincov) použijete aj na
            zistenie výsledku testu na tejto stránke.
          </p>
          <p>
            Ďalšiu osobu (partnera/ku, deti) budete môcť pridať po Vašej
            registrácii k vybranému termínu. Každá osoba má svoj unikátny kód
            registrácie.
          </p>

          <b-link class="govuk-button"> Zaregistrovať </b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: [],
    };
  },
  mounted() {
    for (let i = 10; i < 18; i++) {
      this.hours.push({ from: i, to: i + 1, registrations: i });
    }
  },
};
</script>
<style lang="scss">
</style>