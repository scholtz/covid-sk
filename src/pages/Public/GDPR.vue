<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Ochrana osobných údajov</h1>
      </b-container>
    </div>
    <b-container class="py-3">
      <b-row>
        <b-col md="12">
          <b-form-checkbox v-model="full" name="check-button" switch>
            Zobraziť verziu pre právnikov
          </b-form-checkbox>
          <b-card no-body class="p-2 my-1">
            <div v-if="$store.state.config.GDRP_PDF">
              <b-card-title>
                <h2>Upresnenie pre zamestnancov</h2>
              </b-card-title>
              <div class="short my-3 py-1">
                <a :href="'./files/' + $store.state.config.GDRP_PDF">{{
                  $store.state.config.GDRP_PDF
                }}</a>
              </div>
            </div>
            <b-card-title>
              <h2>Prečo si od Vás pýtame osobné údaje?</h2>
            </b-card-title>
            <div class="short my-3 py-1">
              V záujme ochrany proti koronavírusu je potrebné otestovať väčšinu
              obyvateľov. Aby mal štát kontrolu kto si test vykonal, je potrebné
              identifikovať každú osobu ktorá podstúpila testovanie.
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              V súvislosti s § 7 Zásada obmedzenia účelu zákona o 18/2018 Z. z.
              z 29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení
              niektorých zákonov, je účel nasledovaný: Otestovať osobu na
              prítomnosť vírusu SARS-CoV-2 a poskytovať s tým spojené služby.
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            Pri spracovaní Vašich osobných údajov dodržiavame nasledovné zásady:
            <ol>
              <li>
                Zásada minimalizácie osobných údajov - zbierame iba údaje ktoré
                su nevyhnutné
              </li>
              <li>
                Zásada správnosti - môžete si opraviť údaje zmenou registrácie.
                Na odbernom mieste Vaše údaje budú skontrolované.
              </li>
              <li>
                Zásada minimalizácie uchovávania - Všetky informácie o Vašej
                návšteve si môžete vymazať po spracovaní. Keďže potrebujeme
                údaje k vygenerovaniu certifikátu, sami Vaše údaje vymažeme až
                keď si certifikát nebudete mať potrebu znovu stiahnuť.
              </li>
              <li>
                Zásada integrity a dôvernosti - Vaše osobné údaje sa prenášajú
                iba cez zabezpečené kanály a používame najsilnejšie bezpečnostné
                algoritmy aby zostali dôverné
              </li>
              <li>
                Zásada zodpovednosti - sprauvávame osobné údaje so zásadami
                spracúvania osobných údajov
              </li>
            </ol>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Spracovávame osobné údaje zákonne?</h2>
            </b-card-title>

            <div class="short my-3 py-1">Áno</div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              V súvislosti s § 13 Zákonnosť spracúvania zákona 18/2018 Z. z. z
              29. novembra 2017 o ochrane osobných údajov a o zmene a doplnení
              niektorých zákonov, je zákonnosť spracúvania nasledovná: a)
              dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných
              údajov aspoň na jeden konkrétny účel. V súvislosti s § 14
              prevádzkovateľ preukazuje že osoba poskytla svoj súhlas zdrojovým
              kódom ktorý neumožňuje odoslanie osobných údajov bez
              predchádzajúceho súhlasu s účelom spracovania osobných údajov.
              Zdrojový kód je dostupný na adrese
              https://github.com/scholtz/covid-sk aj s históriou všetkých zmien
              od jeho vzniku.
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Kto spracováva Vaše osobné údaje?</h2>
            </b-card-title>
            <div class="short my-3 py-1">
              Prevádzkovateľ je {{ $store.state.config.GDRP_PREVADZKOVATEL }}
            </div>
            <div
              class="short my-3 py-1"
              v-if="$store.state.config.GDRP_SPROSTREDKOVATEL"
            >
              Sprostredkovateľ je
              {{ $store.state.config.GDRP_SPROSTREDKOVATEL }}
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú
              získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra
              2017 o ochrane osobných údajov a o zmene a doplnení niektorých
              zákonov, odstavec 1) písmeno a) je prevádzkovateľ
              {{ $store.state.config.GDRP_PREVADZKOVATEL }}.
              <span v-if="$store.state.config.GDRP_SPROSTREDKOVATEL"
                >Sprostredkovateľ podľa § 34 je
                {{ $store.state.config.GDRP_SPROSTREDKOVATEL }}.</span
              >
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Kto je zodpovedný za Vaše osobné údaje?</h2>
            </b-card-title>

            <div class="short my-3 py-1">
              Zodpovedná osoba je
              {{ $store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA }}
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú
              získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra
              2017 o ochrane osobných údajov a o zmene a doplnení niektorých
              zákonov, odstavec 1) písmeno b) je zodpovedná osoba
              {{ $store.state.config.GDRP_PREVADZKOVATEL_ZODPOVEDNA_OSOBA }}.
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Komu Vaše osobné údaje poskytneme?</h2>
            </b-card-title>
            <div class="short my-3 py-1">
              Osobe na odbernom mieste ktorá si Vaše údaje načíta na základe
              Vami poskytnutého kódu a skontroluje s občianskym preukazom,
              Správcovi odberného miesta s rolou Data exporter, ktorý môže
              všetky osoby zo systému vyexportovať a posunúť ďalším orgánom.
              Ministerstvu zdravotníctva, najmä NCZI, Ministerstvu vnútra, najmä
              policajtom pre kontrolu aby ste sa cítili bezpečne že Váš
              okoloidúci vírus neprenáša, a ďalším orgánom verejnej moci ktorým
              sú tieto údaje potrebné.
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú
              získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra
              2017 o ochrane osobných údajov a o zmene a doplnení niektorých
              zákonov, odstavec 1) písmeno e) identifikujeme príjemcu ako každý
              orgán štátnej správy ktorý môže využiť informácie o testovaní a
              odberné miesto, personál odberného miesta, mesto v ktorom sa odber
              vykonáva alebo krajský úrad ktorému reportuje mesto testované
              osoby.
            </div>
          </b-card>

          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Môžu sa Vaše údaje odoslať mimo EÚ?</h2>
            </b-card-title>
            <div class="short my-3 py-1">Nie.</div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú
              získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra
              2017 o ochrane osobných údajov a o zmene a doplnení niektorých
              zákonov, odstavec 1) písmeno f) údaje sa do tretej strany (Mimo
              EÚ) neprenášajú.
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Ako dlho uchováme Vaše osobné údaje.</h2>
            </b-card-title>

            <div class="short my-3 py-1">
              Minimálne tak dlho aby sme si splnili reporting voči orgánom ktoré
              Vaše údaje potrebujú. Maximálne tak dlho kým môžete potrebovať
              dôkaz o vykonaní testu. Ak si po 5 dňoch od vykonania testu
              stlačíte tlačítko vymazať údaje testu, Vaše osobné údaje vymažeme
              a nebudete si následne vygenerovať certifikát o absolvovaní testu.
              Niektoré osobné údaje na základe ktorých vás nie je možné určiť
              jednoznačne (meno a rok narodenia) si pre kontrolu výsledkov testu
              necháme po celú dobu trvania projektu.
            </div>
            <div class="long bg-light col-11 offset-1 my-3 py-1" v-if="full">
              V súvislosti s § 19 Poskytované informácie, ak osobné údaje sú
              získané od dotknutej osoby zákona 18/2018 Z. z. z 29. novembra
              2017 o ochrane osobných údajov a o zmene a doplnení niektorých
              zákonov, odstavec 2) písmeno a) sú kritéria na určenie doby
              uchovávania osobných údajov nasledovné: Minimálne tak dlho aby sa
              splnil reporting voči orgánom ktoré údaje potrebujú. Maximálne tak
              dlho kým môže osoba potrebovať dôkaz o vykonaní testu.
            </div>
          </b-card>

          <b-card no-body class="p-2 my-1">
            Máte právo požadovať od prevádzkovateľa prístup k osobným údajom
            týkajúcich sa dotknutej osoby, o práve na opravu osobných údajov, o
            práve na vymazanie osobných údajov alebo o práve na obmedzenie
            spracúvania osobných údajov, o práve namietať spracúvanie osobných
            údajov, ako aj o práve na prenosnosť osobných údajov, kedykoľvek
            svoj súhlas odvolať, podať návrh na začatie konania podľa § 100 a
            získať od prevádzkovateľa potvrdenie o tom, či sa spracúvajú osobné
            údaje, ktoré sa jej týkajú.
          </b-card>

          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Aké údaje sa zbierajú?</h2>
            </b-card-title>

            <div class="short my-3 py-1">
              Údaje ukladané v súvislosti s klientami: Meno, Priezvisko, Dátum
              narodenia, Rodné číslo, Číslo cestovného pasu, Bydlisko, Ulica,
              Číslo domu, PSČ, Obec, Telefónne číslo, E-mail adresa, Zdravotná
              poisťovňa, Údaje o úkone, Dátum a čas úkonu, Typ úkonu (napr.
              antigénový test), Číslo úkonu (napr. testu), Výsledok úkonu (napr.
              testu), IP Adresy, Časy jednotlivých eventov a ďalšie údaje
              spojené s prevádzkou informačných systémov
            </div>
          </b-card>
          <b-card no-body class="p-2 my-1">
            <b-card-title>
              <h2>Ďalšie upresnenia</h2>
            </b-card-title>

            <div class="short my-3 py-1">
              Slovenská republika, Úrad verejného zdravia, Ministerstvo
              zdravotníctva Slovenskej republiky, Ministerstvo vnútra Slovenskej
              republiky, Policajný zbor a ďalšie inštitúcie Slovenskej republiky
              a Európskej únie vyžadujú alebo môžu vyžadovať a prevádzkovateľ
              služby im poskytuje osobné dáta osôb, ktorým bol vykonaný úkon.
              Osobné dáta osôb sú ukladané v službe Rýchlejšie.sk výhradne v
              elektronickej podobe v cloud prostredí Microsoft Azure, lokalita
              západná Európa v zašifrovanej podobe. Osobné údaje v rozsahu Meno,
              Rok narodenia a dátum vykonania testu môžu byť odosielané
              prostredníctvom SMS správy. Všetky osobné údaje môžu byť odoslané
              v emailovej komunikácii v zašifrovanej podobe (v PDF). Meno osoby
              môže byť odoslané v emailovej komunikácii v nešifrovanej podobe.
              Logovacie služby ako npr papertrail, azure logs a podobné môžu
              obsahovať IP adresy, hash identifikačných údajov alebo hash
              kontaktných údajov. Služby tretích strán na poskytovanie emailu,
              SMS správ alebo iných správ môžu ukladať správy odoslané cez ich
              službu, čas komunikácie a iné metadáta špecifické pre danú službu.
              Služby tretích strán sú primárne MailGun, SendGrid, GoSMS alebo
              iné.
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full: true,
    };
  },
};
</script>