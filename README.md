# Autoilumittari-sovellus

Tämä sovellus on toteutettu Solidabiksen kesän 2021 koodihaasteeseen. Haasteessa tuli toteuttaa autoilumittari, joka pystyisi vertailemaan matka-aikaa ja polttoaineen kulutusta kahdella eri ajonopeudella.

## Tehtävänanto

Haasteessa oli annettu valmiina kolmen eri autotyyppiä, joista käyttäjä voi valita yhden. Autojen bensankulutukset nopeudella 1 km/h olivat seuraavat:
- auto A: 3 l / 100 km
- auto B: 3,5 l / 100 km
- auto C: 4 l / 100 km

Auton bensankulutus kasvoi niin, että auton nopeuden kasvaessa 1 km/h bensankulutus kasvoi 1,009-kertaiseksi.

Käyttäjän tuli syöttää matkustettava etäisyys sekä kaksi eri nopeutta, joita vertailtaisiin. Webkäyttöliittymän tuli pystyä näyttämään molemmista ajonopeuksista matkaan kuluva aika sekä polttoaineen kulutus. Sen lisäksi tuli näyttää matka-ajan ja polttoaineen kulutuksen ero näiden nopeuksien välillä.

## Käytetyt teknologiat

Sovellus on toteutettu Reactilla, ja se on ohjelmoitu Windows-ympäristössä. Sovelluksen layout on responsiivinen, ja se on muotoiltu pääasiassa React Bootstrapilla. Sen lisäksi on käytetty CSS:ää muokkaamaan React Bootstrapin oletusmuotoiluja.

Sovellus on testattu Windows-ympäristössä Chrome-, Firefox- ja Microsoft Edge-selaimilla sekä lisäksi Android- ja iPhone-puhelimilla. Sitä ei ole testattu näytönlukijalla.

## Toteutuksen kuvaus

Sovellus on ohjelmoitu niin, että siinä on App-komponentin lisäksi kolme eri komponenttia, joista sovelluksen layout rakentuu. InputForm-komponentissa on toteutettu lomake, johon käyttäjä syöttää tiedot. Choices-komponentti näyttää senhetkisen valitun bensankulutuksen sekä etäisyyden. Comparison-komponentti huolehtii vertailujen laskutoimituksista ja näyttää tulokset.

InputForm-komponentissa ei ole erillistä lähetysnappia. Ohjelmakoodi on sen sijaan toteutettu niin, että kaksi muuta komponenttia päivittyvät reaaliaikaisesti, kun käyttäjä lisää tai muuttaa tietoa.

Sovellukseen ei ole tehty erillistä backend-toteutusta.

## Linkki sovellukseen

Sovellus löytyy Herokusta: https://rocky-brushlands-86868.herokuapp.com/