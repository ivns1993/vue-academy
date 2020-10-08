<template>
  <div>
    <div class="card">
      <ul class="list-group list-group-flush" v-if="contact">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.first_name }} {{ contact.last_name }}</li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ contact.email | addStars }}</li>
        <li class="list-group-item"><i class="fas fa-phone fa-fw"></i> {{ contact.number }}</li>
        <router-link :to="{ name: 'edit', params: { id: contact.id } }">Edit</router-link>
        <button @click="deleteContact(contact.id)">Delete</button>
      </ul>
      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contact'],

  filters: {
    addStars(value) {
      const valueWithStars = `***${value}***`;

      return valueWithStars;
    }
  },

  methods: {
    deleteContact(id) {
      this.$emit('delete', id);
    }
  }
}
</script>
