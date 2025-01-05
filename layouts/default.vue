<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'
</script>

<template>
  <div>
    <BNav>
      <template #basic-nav>
        <BNavItem v-if="$route.path === '/cas'" href="/">
          <span class="d-none d-md-inline">Valencià</span>
          <span class="d-md-none">VAL</span>
        </BNavItem>
        <BNavItem v-else href="/cas">
          <span class="d-none d-md-inline">Castellano</span>
          <span class="d-md-none">CAS</span>
        </BNavItem>
      </template>
      <template #logo-append>València</template>
    </BNav>

    <slot />
  
    <div class="container footer">
      <BFooter variant="dark" />
    </div>
  </div>
</template>

<style lang="scss">
.nav-logo-append {
  margin-left: 1rem;
}

.nav-padding {
  display: none;
}

.footer {
  color: var(--white);
  padding: 1rem;
}
</style>