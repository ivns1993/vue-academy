<template>
  <div class="list-group">
    <router-link
      class="list-group-item list-group-item-action"
      tag="button"
      :to="{ name: 'contact-details', params: { id: contact.id }}"
      exact-active-class="active"
      v-for="(contact, key) in contacts"
      :key="key"
    >
      <slot :contactName="contact.first_name | toUpperCase(true) | toLowerCase">
        {{ contact.first_name | toUpperCase(false) }} {{ contact.last_name  | toUpperCase }}
      </slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['contacts'],
}
</script>
