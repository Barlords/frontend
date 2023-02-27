<script lang="ts" setup>
import { inject, onMounted, ref } from "vue";
import type ProductsHttpService from "@/services/products-http-service";
import type Product from "@/models/Product";
import ProductCard from "@/components/ProductCard.vue";
import { useToast } from "primevue/usetoast";

const productService = inject<ProductsHttpService>("productService");

const isLoading = ref<boolean>(true);
const products = ref<Product[]>([]);
const toast = useToast();

onMounted(() => {
  if (productService) {
    productService
      .getAllProducts()
      .then((result) => {
        isLoading.value = false;
        products.value = result;
      })
      .catch(() => {
        console.log("Error !!!");
        toast.add({
          severity: "error",
          summary: "Network Error",
          detail:
            "Les produits n'ont pas été chargés. Vérifier la connectivité à votre backend :)",
          life: 8000,
        });
      });
  }
});
</script>

<template>
  <div id="home-products" v-if="isLoading">
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
  </div>
  <div id="home-products" v-else>
    <!--suppress JSUnresolvedVariable -->
    <ProductCard
      v-for="product in products"
      :product="product as Product"
      :key="product.id"
    ></ProductCard>
  </div>
</template>

<style>
#home-products {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
