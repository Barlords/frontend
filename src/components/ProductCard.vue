<script lang="ts" setup>
import Product from "@/models/Product";

defineProps({
  product: Product,
});

function priceToEuros(price: number) {
  return (price / 100).toFixed(2);
}
</script>

<template>
  <Card v-if="product">
    <template #title>
      <span data-testid="name">
        {{ product.name }}
      </span>
    </template>
    <template #content>
      <span data-testid="description">
        {{ product.description }}
      </span>
    </template>
    <template #footer>
      <span data-testid="price"> {{ priceToEuros(product.price) }} € </span>
    </template>
  </Card>
  <Skeleton v-else></Skeleton>
</template>

<style>
.p-card {
  min-width: 100%;
}
</style>
