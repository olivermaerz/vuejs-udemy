<template>
  <form @submit.prevent="submitData" action="">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="enteredName" id="name">
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" v-model="enteredPhone" id="phone">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" v-model="enteredEmail" id="email">
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits: ['add-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  methods: {
    submitData() {
      this.$emit(
          'add-friend',
          this.enteredName,
          this.enteredPhone,
          this.enteredEmail,
      )
    }
  }
}
</script>

<style scoped>

</style>