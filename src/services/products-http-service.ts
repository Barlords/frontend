import type { AxiosInstance } from "axios";
import axios from "axios";
import Product from "@/models/Product";
import type ProductResponse from "@/models/ProductResponse";

export default class ProductsHttpService {
  #client: AxiosInstance;

  constructor() {
    this.#client = axios.create({
      baseURL: "http://localhost:8000/",
    });
  }

  getAllProducts(): Promise<Product[]> {
    return this.#client.get<ProductResponse[]>("products/").then((response) =>
      response.data.map(
        (productResponse) =>
          new Product({
            id: productResponse.id,
            name: productResponse.name,
            description: productResponse.description,
            price: productResponse.price,
          })
      )
    );
  }

  getProductById(id: number): Promise<Product> {
    return this.#client.get<ProductResponse>(`products/${id}/`).then(
      (productResponse) =>
        new Product({
          id: productResponse.data.id,
          name: productResponse.data.name,
          description: productResponse.data.description,
          price: productResponse.data.price,
        })
    );
  }
}
