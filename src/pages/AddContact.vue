<template>
  <div class="container mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <label for="first_name" class="col-4 col-form-label">First Name</label>
        <div class="col-8">
          <div class="input-group">
            <input id="first_name" v-model="contact.first_name" name="first_name" type="text" required="required" class="form-control here">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="last_name" class="col-4 col-form-label">Last Name</label>
        <div class="col-8">
          <div class="input-group">
            <input id="last_name" v-model="contact.last_name" name="last_name" type="text" required="required" class="form-control here">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email</label>
        <div class="col-8">
          <input id="email" v-model="contact.email" name="email" type="email" required="required" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <label for="number" class="col-4 col-form-label">Number</label>
        <div class="col-8">
          <div class="input-group">
            <input id="number" v-model="contact.number" name="number" type="tel" required="required" class="form-control here">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { contacts } from '../services/Contacts';

export default {
  data() {
    return {
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        number: ''
      }
    }
  },

  created() {
    if (this.$route.params.id) {
      this.getUser();
    }
  },

  methods: {
    addUser() {
      contacts.add(this.contact).then(() => {
        this.$router.push('/contacts');
      });
    },

    getUser() {
      contacts.getOne(this.$route.params.id).then((response) => {
        this.contact = response.data;
      });
    },

    onSubmit() {
      if (this.$route.params.id) {
        this.editUser();
      } else {
        this.addUser();
      }
    },

    editUser() {
      contacts.edit(this.contact).then(() => {
        this.$router.push('/contacts');
      });
    },
  }
}
</script>