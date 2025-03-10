// data.ts - Coffee Information System

// Define TypeScript interfaces for the data structures
interface CoffeeBean {
    id: string;
    category: string;
    name: string;
    origin: string;
    region: string;
    roastLevel: string;
    certification: string[];
    description?: string;
    imageUrl: string;
  }
  
  interface CoffeeMachine {
    id: string;
    category: string;
    condition: 'New' | 'Refurbished' | 'Used';
    brand: string;
    model: string;
    type: string;
    refurbishmentDetails?: string;
    description?: string;
    imageUrl: string;
  }
  
  interface MachinePart {
    id: string;
    category: string;
    partName: string;
    compatibility: string[];
    type: string;
    description?: string;
    imageUrl: string;
  }
  
  interface RepairService {
    id: string;
    serviceType: string;
    package: string;
    description: string;
    certification?: string;
    turnaroundTime: string;
    imageUrl: string;
  }
  
  interface AdditionalService {
    id: string;
    service: string;
    description: string;
    terms: string;
    imageUrl: string;
  }
  
  // Export the data
  export const coffeeBeans: CoffeeBean[] = [
    {
      id: "bean1",
      category: "Coffee Beans",
      name: "Ethiopian Yirgacheffe",
      origin: "Ethiopia",
      region: "Sidamo",
      roastLevel: "Light",
      certification: ["Organic", "Fairtrade"],
      description: "Bright acidity with floral and citrus notes. A delicate, tea-like body with complex flavor profile.",
      imageUrl: "/coffeeBeans/EthiopianYirgacheffe.jpeg"
    },
    {
      id: "bean2",
      category: "Coffee Beans",
      name: "Colombian Supremo",
      origin: "Colombia",
      region: "Huila",
      roastLevel: "Medium-Dark",
      certification: ["Rainforest Alliance"],
      description: "Well-balanced with caramel sweetness, mild acidity, and notes of chocolate and nuts.",
      imageUrl: "/coffeeBeans/ColombianSupremo.jpeg"
    },
    {
      id: "bean3",
      category: "Coffee Beans",
      name: "Brazilian Santos",
      origin: "Brazil",
      region: "Minas Gerais",
      roastLevel: "Medium",
      certification: [],
      description: "Low acidity with a heavy body. Features nutty, chocolate flavors with a smooth finish.",
      imageUrl: "/coffeeBeans/Brazilian Santos.jpeg"
    }
  ];
  
  export const coffeeMachines: CoffeeMachine[] = [
    {
      id: "machine1",
      category: "New Machines",
      condition: "New",
      brand: "La Marzocco",
      model: "Linea PB",
      type: "Semi-Auto",
      refurbishmentDetails: "N/A",
      description: "Commercial-grade espresso machine with dual boilers and PID temperature control.",
      imageUrl: "/coffeeMachines/La Marzocco.jpeg"
    },
    {
      id: "machine2",
      category: "New Machines",
      condition: "New",
      brand: "Nuova Simonelli",
      model: "Appia Life Volumetric",
      type: "Super-Auto",
      refurbishmentDetails: "N/A",
      description: "Entry-level commercial machine with volumetric dosing and soft infusion system.",
      imageUrl: "/coffeeMachines/Nuova Simonelli.jpeg"
    },
    {
      id: "machine3",
      category: "Used Machines",
      condition: "Refurbished",
      brand: "La San Marco",
      model: "2-Group Vintage",
      type: "Semi-Auto",
      refurbishmentDetails: "New seals, updated pressure stat",
      description: "Classic Italian design with modern improvements for reliable operation.",
      imageUrl: "/coffeeMachines/La San Marco 80.jpeg"
    },
    {
      id: "machine4",
      category: "Used Machines",
      condition: "Used",
      brand: "Faema",
      model: "E61 Legend",
      type: "Semi-Auto",
      refurbishmentDetails: "Original 1980s parts, needs descaling",
      description: "Iconic E61 grouphead machine with historical significance, requires restoration.",
      imageUrl: "/coffeeMachines/Faema E61.jpeg"
    }
  ];
  
  export const machineParts: MachinePart[] = [
    {
      id: "part1",
      category: "Consumables",
      partName: "Grouphead Gasket",
      compatibility: ["E61", "58mm Portafilters"],
      type: "Rubber/Silicone",
      description: "High-quality silicone gasket for improved durability and heat resistance.",
      imageUrl: "/coffeeParts/Grouphead Gasket.jpeg"
    },
    {
      id: "part2",
      category: "Consumables",
      partName: "Steam Wand Tip",
      compatibility: ["La Cimbali", "Rancilio"],
      type: "Stainless Steel",
      description: "Precision-drilled 4-hole steam tip for superior milk texturing.",
      imageUrl: "/coffeeParts/Steam Wand Tip.jpeg"
    },
    {
      id: "part3",
      category: "Filtration",
      partName: "Water Softener Filter",
      compatibility: ["Universal"],
      type: "Maintenance",
      description: "In-line water filter that removes scale-causing minerals for machine longevity.",
      imageUrl: "/coffeeParts/Water Softener Filter.jpeg"
    },
    {
      id: "part4",
      category: "Hardware",
      partName: "Shower Screen",
      compatibility: ["E61 Groupheads"],
      type: "Stainless Steel",
      description: "Precision-engineered screen for even water distribution across coffee puck.",
      imageUrl: "/coffeeParts/Shower Screen.jpeg"
    }
  ];
  
  export const repairServices: RepairService[] = [
    {
      id: "service1",
      serviceType: "Standard Service",
      package: "Bronze",
      description: "Basic descaling, external cleaning",
      certification: "Certified La Cimbali Technician",
      turnaroundTime: "1–2 days",
      imageUrl: ""
    },
    {
      id: "service2",
      serviceType: "Standard Service",
      package: "Silver",
      description: "Full system descaling + seal replacement",
      certification: "Certified Espresso Engineer (SCAE)",
      turnaroundTime: "2–3 days",
      imageUrl: ""
    },
    {
      id: "service3",
      serviceType: "Standard Service",
      package: "Gold",
      description: "Complete overhaul (boiler inspection, part upgrades)",
      certification: "Nuova Simonelli Authorized Partner",
      turnaroundTime: "5–7 days",
      imageUrl: ""
    },
    {
      id: "service4",
      serviceType: "Specialty Service",
      package: "Vintage Restoration",
      description: "Full disassembly, retro-modernization",
      turnaroundTime: "10–14 days",
      imageUrl: ""
    },
    {
      id: "service5",
      serviceType: "Emergency Service",
      package: "Callout",
      description: "Same-day repair within 20 miles",
      turnaroundTime: "4–6 hours",
      imageUrl: ""
    }
  ];
  
  export const additionalServices: AdditionalService[] = [
    {
      id: "additional1",
      service: "Annual Maintenance",
      description: "4 scheduled cleanings + priority support",
      terms: "Renewable contract",
      imageUrl: ""
    },
    {
      id: "additional2",
      service: "Loaner Machine",
      description: "Temporary machine during repairs",
      terms: "Requires refundable deposit",
      imageUrl: ""
    },
    {
      id: "additional3",
      service: "Barista Training",
      description: "Machine-specific workshops",
      terms: "3-hour session",
      imageUrl: ""
    }
  ];
  
  // Main data export for the application
  export const coffeeData = {
    coffeeBeans,
    coffeeMachines,
    machineParts,
    repairServices,
    additionalServices
  };
  
  export default coffeeData;