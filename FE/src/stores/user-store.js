import axios from "axios";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("UsersModule", {
  state: () => ({
    users: [],
    userDetails: {},
    currentPage: 1,
    pageSize: 20,
  }),
  actions: {
    async getUsers() {
      try {
        const response = await axios.get("http://localhost:3000/users", {
          params: {
            page: this.currentPage,
            size: this.pageSize,
          },
        });

        this.users = [...this.users, ...response.data.data.users];
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    async getUserById(id) {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        this.userDetails = response.data.user;
      } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
      }
    },

    showMore() {
      this.currentPage++;
      this.getUsers();
    },
  },
});
