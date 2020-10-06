<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <contact-list :contacts="contacts">
          <template slot-scope="izSlota">
            <p>{{ izSlota.contactName }}</p>
          </template>
        </contact-list>
      </div>
      <div class="col-8">
        <ContactDetails :contact="routeContact" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'
import { contacts } from '../services/Contacts';

export default {
  components: {
    ContactList,
    ContactDetails
  },
  data() {
    return {
      contacts: []
    }
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id)
    }
  },

  async created() {
    const response = await contacts.getAll();
    this.contacts = response.data;
  }
}
</script>
