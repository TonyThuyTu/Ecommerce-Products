import ListProducts from "@/components/admin/listProducts/listProducts";

export const metadata = {
  title: "All Products | Admin",
  description: "Browse all products in MyShop",
};

export default function listProductPage () {

    return (

        <>
        
            <ListProducts />

        </>

    );

}