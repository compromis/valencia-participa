<template>
  <section class="card rounded shadow calendar-card">
    <div class="card-padding">
      <h2 class="calendar-title">{{ $t('calendar.heading') }}</h2>
      <img src="../assets/images/tear-off-calendar_1f4c6.png" alt="Calendari" class="calendar-icon" />
      <p v-if="$i18n.locale === 'val'" class="calendar-text">
        A Compromís la teua veu compta, per
        això <strong>convocarem assemblees de
        ciutat on podràs decidir sobre les
        propostes per millorar València </strong> que
        portem al Ple de l’Ajuntament
      </p>
      <p v-if="$i18n.locale === 'cas'" class="calendar-text">
        A Compromís la teua veu compta, per
        això <strong>convocarem assemblees de
        ciutat on podràs decidir sobre les
        propostes per millorar València </strong> que
        portem al Ple de l’Ajuntament
      </p>
    </div>
    <ul class="calendar-events">
      <li>
        <div>
          <h3>La Torre</h3>
          Plaça de l’Esglèsia
        </div>
        <div class="date">Data per determinar</div>
      </li>
      <li>
        <div>
          <h3>Castellar l’Oliveral</h3>
          Plaça Major
        </div>
        <div class="date">Data per determinar</div>
      </li>
      <li>
        <div>
          <h3>Forn d’Alcedo</h3>
          Carrer de baix
        </div>
        <div class="date">Data per determinar</div>
      </li>
      <li>
        <div>
          <h3>Barris de València</h3>
          Plaça del Pilar
        </div>
        <div class="date">Data per determinar</div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.calendar-card {
  max-width: var(--max-width);
  margin-inline: auto;
  padding: 0;
  position: relative;
}

.calendar-icon {
  position: absolute;
  width: 9rem;
  top: -3rem;
  right: -2rem;
  rotate: 5deg;
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
  padding-right: 5rem;
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