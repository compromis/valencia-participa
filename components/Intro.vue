<script setup>
const config = useRuntimeConfig()
const { data: stats } = useFetch(config.public.apiBase + 'stats')
</script>

<template>
  <section class="intro" id="intro">
    <img src="~assets/images/men-at-work-down-under.svg" alt="" class="men-at-work-the-80s-band" />
    <article class="card rounded shadow intro-card">
      <h2 class="intro-title">
        {{ $t('intro.title') }}
      </h2>

      <p v-if="$i18n.locale === 'val'" class="intro-text">
        El govern de PP i VOX han eliminat les propostes dels veïns i veïnes per millorar la ciutat. María José Catalá no vol escoltar al veïnat de València, però <strong>Compromís volem seguir escoltant les vostres propostes</strong> per debatre-les en assemblees ciutadanes i portar-les al Ple de l’Ajuntament de València, on també donarem veu al veïnat.
      </p>

      <p v-if="$i18n.locale === 'cas'" class="intro-text">
        El gobierno de PP y VOX han eliminado las propuestas de los vecinos y vecinas para mejorar la ciudad. María José Catalá no quiere escuchar a los vecinos de València, pero <strong>Compromís queremos seguir escuchando vuestras propuestas</strong> para debatirlas en asambleas ciudadanas y llevarlas al Pleno del Ayuntamiento de València, donde también daremos voz a los vecinos.
      </p>

      <div class="facts">
        <div class="fact">
          <AnimatedNumber class="fact-number" :from="0" :to="stats.town" :duration="1.25" />
          <span class="fact-text">{{ $t('facts.pobles') }}</span>
        </div>

        <div class="fact">
          <AnimatedNumber class="fact-number" :from="0" :to="stats.city" :duration=".75" />
          <span class="fact-text">{{ $t('facts.barris') }}</span>
        </div>
      </div>
    </article>
    <!--<aside class="video shadow">
      <IntroVideo />
    </aside>-->
  </section>
</template>

<style lang="scss" scoped>
.intro {
  position: relative;
  margin: calc(2rem + 5vh) 0;
  display: flex;
  gap: 1rem;

  &-title {
    font-size: var(--text-2xl);
    letter-spacing: -.03em;
  }

  &-text {
    font-size: var(--text-lg);
    margin-top: 2rem;
  }
}

.men-at-work-the-80s-band {
  position: absolute;
  top: 2px;
  left: 1rem;
  transform: translateY(-100%);
  width: 25vw;
  max-width: 300px;
}

.video {
  width: 100%;
  background: var(--gray-900);
  overflow: hidden;
  border-radius: 1rem;
  position: relative;

  iframe {
    display: block;
    height: 100%;
    width: 100%;
    aspect-ratio: 9 / 16;
  }
}

.intro-card {
  max-width: unset;
  display: flex;
  flex-direction: column;
}

.facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: calc(var(--card-padding) * -1);
  margin-top: auto;
}

.fact {
  padding: var(--card-padding);
  border-top: 1px var(--gray-300) solid;

  &-number {
    display: block;
    font-weight: bold;
    font-size: var(--text-3xl);
    font-weight: 900;
    letter-spacing: -.03em;
    line-height: 1.1;
  }

  &-text {
    display: block;
    line-height: 1.25;
    font-size: var(--text-md);
  }
}

@media (max-width: 1200px) {
  .intro {
    flex-direction: column;
  }
}

@include media-breakpoint-down(md) {
  .fact {
    grid-column: span 2;
  }
}
</style>