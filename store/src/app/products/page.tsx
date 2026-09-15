import ProductCard from "@/components/products/ProductCard";
import { createClient } from "@/utils/supabase/server";
import { Product } from "@/lib/mock-data"; // Keeping the type definition

export default async function ProductsPage() {
  const supabase = await createClient();
  
  // Fetch real data from the backend
  const { data: products, error } = await supabase.from('products').select('*');
  
  // If there's an error (like table not created yet), default to empty array safely
  const displayProducts = (products || []) as Product[];

  return (
    <main className="container mx-auto px-6 py-24 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Our <span className="text-[#fb21ff]">Products</span>
          </h1>
          <p className="text-neutral-400 text-lg">
            Explore our premium range of hybrid inverters and high-density lithium batteries designed for maximum reliability.
          </p>
        </div>
      </div>
      
      {displayProducts.length === 0 ? (
        <div className="text-center py-24 text-neutral-500">
          <p>No products found in the database. Please run the setup SQL!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
