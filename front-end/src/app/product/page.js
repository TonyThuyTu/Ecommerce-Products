import GetListProducts from "@/components/client/listAllProducts/getAllProducts";

export const metadata = {
  title: "All Products | MyShop",
  description: "Browse all products in MyShop",
};

export default function ListProductsPage () {

    return (

        <main>
            <GetListProducts />
        </main>

    );

}