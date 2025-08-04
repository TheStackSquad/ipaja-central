//src/data/localServicesData.js

export const localServicesData = {
  emergencyServices: [
    {
      id: "ayobo-ipaja-police",
      name: "Ayobo-Ipaja Police Division",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0101",
        email: "police.ayobo-ipaja@lagosstate.gov.ng",
      },
      address: "Ayobo Road, Ipaja, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "24/7",
      status: "Available",
      description:
        "Full-service police station handling criminal matters, complaints, and emergency response.",
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
        phone: "+234-803-555-0102",
        email: "ayobopost.police@lagosstate.gov.ng",
      },
      address: "Olayemi Tella Street, Ayobo, Lagos",
      coordinates: { lat: 6.611, lng: 3.245 },
      hours: "24/7",
      status: "Available",
      description:
        "Community policing and crime prevention services for the Ayobo area.",
      onlineServices: ["Report Crime Online", "Police Report Request"],
      processingTime: "Immediate for emergencies",
      fees: "Free for emergencies",
      hasOnlineOption: true,
    },
    {
      id: "ipaja-police-station",
      name: "Ipaja Police Station",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0103",
        email: "ipajastation.police@lagosstate.gov.ng",
      },
      address: "Moshalasi Round-about, Ipaja, Lagos",
      coordinates: { lat: 6.608, lng: 3.25 },
      hours: "24/7",
      status: "Available",
      description:
        "General police services and traffic control for the Ipaja axis.",
      onlineServices: ["Traffic Report", "Police Report Request"],
      processingTime: "Immediate for emergencies",
      fees: "Free for emergencies",
      hasOnlineOption: true,
    },
    {
      id: "sangun-police-station",
      name: "Sangun Police Post",
      category: "Emergency Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0104",
        email: "sangunpost.police@lagosstate.gov.ng",
      },
      address: "Sangun, Ipaja, Lagos",
      coordinates: { lat: 6.615, lng: 3.242 },
      hours: "24/7",
      status: "Available",
      description:
        "General police services and community safety for the Sangun area.",
      onlineServices: ["Report Crime Online", "Police Report Request"],
      processingTime: "Immediate for emergencies",
      fees: "Free for emergencies",
      hasOnlineOption: true,
    },
  ],

  onlineFirstServices: [
    {
      id: "business-permit",
      name: "Business Permit Registration",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0201",
        email: "permits@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja LGA Secretariat, Ayobo, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Register new businesses, renew permits, business name registration - now available online!",
      onlineServices: [
        "Apply for New Business Permit",
        "Renew Existing Permit",
        "Check Application Status",
        "Download Certificate",
        "Pay Fees Online",
      ],
      processingTime: "3-5 business days online, 7-10 days in-person",
      requirements:
        "Business plan, valid ID, proof of address, CAC certificate",
      fees: "₦15,000 - ₦50,000 (pay online for 10% discount)",
      hasOnlineOption: true,
    },
    {
      id: "tax-payment",
      name: "Tax Payment & Assessment",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0202",
        email: "tax@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja LGA Tax Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "8:00 AM - 4:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Pay personal income tax, property tax, and get tax clearance certificates online.",
      onlineServices: [
        "Pay Income Tax Online",
        "Property Tax Payment",
        "Download Tax Clearance",
        "Tax Assessment Appeal",
        "Payment History",
      ],
      processingTime: "Instant online payment, 24-48 hours for certificates",
      requirements:
        "Valid ID, TIN number, property documents (for property tax)",
      fees: "Varies by income/property value (online payment saves time)",
      hasOnlineOption: true,
    },
    {
      id: "birth-certificate",
      name: "Birth Certificate Registration",
      category: "Online-First Services",
      priority: 1,
      contact: {
        phone: "+234-803-555-0203",
        email: "registry@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja Registry Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Register births and obtain certificates online - skip the queue!",
      onlineServices: [
        "Apply for Birth Certificate",
        "Correct Birth Certificate",
        "Track Application Status",
        "Download Certificate",
        "Pay Processing Fees",
      ],
      processingTime: "5-7 days online, 14-21 days in-person",
      requirements: "Hospital birth record, parents' ID, marriage certificate",
      fees: "₦3,000 online, ₦5,000 in-person",
      hasOnlineOption: true,
    },
  ],

  utilitiesInfrastructure: [
    {
      id: "primary-healthcare",
      name: "Primary Healthcare Centers",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-803-555-0301",
        email: "health@ayobo-ipaja.gov.ng",
      },
      address: "Various locations across Ayobo-Ipaja LGA",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "8:00 AM - 4:00 PM (Mon-Fri), Emergency 24/7",
      status: "Available",
      description:
        "Maternal health, child immunization, family planning, and basic medical services.",
      onlineServices: [
        "Book Appointment Online",
        "Download Health Records",
        "Vaccination Schedule",
        "Antenatal Registration",
      ],
      processingTime: "Same day for appointments, instant for records",
      requirements: "Health insurance card or payment, valid ID",
      fees: "₦500 - ₦2,000 per consultation",
      hasOnlineOption: true,
    },
    {
      id: "waste-management",
      name: "Waste Management Services",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-803-555-0302",
        email: "waste@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja Environmental Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "24/7 Collection Service",
      status: "Available",
      description:
        "Household waste collection, recycling programs, and environmental services.",
      onlineServices: [
        "Schedule Waste Pickup",
        "Report Missed Collection",
        "Pay Waste Bills Online",
        "Request Recycling Service",
      ],
      processingTime: "24-48 hours for pickup requests",
      requirements: "Property address verification",
      fees: "₦1,500 monthly for households, ₦5,000+ for businesses",
      hasOnlineOption: true,
    },
    {
      id: "water-sewage",
      name: "Water & Sewage Services",
      category: "Utilities & Infrastructure",
      priority: 2,
      contact: {
        phone: "+234-803-555-0303",
        email: "water@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja Water Works, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "8:00 AM - 5:00 PM (Mon-Fri), Emergency 24/7",
      status: "Available",
      description:
        "Water supply connections, sewage services, and pipeline maintenance.",
      onlineServices: [
        "Apply for Water Connection",
        "Report Water Issues",
        "Pay Water Bills",
        "Request Maintenance",
      ],
      processingTime: "3-5 days for connections, 24 hours for repairs",
      requirements: "Property ownership proof, application fee",
      fees: "₦25,000 connection fee, monthly bills vary",
      hasOnlineOption: true,
    },
    {
      id: "road-maintenance",
      name: "Road Maintenance & Infrastructure",
      category: "Utilities & Infrastructure",
      priority: 3,
      contact: {
        phone: "+234-803-555-0304",
        email: "roads@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja Works Department, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "8:00 AM - 5:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Road repairs, street lighting, drainage, and general infrastructure maintenance.",
      onlineServices: [
        "Report Road Damage",
        "Request Street Light Repair",
        "Submit Infrastructure Complaint",
        "Track Repair Status",
      ],
      processingTime: "7-14 days depending on issue severity",
      requirements: "Location details, photo evidence preferred",
      fees: "Free for public infrastructure",
      hasOnlineOption: true,
    },
  ],

  administrativeServices: [
    {
      id: "marriage-certificate",
      name: "Marriage Certificate Registration",
      category: "Administrative Services",
      priority: 2,
      contact: {
        phone: "+234-803-555-0401",
        email: "marriage@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja Marriage Registry, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Marriage registration, certificate issuance, and marriage verification services.",
      onlineServices: [
        "Book Marriage Date",
        "Download Marriage Certificate",
        "Marriage Verification",
        "Pay Registration Fees",
      ],
      processingTime: "Same day for ceremonies, 3-5 days for certificates",
      requirements: "Valid IDs, divorce certificate (if applicable), witnesses",
      fees: "₦10,000 registration + ₦5,000 certificate",
      hasOnlineOption: true,
    },
    {
      id: "death-certificate",
      name: "Death Certificate Registration",
      category: "Administrative Services",
      priority: 2,
      contact: {
        phone: "+234-803-555-0402",
        email: "registry@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja Registry Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Available",
      description:
        "Death registration and certificate issuance for legal and administrative purposes.",
      onlineServices: [
        "Register Death Online",
        "Download Death Certificate",
        "Death Verification",
        "Correction Requests",
      ],
      processingTime: "5-7 days",
      requirements:
        "Medical certificate of death, ID of deceased, next of kin ID",
      fees: "₦3,000 registration + ₦2,000 per certificate copy",
      hasOnlineOption: true,
    },
    {
      id: "land-documentation",
      name: "Land Documentation Services",
      category: "Administrative Services",
      priority: 3,
      contact: {
        phone: "+234-803-555-0403",
        email: "lands@ayobo-ipaja.gov.ng",
      },
      address: "Ayobo-Ipaja Lands Office, Lagos",
      coordinates: { lat: 6.61, lng: 3.24 },
      hours: "9:00 AM - 3:00 PM (Mon-Fri)",
      status: "Limited Services",
      description:
        "Land ownership verification, building permits, and property documentation.",
      onlineServices: [
        "Verify Land Ownership",
        "Apply for Building Permit",
        "Property Search",
        "Document Certification",
      ],
      processingTime: "14-21 days for permits, 7 days for verification",
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
    ...localServicesData.administrativeServices
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
  switch(category) {
    case 'Emergency Services':
      return localServicesData.emergencyServices;
    case 'Online-First Services':
      return localServicesData.onlineFirstServices;
    case 'Utilities & Infrastructure':
      return localServicesData.utilitiesInfrastructure;
    case 'Administrative Services':
      return localServicesData.administrativeServices;
    default:
      return [];
  }
};