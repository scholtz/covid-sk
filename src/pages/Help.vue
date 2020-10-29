<template>
  <div>
    <div class="app-pane-lgray py-2">
      <b-container>
        <h1>Pomoc s testovaním</h1>
      </b-container>
    </div>

    <b-container class="py-4" fluid>
      <b-row>
        <b-col>
          <h2 class="text-center">Ako sú moje osobné údaje chránené?</h2>
          <b-container>
            <p>
              Osobné údaje sú odoslané na server v momente keď stlačíte tlačítko
              registrácia. Komunikácia so serverom je šifrovaná SSL protokolom.
            </p>
            <p>
              Údaje sú uložené v no-sql databáze. Sú zašifrované AES256 metódou
              ktorá sa považuje za najvyšší štandard bezpečnosti uložených
              údajov. 2 heslá sú nastavené administrátorom.
            </p>
            <p>
              Autorizovaná osoba môže podľa kódu registrácie načítať vaše osobné
              údaje. Autorizované osoby sú pozvané do systému. Žiadna z
              autorizovaných osôb nemá možnosť zobraziť zoznam registračných
              kódov. Môžu vyhľadávať podľa rodného čísla (v db zahashované),
              alebo podľa kódu registrácie.
            </p>
            <p>
              Autorizované osoby sa prihlasujú heslom, a autozivoané požiadavky
              na server prebiehajú s JWT tokenom.
            </p>
            <p>
              Výsledok testovania je dostupný všetkým osobám ktoré majú kód
              registrácie a posledné 4 čísla rodného čísla. Dbajte na bezpečnosť
              prideleného kódu registrácie.
            </p>
          </b-container>
          <div class="text-center">
            <h2>Registrácia</h2>
            <img
              style="margin: 0 auto"
              src="../assets/images/process/registration.svg"
            />
            <h2>Testovanie</h2>
            <img
              style="margin: 0 auto"
              src="../assets/images/process/testing.svg"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
</style>