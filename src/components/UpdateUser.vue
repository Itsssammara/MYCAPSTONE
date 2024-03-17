<template>
  <div>
      <button type="button " class="btn modalButton" data-bs-toggle="modal" data-bs-target="#UpdateUserModal">
Update
</button>
<div class="modal fade" id="UpdateUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Insert User Details</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form  @submit.prevent="updateUser">
        <div class="mb-3">
            <input type="number" class="form-control w-50 mx-auto" placeholder="User ID" v-model="payload.userID">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="First Name" v-model="payload.firstName">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Last Name" v-model="payload.lastName">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control w-50 mx-auto" placeholder="Age" v-model="payload.userAge">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Gender" v-model="payload.gender">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="Role" v-model="payload.userRole">
          </div>
        <div class="mb-3">
            <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.emailAdd">
        </div>
        <div class="mb-3">
            <input type="password" class="form-control w-50 mx-auto" placeholder="Password" v-model="payload.userPass">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control w-50 mx-auto" placeholder="User Profile" v-model="payload.userProfile">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-success" @click="(event)=>updateUser(userID)" >Update User</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  </div>
</template>

<script>
import sweet from 'sweetalert'
  export default {
      name: 'UpdateUser',
      data(){
        return{
          payload: {
            userID: '',
              firstName:'',
              lastName:'',
              userRole:'',
              gender:'',
              userAge: '',
              emailAdd:'',
              userPass:'',
              userProfile:'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'
          }
        }
      },

      methods: {

async updateUser() {
try {
  await this.$store.dispatch('updateUser', {id:this.payload.userID, packet:this.payload} );
  sweet({
        title: 'Update Successful',
        text: 'User has been updated successfully!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);

} catch (error) {
  console.error(error);
  sweet({
        title: 'Error',
        text: 'Failed to update user',
        icon: 'error',
        timer: 2000
      });
      
      setTimeout(() => {
        window.location.reload();
      }, 3000);
}
}
}
  }
</script>

<style scoped>

</style>