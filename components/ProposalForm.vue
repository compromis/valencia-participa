<script setup>
import BInputGroup from '@compromis/blobby/components/inputs/BInputGroup.vue'
import BInput from '@compromis/blobby/components/inputs/BInput.vue'
import BSelect from '@compromis/blobby/components/inputs/BSelect.vue'
import BCheckbox from '@compromis/blobby/components/inputs/BCheckbox.vue'
import BButton from '@compromis/blobby/components/button/BButton.vue'

const { locale } = useI18n()
const config = useRuntimeConfig()

const form = reactive({
  area: null,
  town: '',
  postal_code: '',
  name: '',
  phone: '',
  type: '',
  description: '',
  privacy: false,
  lang: locale.value,
})

const submitting = ref(false)
const submitted = ref(false)
const errors = ref(null)

async function submit() {
  console.log('submitting')
  submitting.value = true

  try {
    await $fetch(config.public.apiBase + 'submit', {
      method: 'POST',
      body: form
    })
    submitted.value = true
  } catch (e) {
    errors.value = e
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section v-if="!submitted" class="card rounded shadow form-card" id="proposa">
    <h2 class="form-title">{{ $t('form.heading') }}</h2>
    <form @submit.prevent="submit">
      <InputRadioButtons
        id="area"
        v-model="form.area"
        :options="[
          { value: 'town', label: $t('form.area.1') },
          { value: 'city', label: $t('form.area.2') }
        ]"
      />
      
      <Transition name="slide">
        <div v-if="form.area" class="form-container">
          <BInputGroup class="form-group">
            <BSelect
              v-if="form.area === 'town'"
              id="town"
              :label="$t('form.town')"
              v-model="form.town"
              required
              variant="float"
            >
              <option value="La Torre">La Torre / Faitanar</option>
              <option value="Forn d'Alcedo">Forn d’Alcedo</option>
              <option value="Castellar-l'Oliveral">Castellar-l’Oliveral</option>
            </BSelect>
            <BInput
              id="name"
              :label="$t('form.name')"
              v-model="form.name"
              required
              variant="float"
            />
            <BInput
              id="phone"
              :label="$t('form.phone')"
              v-model="form.phone"
              required
              variant="float"
            />
            <BSelect
              id="type"
              :label="$t('form.type')"
              v-model="form.type"
              required
              variant="float"
            >
              <option value="Obres necessàries">{{ $t('form.types.1') }}</option>
              <option value="Serveis Socials">{{ $t('form.types.2') }}</option>
              <option value="Parcs i Jardins">{{ $t('form.types.3') }}</option>
              <option value="Serveis Municipals">{{ $t('form.types.4') }}</option>
              <option value="Mobilitat">{{ $t('form.types.5') }}</option>
              <option value="Altres">{{ $t('form.types.6') }}</option>
            </BSelect>
            <InputTextarea
              name="description"
              :label="$t('form.description')"
              v-model="form.description"
              required
            />
          </BInputGroup>
          <BCheckbox v-model="form.privacy" name="privacy" value="Accepte" required class="privacy my-4">
            <template v-if="$i18n.locale === 'cas'">
              Acepto la <a href="https://compromis.net/avis-legal/">política de privacidad</a> y doy consentimiento para que <strong>Compromís</strong> tramite las alegaciones expuestas en mi nombre.
            </template>
            <template v-else>
              He llegit i accepte la <a href="https://compromis.net/avis-legal/">política de privacitat</a>.
              Accepte rebre correus electrònics o SMS de Compromís amb la finalitat de mantindre’m
              informa’t sobre la meua proposta.
            </template>
          </BCheckbox>
          <BButton type="submit" variant="primary" size="lg" :disabled="submitting">
            {{ $t('form.submit') }}
          </BButton>
        </div>
      </Transition>
    </form>
  </section>
  <section v-else class="card rounded shadow form-card" id="proposa">
    <h1>{{ $t('form.submitted.headline') }}</h1>
    <p>{{ $t('form.submitted.text') }}</p>
  </section>
</template>

<style lang="scss">
.form-card {
  max-width: var(--max-width);
  margin-inline: auto;
  margin-block: calc(2rem + 5vh);
}

.form-group .card {
  box-shadow: none !important;
  border: 1px var(--gray-300) solid;
  padding: 0;
}

.form-container {
  margin-top: 1.5rem;
}
</style>