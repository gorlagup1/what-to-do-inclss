<template>
   <div class="buttons">
       <div v-if="  CurrentUser">
            welcome {{CurrentUser.Name}}
          </div>
         
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
        </div>
        </div>
</template>

<script>
export default {
props:{
    CurrentUser: Object
}
}
</script>

<style>

</style>