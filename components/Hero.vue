<template>
  <h1 class="headline">
    <img src="~assets/images/valencia-participa.svg" alt="València Participa" class="headline-title" />
    <span class="headline-warning">
      {{ $t('header.warning') }}
    </span>
  </h1>
  <div class="cta">
    <a href="#proposa">
      ↓ <span>{{ $t('header.cta') }}</span> ↓
    </a>
  </div>
</template>

<style lang="scss" scoped>
.headline {
  text-align: center;

  &-title {
    height: calc(10rem + 15vh);
  }

  &-warning {
    display: flex;
    background: var(--blue);
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    border-radius: 20rem;
    width: fit-content;
    margin: 4rem auto 2rem;
    text-wrap: balance;
    font-size: var(--text-xl);
    letter-spacing: -.03em;

    img {
      height: 1em;
    }
  }
}

.cta {
  text-align: center;
  font-size: var(--text-lg);

  a {
    color: var(--white);

    &:hover {
      text-decoration: none;

      span {
        text-decoration: underline;
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .headline {
    &-title {
      width: 100%;
      height: auto;
    }

    &-warning {
      margin: 2rem auto 1rem;
    }
  }
  .nav-scrolled .nav-card {
    border-radius: var(--border-radius) !important;
  }
}
</style>