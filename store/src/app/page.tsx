import { createClient } from '@/utils/supabase/server';
import Hero from '@/components/home/Hero';

export default async function Home() {
  const supabase = await createClient();
  
  // Connection Test (we can keep this running silently to ensure stability or log it)
  const { error } = await supabase.from('products').select('*').limit(1);
  const isConnected = !error || error.message.includes('Could not find the table') || error?.code === '42P01';

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      
      {/* Dev-only connection status indicator at the very bottom right */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className={`px-3 py-1.5 rounded-full border text-[10px] font-mono backdrop-blur-md ${isConnected ? 'border-green-500/50 text-green-400 bg-green-500/10' : 'border-red-500/50 text-red-400 bg-red-500/10'}`}>
          {isConnected ? 'DB: Connected' : 'DB: Failed'}
        </div>
      </div>
    </main>
  );
}
