<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-btn class="" round color="cyan-10" icon="close" @click="goBack" />

      <q-card-section horizontal>
        <q-card-section class="col-5 flex flex-center">
          <q-img class="rounded-borders" :src="user.profile_img" />
        </q-card-section>

        <q-card-section class="q-pt-xs">
          <div class="text-h2 q-mt-sm q-mb-xs">
            <span>{{ user.first_name }} {{ user.last_name }}</span>
          </div>
          <div class="text-h5">
            Email:
            <span class="text-grey-8">{{ user.email }}</span>
          </div>
          <div class="text-h5">
            Phone Number:
            <span class="text-grey-8">{{ user.phone_number }}</span>
          </div>
          <div class="text-h6">
            Address: <span class="text-grey-8">{{ user.address }}</span>
          </div>
          <div class="text-h6">
            Gender:
            <span class="text-grey-8">{{ user.gender }}</span>
          </div>
          <div class="text-h6">
            Joined:
            <span class="text-grey-8">{{ user.createdAt }}</span>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useUsersStore } from "../stores/user-store.js";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const usersStore = useUsersStore();
const user = ref({});

const goBack = () => {
  router.push({ name: "indexPage" });
};

onMounted(async () => {
  const id = router.currentRoute.value.params.id;
  await usersStore.getUserById(id);
  user.value = usersStore.userDetails;
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}
</style>
