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
        <div>
          <h3>La Torre</h3>
          Plaça de l’Esglèsia
        </div>
        <div class="date">18 de febrer, 19h</div>
      </li>
      <li>
        <div>
          <h3>Castellar l’Oliveral</h3>
          Plaça Major
        </div>
        <div class="date">18 de febrer, 19h</div>
      </li>
      <li>
        <div>
          <h3>Forn d’Alcedo</h3>
          Carrer de baix
        </div>
        <div class="date">20 de febrer, 19h</div>
      </li>
      <li>
        <div>
          <h3>Barris de València</h3>
          Plaça del Pilar
        </div>
        <div class="date">25 de febrer, 18h</div>
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
    display: flex;
    gap: .5rem;

    &::before {
      content: '';
      display: block;
      width: 1rem;
      height: 1rem;
      background: var(--blue);
      border-radius: 100%;
      margin-top: .15em;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: var(--text-md);
  }

  .date {
    font-weight: bold;
    margin-inline-start: auto;
    font-size: var(--text-md);
  }
}
</style>