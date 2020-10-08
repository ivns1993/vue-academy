<template>
  <div class="container mt-4">
    <div class="form-group row">
      <div class="input-group">
        <input type="text" v-model="searchTerm"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <contact-list :contacts="contactsToShow">
          <template slot-scope="izSlota">
            <p>{{ izSlota.contactName }}</p>
          </template>
        </contact-list>
      </div>
      <div class="col-8">
        <ContactDetails :contact="routeContact" @delete="deleteContact" />
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
      contacts: [],
      searchTerm: '',
    }
  },
  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id)
    },
    
    contactsToShow() {
      return this.contacts.filter((contact) => {
        return contact.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          contact.last_name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  },

  async created() {
    const response = await contacts.getAll();
    this.contacts = response.data;
  },

  methods: {
    deleteContact(id) {
      contacts.delete(id).then(() => {
        contacts.getAll().then((response) => {
          this.contacts = response.data;
        });
      });
    }
  }


}
</script>
