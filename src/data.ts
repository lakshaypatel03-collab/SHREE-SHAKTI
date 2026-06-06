import { ProductDetails } from "./types";

export const BRAND_INFO = {
  manufacturer: "Shri Shakti Cement Products",
  brandName: "Shivneri",
  slogan: "Kyunki Is Ki Har Bund Main Hai Jeevan",
  sloganTranslation: "Because in its every drop lies life",
  taglines: [
    "Extra Strong",
    "Attractive Look",
    "Heavy Material",
    "Latest Design"
  ],
  description: "Shri Shakti Cement Products is a pioneering manufacturer of premium rotational-moulded water storage systems and heavy-duty industrial containers. Guided by advanced polymer processing technology and German-standard hygiene layers, we deliver products that combine structural resilience with pristine fluid purity."
};

export const PRODUCTS_DATA: ProductDetails[] = [
  {
    id: "2-layer-vertical",
    name: "Shivneri 2-Layer Vertical Tank",
    tagline: "Eco-Friendly, Double Layered Protective Water Storage",
    description: "Our dual-layer design provides a high-density, weatherproof exterior that resists sunlight damage, coupled with an ultra-smooth, food-grade inner black surface that prevents contamination and is easy to clean. Perfect for domestic, commercial, and drip-irrigation storage.",
    imagePath: "/input_file_8.png",
    layers: 2,
    availableColors: ["Black"],
    features: [
      "Advanced rotomoulding manufacturing technology",
      "High performance & mechanical impact resistance",
      "Purity in every drop with food-grade inner lining",
      "Airtight threaded heavy duty lid prevents dust & crawling insects",
      "UV stabilized outer layer protects structure from color fading and crack development",
      "Long durability with ultra heavy weight polymer build",
      "Weatherproof design for intense sun and sub-zero weather"
    ],
    layerStructure: [
      "Outer Layer: Weather-Proof Custom Color Layer (reflective premium build)",
      "Inner Layer: Premium Carbon-infused Food-Grade barrier preventing moisture decay"
    ],
    specifications: [
      { capacityLtr: 300, widthInch: 27, heightInch: 35 },
      { capacityLtr: 500, widthInch: 33, heightInch: 38 },
      { capacityLtr: 750, widthInch: 36, heightInch: 46 },
      { capacityLtr: 1000, widthInch: 42, heightInch: 47 },
      { capacityLtr: 1500, widthInch: 49, heightInch: 54 },
      { capacityLtr: 2000, widthInch: 54, heightInch: 55 },
      { capacityLtr: 3000, widthInch: 56, heightInch: 76 },
      { capacityLtr: 5000, widthInch: 72, heightInch: 76 }
    ],
    applications: [
      "Residential rooftop water reserves",
      "Commercial office storeys",
      "Agricultural farm storing & sprinkler lines",
      "Industrial fire safety backup reservoirs"
    ]
  },
  {
    id: "3-layer-vertical",
    name: "Shivneri 3-Layer Thermal-Insulation Tank",
    tagline: "Triple Layer Active Thermal Barrier System",
    description: "Designed to tackle severe climatic shifts. Employs a unique cellular micro-foam inner middle shielding layer that restricts solar heat ingress, keeping the reserve water cool and stable throughout peak daylight. Includes full UV block core.",
    imagePath: "/input_file_9.png",
    layers: 3,
    availableColors: ["Blue", "Yellow", "Green", "Orange", "White"],
    features: [
      "Insulated middle tier maintains fresh cool water even under 45°C+ direct sunlight",
      "100% Food-Grade odorless hygiene plastic for drinking reserves",
      "Exceptional crack tensile-strength with reinforced ribs",
      "Anticorrosive, solid airtight threaded seal",
      "Algae resistant inner carbon block barrier",
      "Enhanced thickness profiles for ultra heavy build"
    ],
    layerStructure: [
      "Outer Layer: Custom-Colored Premier Layer (UV reflective & solid finish)",
      "Insulated Middle Layer: Structural micro-foam cellular heat block (active thermal barrier)",
      "Inner Layer: Food-Grade polymer layer guaranteeing non-toxic high-purity containment"
    ],
    specifications: [
      { capacityLtr: 300, widthInch: 27, heightInch: 35 },
      { capacityLtr: 500, widthInch: 33, heightInch: 38 },
      { capacityLtr: 750, widthInch: 36, heightInch: 46 },
      { capacityLtr: 1000, widthInch: 42, heightInch: 47 },
      { capacityLtr: 1500, widthInch: 49, heightInch: 54 },
      { capacityLtr: 2000, widthInch: 54, heightInch: 55 },
      { capacityLtr: 3000, widthInch: 56, heightInch: 76 },
      { capacityLtr: 5000, widthInch: 72, heightInch: 76 }
    ],
    applications: [
      "Areas with extremely high summer heat",
      "Hospitals, dairy industries & laboratories requiring constant warmth control",
      "Standard residential rooftops demanding premium comfort water",
      "Apartment pipelines"
    ]
  },
  {
    id: "4-layer-vertical",
    name: "Shivneri 4-Layer Extra Coool Premium Tank",
    tagline: "Ultimate 4-Layer Sanitation & Cool-Water Technology",
    description: "Our absolute flagship product. Incorporates quadruple barrier shield technology featuring active antimicrobial resistance, algae blockage, premium thermal foam insulation, and custom weather-resistant color layer. The ultimate assurance for zero pollution.",
    imagePath: "/input_file_1.png",
    layers: 4,
    availableColors: ["Blue", "Green", "Marble Sky", "Yellow", "White", "Warm Sand (Beige)"],
    features: [
      "100% Safe & Non-Toxic medical grade material",
      "Algae, Bacterial, Mildew & Virus free protection system",
      "100% UV Protected core shield ensuring no light penetration",
      "Zero Maintenance required - smooth inner layer stops sediment settlement",
      "No chemical contamination or toxic leach over years",
      "Keeps water 'Extra Coool' in severe direct solar heating",
      "Beautiful sand pebble finish options to match elite building paints"
    ],
    layerStructure: [
      "Layer 1 (Outer): Premier protective exterior finish (decorative & weather-proof)",
      "Layer 2: Multi-cellular high-density insulation block",
      "Layer 3: Solid Black Algae Shield (100% light block preventing growth)",
      "Layer 4 (Inner): Premier Bluetone/Odorless Food-Grade Polymers"
    ],
    specifications: [
      { capacityLtr: 300, widthInch: 27, heightInch: 35 },
      { capacityLtr: 500, widthInch: 33, heightInch: 38 },
      { capacityLtr: 750, widthInch: 36, heightInch: 46 },
      { capacityLtr: 1000, widthInch: 42, heightInch: 47 },
      { capacityLtr: 1500, widthInch: 49, heightInch: 54 },
      { capacityLtr: 2000, widthInch: 54, heightInch: 55 },
      { capacityLtr: 3000, widthInch: 56, heightInch: 76 },
      { capacityLtr: 5000, widthInch: 72, heightInch: 76 }
    ],
    applications: [
      "High-end independent villas, apartments, and penthouses",
      "Food processing plants, breweries & beverage manufacturers",
      "School & university campuses drinking water distribution networks",
      "Mineral water units"
    ]
  },
  {
    id: "loft-tank",
    name: "Shivneri Loft / Horizontal Tank",
    tagline: "Compact Indoor Space Saving Solutions",
    description: "Engineered specifically for indoor installation under low ceilings, bathroom lofts, or inside decorative wooden panels. Provides reliable horizontal water reserve safely out of direct climatic degradation. Note: Measurements are approximate and no guarantee is applicable for indoor lofts.",
    imagePath: "/input_file_4.png",
    availableColors: ["Natural White"],
    features: [
      "Low vertical clearance, fits perfectly flat inside interior lofts",
      "Optimized footprint with specialized load distribution base",
      "Restricted from sunlight (indoor grade, preventing yellowing)",
      "Available in Natural White, double-layer or triple-layer variants",
      "High impact corner reinforcement to protect against structural shift"
    ],
    layerStructure: [
      "Outer Layer: Pristine Natural White Polyurethane outer skin",
      "Inner Layer: Food-grade ultra-pure inner non-toxic wall"
    ],
    specifications: [
      { capacityLtr: 300, widthInch: 36, heightInch: 16, lengthInch: 58 },
      { capacityLtr: 500, widthInch: 34, heightInch: 18, lengthInch: 58 },
      { capacityLtr: 750, widthInch: 36, heightInch: 18, lengthInch: 72 },
      { capacityLtr: 1000, widthInch: 48, heightInch: 19, lengthInch: 72 }
    ],
    applications: [
      "Urban apartments ceiling storage voids",
      "Modular kitchen sink backpressure lines",
      "Bathroom loft emergency backup storage",
      "Small boutique laundros & saloons with tight spaces"
    ]
  },
  {
    id: "blue-barrels",
    name: "Shivneri Heavy-Duty Industrial Drums",
    tagline: "Ultra-Resilient Liquid & Chemical Containment",
    description: "Heavy-gauge, high molecular weight HDPE blow/rotomolded open & narrow mouth barrels. Fully optimized for chemical storage, liquid ingredients, water storage, lubricants, and high-density industrial mixtures.",
    imagePath: "/input_file_2.png",
    availableColors: ["Industrial Blue", "Orange"],
    features: [
      "High chemical compatibility with absolute zero rust development",
      "Extra robust polymer wall thickness to prevent side bulging under pressure",
      "Integrated heavy manual handles or grip ridges for safe hoisting",
      "Airtight solid screw lids with additional leakage-preventing compression ring",
      "Double stack integrity configurations"
    ],
    specifications: [
      { capacityLtr: 50 },
      { capacityLtr: 100 },
      { capacityLtr: 200 },
      { capacityLtr: 250 }
    ],
    applications: [
      "Chemical manufacturing & factory warehouses",
      "Beverage/agricultural fluid collection depots",
      "General storage for rain harvesting and solid components",
      "Construction sites manual water storage"
    ]
  },
  {
    id: "plastic-tarpaulins",
    name: "Premium Multi-Layered Reinforced Tarpaulins",
    tagline: "Zero-Leak Ultimate Weather Shelter Fabrics",
    description: "Engineered from superior virgin polymers and cross-laminated layout to resist extreme storms, sun heat, and heavy rain. Trusted across industrial logistics and farm operations to secure machinery, crops, and construction sites.",
    imagePath: "/input_file_5.png",
    availableColors: ["Blue", "Yellow", "Silver Grey", "Orange", "Coal Black"],
    features: [
      "100% Water Protection, absolutely zero rain leakage",
      "UV-Stabilized dual side coatings provide maximum sunlight lifespan",
      "Tear-resistant high tensile weave structure with heavy reinforcing border ropes",
      "Rust-proof brass/aluminum alloy eyelets placed at accurate intervals for easy rope rigging",
      "Lightweight yet remarkably robust, easy to fold & deploy in seconds"
    ],
    specifications: [
      { capacityLtr: 12 },
      { capacityLtr: 15 },
      { capacityLtr: 24 },
      { capacityLtr: 30 }
    ],
    applications: [
      "Agricultural yard grain cover protecting from rain wetness",
      "Industrial transport truck bedding & open carrier cargo cover",
      "Camp tents, temporal event canopies, and shade sails",
      "Construction material and cement dry protection covers"
    ]
  },
  {
    id: "premium-ropes",
    name: "Shivneri High-Durability PP Ropes",
    tagline: "High-Tensile Golden-Border Polypropylene Rigging Ropes",
    description: "Premium-grade yellow polypropylene (PP) ropes coiled utilizing advanced high-twist extrusion systems. Engineered for farm harvesting, industrial cargos strapping, construction line hoisting, and heavy-duty tarpaulin securement. Delivers supreme chemical tolerance and zero rot.",
    imagePath: "/input_file_3.png",
    availableColors: ["Yellow (Gold Stripe)"],
    features: [
      "100% High-density virgin Co-Polymer Polypropylene core",
      "Remarkable shock absorption and tensile breaking capacity",
      "Ultra-lightweight formulation that floats on water with zero decay",
      "High immunity to industrial grease, acids, and agricultural rot",
      "UV-Resistant coating to protect strand integrity in extreme climates"
    ],
    specifications: [
      { capacityLtr: 110, ropeDiameterMm: 3 },
      { capacityLtr: 110, ropeDiameterMm: 6 },
      { capacityLtr: 110, ropeDiameterMm: 8 },
      { capacityLtr: 110, ropeDiameterMm: 10 },
      { capacityLtr: 220, ropeDiameterMm: 12 },
      { capacityLtr: 220, ropeDiameterMm: 14 },
      { capacityLtr: 220, ropeDiameterMm: 16 },
      { capacityLtr: 220, ropeDiameterMm: 18 }
    ],
    applications: [
      "Securing heavy vehicular carriage tarpaulins",
      "Agricultural farm vineyard support trellis and crop bounds",
      "Construction yard material hoisting and secure scaffoldings",
      "General domestic and outdoor packaging bundlings"
    ]
  },
  {
    id: "shade-nets",
    name: "Green Agro Shade Nets",
    tagline: "High-Density Climate Control & Plant Protection Shielding",
    description: "Precision knitted high-density polyethylene (HDPE) tape nets featuring double-reinforced gold/yellow taped selvages. Formulated to filter sunlight, trap essential humidity, and act as a reliable visual barrier against pests, heavy downpours, and direct heatwaves.",
    imagePath: "/input_file_6.png",
    availableColors: ["Green (Premium Yellow Border)", "Green/Pink Striped Style"],
    features: [
      "Lock-stitch knitted HDPE prevents ravelling and fraying",
      "Double-stitched gold reinforcing borders with thick corner eyelets",
      "Provides 50% to 90% customizable cooling shade rating",
      "Outstanding durability against continuous harsh sun and rain cycles",
      "Protects delicate horticulture from direct wind blasts and hail"
    ],
    specifications: [
      { capacityLtr: 50, shadePercentage: 50 },
      { capacityLtr: 75, shadePercentage: 75 },
      { capacityLtr: 90, shadePercentage: 90 }
    ],
    applications: [
      "Agricultural greenhouse nurseries & plant shelter rows",
      "Open terrace gardens, vehicle garages, and outdoor decks",
      "Poultry and livestock shed roof temperature mitigation",
      "Dust protection fencing and temporary privacy borders"
    ]
  }
];

export const GENERAL_FEATURES = [
  "Advanced rotomoulding polymer structure",
  "High mechanical load structural integrity",
  "Chemical contamination free (Zero BPA)",
  "Ultra heavy duty weights for years of durability",
  "Unique aesthetics that enhance your roof appeal",
  "Airtight heavy duty threaded lids",
  "Unrivaled purity in every drop"
];
