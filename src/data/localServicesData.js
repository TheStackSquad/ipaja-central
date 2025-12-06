// src/data/localServicesData.js

export const localServicesData = {
  // Coordinates for the center of Ipaja-Ayobo (approx.)
  IPAJACENTER: { lat: 6.671, lng: 3.268 },

  emergencyServices: [
    {
      id: "ipaja-police-station",
      name: "Ipaja Police Station",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-2121", // New local number
        email: "police.ipaja@lagosstate.gov.ng",
      },
      address: "**Ipaja Road, Command Bus Stop, Ipaja, Lagos**",
      coordinates: { lat: 6.658, lng: 3.275 },
      hours: "24/7",
      status: "Available",
      description:
        "Primary police station serving Ipaja, Command, and surrounding areas. Handles criminal matters and emergency response.",
      onlineServices: ["Report Crime Online", "Police Report Request"],
      processingTime: "Immediate for emergencies",
      fees: "Free for emergencies",
      hasOnlineOption: true,
    },
    {
      id: "ayobo-police-post",
      name: "Ayobo Police Post",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-2122", // New local number
        email: "ayobo.police@lagosstate.gov.ng",
      },
      address: "**Ayobo Road, Bada Bus Stop, Ayobo, Lagos**",
      coordinates: { lat: 6.702, lng: 3.235 },
      hours: "24/7",
      status: "Available",
      description:
        "Local police post providing community policing and rapid response for Ayobo, Gate, and Isefun residents.",
      onlineServices: ["Traffic Report", "Community Complaint"],
      processingTime: "Immediate for emergencies",
      fees: "Free for emergencies",
      hasOnlineOption: true,
    },
    {
      id: "lagos-fire-ipaja",
      name: "Lagos State Fire Service (Ipaja)",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "**767** or **112**", // Lagos Emergency numbers
        email: "fire.ipaja@lagosstate.gov.ng",
      },
      address: "Close to Ipaja Market, Ipaja, Lagos",
      coordinates: { lat: 6.665, lng: 3.28 },
      hours: "24/7",
      status: "Available",
      description: "Emergency fire fighting and rescue services for the axis.",
      onlineServices: ["Report Fire Incident", "Safety Inspection Request"],
      processingTime: "Immediate for emergencies",
      fees: "Free for emergencies",
      hasOnlineOption: false,
    },
  ],

  onlineFirstServices: [
    {
      id: "business-permit-ayobo",
      name: "Alimosho LGA Business Permit Registration",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0201",
        email: "permits@alimosho.gov.ng",
      },
      address: "Alimosho LGA Secretariat, **Akowonjo/Idimu (Central Office)**",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Register new businesses and renew permits. **Online application is highly encouraged** for residents of Ipaja-Ayobo to avoid travel to the central secretariat.",
      onlineServices: [
        "Apply for New Business Permit",
        "Renew Existing Permit",
        "Pay Fees Online",
      ],
      processingTime: "3-5 business days online",
      requirements:
        "Business plan, valid ID, proof of address (e.g., **Fagba Street or Mercy Road** address)",
      fees: "₦15,000 - ₦50,000 (pay online for 10% discount)",
      hasOnlineOption: true,
    },
    // ... (Tax and Birth Certificate services remain Alimosho LGA-wide but emphasize online use)
    {
      id: "tax-payment-alimosho",
      name: "Lagos State Tax Payment (ALIMOSHO)",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0202",
        email: "tax@alimosho.gov.ng",
      },
      address: "Alimosho LGA Tax Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Pay personal income tax and property tax. **Use the online portal for instant tax clearance**.",
      onlineServices: [
        "Pay Income Tax Online",
        "Property Tax Payment",
        "Download Tax Clearance",
      ],
      processingTime: "Instant online payment",
      requirements: "TIN number, property documents (for property tax)",
      fees: "Varies by income/property value (online payment saves time)",
      hasOnlineOption: true,
    },
    {
      id: "birth-certificate-alimosho",
      name: "Birth Certificate Registration (Alimosho)",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0203",
        email: "registry@alimosho.gov.ng",
      },
      address: "Alimosho Registry Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Register births and obtain certificates. **Online registration is the fastest method**.",
      onlineServices: [
        "Apply for Birth Certificate",
        "Track Application Status",
        "Download Certificate",
      ],
      processingTime: "5-7 days online",
      requirements: "Hospital birth record, parents' ID, marriage certificate",
      fees: "₦3,000 online, ₦5,000 in-person",
      hasOnlineOption: true,
    },
  ],

  utilitiesInfrastructure: [
    {
      id: "ipaja-phc",
      name: "**Ipaja Primary Healthcare Center**",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-803-555-3101",
        email: "health.ipaja@alimosho.gov.ng",
      },
      address: "**Shagari Housing Estate, Ipaja, Lagos**",
      coordinates: { lat: 6.66, lng: 3.27 },
      hours: "8:00 AM - 4:00 PM (Mon-Fri), Emergency 24/7",
      status: "Available",
      description:
        "Maternal health, child immunization, and basic medical services for Ipaja and Command residents.",
      onlineServices: ["Book Appointment Online", "Vaccination Schedule"],
      processingTime: "Same day for appointments",
      requirements: "Health insurance card or payment, valid ID",
      fees: "₦500 - ₦2,000 per consultation",
      hasOnlineOption: true,
    },
    {
      id: "ayobo-phc",
      name: "**Ayobo Primary Healthcare Center**",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-803-555-3102",
        email: "health.ayobo@alimosho.gov.ng",
      },
      address: "**Ayobo Market Road, Ayobo, Lagos**",
      coordinates: { lat: 6.69, lng: 3.25 },
      hours: "8:00 AM - 4:00 PM (Mon-Fri), Emergency 24/7",
      status: "Available",
      description:
        "Healthcare services, family planning, and immunization programs for Ayobo and Isefun communities.",
      onlineServices: ["Book Appointment Online", "Vaccination Schedule"],
      processingTime: "Same day for appointments",
      requirements: "Health insurance card or payment, valid ID",
      fees: "₦500 - ₦2,000 per consultation",
      hasOnlineOption: true,
    },
    {
      id: "waste-management-ipaja",
      name: "Waste Management Services (Ipaja-Ayobo)",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-803-555-0302",
        email: "waste@alimosho.gov.ng",
      },
      address: "Alimosho Environmental Office (Central)",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "24/7 Collection Service",
      status: "Available",
      description:
        "Household waste collection, **serving streets like Mercy Road, Fela Owolabi St, and Alaja Road.** Report missed collections online.",
      onlineServices: [
        "Schedule Waste Pickup",
        "Report Missed Collection",
        "Pay Waste Bills Online",
      ],
      processingTime: "24-48 hours for pickup requests",
      requirements: "Property address verification",
      fees: "₦1,500 monthly for households",
      hasOnlineOption: true,
    },
  ],

  administrativeServices: [
    {
      id: "marriage-certificate-ayobo",
      name: "Marriage Registry (Alimosho Branch)",
      category: "Administrative Services",
      priority: 2,
      contact: {
        phone: "+234-803-555-0401",
        email: "marriage@alimosho.gov.ng",
      },
      address: "Alimosho Marriage Registry, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Marriage registration and certificate issuance. All residents must visit the central registry office.",
      onlineServices: ["Book Marriage Date", "Pay Registration Fees"],
      processingTime: "Same day for ceremonies",
      requirements: "Valid IDs, witnesses",
      fees: "₦10,000 registration + ₦5,000 certificate",
      hasOnlineOption: true,
    },
    // ... (Death and Land services are central and remain the same structure)
    {
      id: "death-certificate-alimosho",
      name: "Death Certificate Registration (Alimosho)",
      category: "Administrative Services",
      priority: 2,
      contact: {
        phone: "+234-803-555-0402",
        email: "registry@alimosho.gov.ng",
      },
      address: "Alimosho Registry Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Death registration and certificate issuance for legal purposes.",
      onlineServices: ["Register Death Online", "Download Death Certificate"],
      processingTime: "5-7 days",
      requirements:
        "Medical certificate of death, ID of deceased, next of kin ID",
      fees: "₦3,000 registration + ₦2,000 per certificate copy",
      hasOnlineOption: true,
    },
    {
      id: "land-documentation-alimosho",
      name: "Land Documentation Services (Alimosho)",
      category: "Administrative Services",
      priority: 3,
      contact: {
        phone: "+234-803-555-0403",
        email: "lands@alimosho.gov.ng",
      },
      address: "Alimosho Lands Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Limited Services",
      description:
        "Land ownership verification and building permits. **Verify property documents before any purchase in Ipaja-Ayobo.**",
      onlineServices: [
        "Verify Land Ownership",
        "Apply for Building Permit",
        "Property Search",
      ],
      processingTime: "14-21 days for permits",
      requirements:
        "Survey plans, land documents, architectural drawings (for permits)",
      fees: "₦50,000 - ₦200,000 depending on property size and permit type",
      hasOnlineOption: false,
    },
  ],
};

// Helper function to get all services sorted by priority and online availability
export const getAllServices = () => {
  const allServices = [
    ...localServicesData.emergencyServices,
    ...localServicesData.onlineFirstServices,
    ...localServicesData.utilitiesInfrastructure,
    ...localServicesData.administrativeServices,
  ];

  return allServices.sort((a, b) => {
    // First sort by online availability (online first)
    if (a.hasOnlineOption && !b.hasOnlineOption) return -1;
    if (!a.hasOnlineOption && b.hasOnlineOption) return 1;

    // Then by priority
    return a.priority - b.priority;
  });
};

export const getServicesByCategory = (category) => {
  switch (category) {
    case "Emergency Services":
      return localServicesData.emergencyServices;
    case "Online-First Services":
      return localServicesData.onlineFirstServices;
    case "Utilities & Infrastructure":
      return localServicesData.utilitiesInfrastructure;
    case "Administrative Services":
      return localServicesData.administrativeServices;
    default:
      return [];
  }
};
