export interface Product {
  id: string;
  name: string;
  category: 'inverters' | 'batteries' | 'bundles';
  price: number;
  description: string;
  features: string[];
  image: string;
}

export const mockProducts: Product[] = [
  {
    id: "inv-1",
    name: "Cult Solar Hybrid 5kW",
    category: "inverters",
    price: 1299.99,
    description: "Next-gen 5kW hybrid inverter with ultra-fast seamless switching and smart app control.",
    features: ["5000W Output", "99% Efficiency", "10ms Switch Time", "Wi-Fi Enabled"],
    image: "https://images.unsplash.com/photo-1620804473852-78d120fb2882?auto=format&fit=crop&q=80&w=800", // Using generic tech images for now
  },
  {
    id: "inv-2",
    name: "Cult Pro Power 10kW",
    category: "inverters",
    price: 2499.99,
    description: "Heavy-duty 10kW inverter for entire home backup. Industrial grade components.",
    features: ["10000W Output", "Triple Phase", "Overload Protection", "Smart Grid Ready"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "bat-1",
    name: "Cult Lithium Cell 100Ah",
    category: "batteries",
    price: 899.99,
    description: "Ultra-dense 12V 100Ah LiFePO4 battery with built-in BMS and 6000+ cycle life.",
    features: ["12V 100Ah", "LiFePO4 Chemistry", "6000+ Cycles", "Active Balancing"],
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "bat-2",
    name: "Cult PowerWall 5kWh",
    category: "batteries",
    price: 2999.99,
    description: "Sleek wall-mounted 48V 5kWh battery system perfect for residential energy storage.",
    features: ["48V 100Ah", "Wall Mounted", "10-Year Warranty", "Liquid Cooled"],
    image: "https://images.unsplash.com/photo-1592833159057-69de43da0dc4?auto=format&fit=crop&q=80&w=800",
  },
];
