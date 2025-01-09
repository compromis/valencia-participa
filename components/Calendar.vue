<template>
  <section class="card rounded shadow calendar-card">
    <div class="card-padding">
      <h2 class="calendar-title">{{ $t('calendar.heading') }}</h2>
      <p v-if="$i18n.locale === 'val'" class="calendar-text">
        A Compromís la teua veu compta, per
        això <strong>convocarem assemblees de
        ciutat on podràs decidir sobre les
        propostes de reconstrucció</strong> que
        portem al Ple de l’Ajuntament
      </p>
      <p v-if="$i18n.locale === 'cas'" class="calendar-text">
        A Compromís la teua veu compta, per
        això <strong>convocarem assemblees de
        ciutat on podràs decidir sobre les
        propostes de reconstrucció</strong> que
        portem al Ple de l’Ajuntament
      </p>
    </div>
    <ul class="calendar-events">
      <li>
        <h3>La Torre <span>18 de febrer, 19h</span></h3>
        Plaça de l’Esglèsia
      </li>
      <li>
        <h3>Castellar l’Oliveral <span>18 de febrer, 19h</span></h3>
        Plaça Major
      </li>
      <li>
        <h3>Forn d’Alcedo <span>20 de febrer, 19h</span></h3>
        Carrer de baix
      </li>
      <li>
        <h3>Barris de València <span>25 de febrer, 18h</span></h3>
        Plaça del Pilar
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.calendar-card {
  max-width: var(--max-width);
  margin-inline: auto;
  padding: 0;
}

.card-padding {
  padding: var(--card-padding);
}

.calendar-title {
  font-size: var(--text-xl);
  letter-spacing: -.04em;
  margin-bottom: 1rem;
}

.calendar-text {
  font-size: var(--text-md);
}

.calendar-events {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding-inline: var(--card-padding);
    padding-block: 1rem;
    border-top: 1px var(--gray-300) solid;
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: var(--text-md);

    span {
      margin-inline-start: auto;
    }
  }
}
</style>