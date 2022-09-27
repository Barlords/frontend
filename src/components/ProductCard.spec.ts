import { mount, VueWrapper } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";
import { beforeEach, describe, expect, it } from "vitest";
import Product from "@/models/Product";
import Card from "primevue/card";
import Skeleton from "primevue/skeleton";

describe("ProductCard", () => {
  let wrapper: VueWrapper;
  let product: Product;

  beforeEach(() => {
    product = new Product({
      id: 5,
      name: "Test product",
      price: 6789,
      description: "Test description",
    });
    wrapper = mount(ProductCard, {
      props: { product },
      global: {
        components: {
          Card: Card,
          Skeleton: Skeleton,
        },
      },
    });
  });

  it("should display the name correctly", () => {
    expect(wrapper.find("[data-testid=name]").text()).toStrictEqual(
      "Test product"
    );
  });

  it("should display the description correctly", () => {
    expect(wrapper.find("[data-testid=description]").text()).toStrictEqual(
      "Test description"
    );
  });

  it("should display the price correctly", () => {
    expect(wrapper.find("[data-testid=price]").text()).toStrictEqual("67.89 €");
  });
});
