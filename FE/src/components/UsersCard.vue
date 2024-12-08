<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card"
      flat
      bordered
      v-for="(item, index) in usersStore.users"
      :key="index"
      @click="goDetails(item.id)"
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="item.profile_img" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            >{{ item.first_name }} {{ item.last_name }}</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-card>

    <q-btn
      class="full-width"
      color="cyan-10"
      label="Show More"
      @click="showMore"
    />
  </div>
</template>

<script setup>
import { useUsersStore } from "../stores/user-store.js";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const usersStore = useUsersStore();
const router = useRouter();

const goDetails = (id) => {
  router.push({ name: "userDetails", params: { id } });
};

const showMore = () => {
  usersStore.showMore();
};

onMounted(() => {
  usersStore.getUsers();
});
</script>

<style lang="scss" scoped>
.my-card {
  background-color: var(--q-secondary);
  color: white;
  border-radius: 10px;
  padding: 20px;

  &:hover {
    background-color: #2bccbd;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
}
</style>
