import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000"
});

// 👇 Replace entire getCompanies with this:
export const getCompanies = async () => {
  return Promise.resolve({
    data: [
      {
        id: 1,
        name: "Acme Corp",
        email: "acme@example.com",
        domicile: "USA",
        businessStructure: "Public",
        details: "Global manufacturing giant in electronics and automation.",
        locations: ["New York", "San Francisco", "Chicago"],
        keyPersonnel: [
          { name: "John Doe", role: "CEO" },
          { name: "Jane Smith", role: "CTO" }
        ],
        records: ["ISO 27001 Certified", "FDA Compliant"],
        orders: ["ORD-1001", "ORD-1002"],
        services: ["Manufacturing", "Automation", "Consulting"],
        subscriptions: [{ plan: "Enterprise", expires: "2025-12-31" }],
        contacts: [
          { name: "Support", email: "support@acme.com", phone: "+1-800-123456" }
        ]
      },
      {
        id: 2,
        name: "Beta LLC",
        email: "beta@example.com",
        domicile: "India",
        businessStructure: "Private",
        details: "Fast-growing startup in the fintech space.",
        locations: ["Mumbai", "Delhi"],
        keyPersonnel: [
          { name: "Ravi Kumar", role: "Founder" },
          { name: "Anita Mehra", role: "CFO" }
        ],
        records: ["RBI Licensed", "Startup India Registered"],
        orders: ["ORD-2001", "ORD-2002"],
        services: ["Payment Gateway", "Lending"],
        subscriptions: [{ plan: "Pro", expires: "2026-01-01" }],
        contacts: [
          { name: "Sales", email: "sales@beta.com", phone: "+91-9876543210" }
        ]
      },
      {
        id: 3,
        name: "Gamma Inc",
        email: "gamma@example.com",
        domicile: "USA",
        businessStructure: "Public",
        details: "Pioneer in cloud computing solutions.",
        locations: ["Seattle", "Austin"],
        keyPersonnel: [
          { name: "Linda Park", role: "COO" },
          { name: "Mike Jordan", role: "Head of Sales" }
        ],
        records: ["HIPAA Compliant", "SOC 2 Certified"],
        orders: ["ORD-3001"],
        services: ["Cloud Hosting", "DevOps", "Security"],
        subscriptions: [{ plan: "Business", expires: "2025-10-01" }],
        contacts: [
          { name: "Client Success", email: "cs@gamma.com", phone: "+1-888-54321" }
        ]
      },
      {
  id: 4,
  name: "Delta Systems",
  email: "contact@deltasystems.com",
  domicile: "India",
  businessStructure: "Private",
  details: "Enterprise software provider for logistics and warehousing.",
  locations: ["Bangalore", "Hyderabad"],
  keyPersonnel: [
    { name: "Arjun Patel", role: "CEO" },
    { name: "Maya Joshi", role: "COO" }
  ],
  records: ["ISO 9001 Certified"],
  orders: ["ORD-4001", "ORD-4002", "ORD-4003"],
  services: ["Inventory Management", "Cloud ERP"],
  subscriptions: [{ plan: "Enterprise", expires: "2025-11-30" }],
  contacts: [
    { name: "Admin", email: "admin@deltasystems.com", phone: "+91-8888000011" }
  ]
},
{
  id: 5,
  name: "Epsilon Networks",
  email: "support@epsilonnet.com",
  domicile: "USA",
  businessStructure: "Public",
  details: "Leading provider of network security solutions.",
  locations: ["Boston", "Denver"],
  keyPersonnel: [
    { name: "Karen Lee", role: "CTO" },
    { name: "Samuel Green", role: "CISO" }
  ],
  records: ["SOC 2", "ISO 27001"],
  orders: ["ORD-5001", "ORD-5002"],
  services: ["Firewall Services", "Pen Testing", "VPN"],
  subscriptions: [{ plan: "Enterprise", expires: "2026-02-01" }],
  contacts: [
    { name: "Tech Support", email: "tech@epsilonnet.com", phone: "+1-900-444-555" }
  ]
},
{
  id: 6,
  name: "Zeta Group",
  email: "info@zetagroup.com",
  domicile: "India",
  businessStructure: "Public",
  details: "Investment holding group with operations in real estate, energy, and retail.",
  locations: ["Delhi", "Ahmedabad"],
  keyPersonnel: [
    { name: "Raj Malhotra", role: "Chairman" },
    { name: "Neha Sharma", role: "Investment Head" }
  ],
  records: ["BSE Listed"],
  orders: ["ORD-6001"],
  services: ["Real Estate Development", "Retail Operations"],
  subscriptions: [{ plan: "Pro", expires: "2026-06-15" }],
  contacts: [
    { name: "Investor Desk", email: "investors@zetagroup.com", phone: "+91-9999999999" }
  ]
},
{
  id: 7,
  name: "Omega Fintech",
  email: "hello@omegaft.com",
  domicile: "USA",
  businessStructure: "Private",
  details: "Blockchain-powered fintech offering decentralized payments.",
  locations: ["Austin", "Los Angeles"],
  keyPersonnel: [
    { name: "Natalie Brooks", role: "Founder & CEO" },
    { name: "Marcus Reed", role: "Lead Engineer" }
  ],
  records: ["FINRA Registered", "Blockchain Verified"],
  orders: ["ORD-7001", "ORD-7002", "ORD-7003"],
  services: ["Crypto Wallet", "Smart Contracts", "Token Launchpad"],
  subscriptions: [{ plan: "Premium", expires: "2025-09-01" }],
  contacts: [
    { name: "Community Manager", email: "community@omegaft.com", phone: "+1-833-OMEGA-FT" }
  ]
},
{
  id: 8,
  name: "Nova Biotech",
  email: "care@novabio.com",
  domicile: "India",
  businessStructure: "Private",
  details: "R&D based biotech firm focusing on rare diseases.",
  locations: ["Pune", "Chennai"],
  keyPersonnel: [
    { name: "Dr. Kavita Iyer", role: "Chief Scientist" },
    { name: "Rohan Mehta", role: "Clinical Director" }
  ],
  records: ["DCGI Approved", "Clinical Trials Registered"],
  orders: ["ORD-8001"],
  services: ["Molecular Testing", "Drug Research"],
  subscriptions: [{ plan: "Basic", expires: "2026-03-10" }],
  contacts: [
    { name: "Medical Inquiry", email: "med@novabio.com", phone: "+91-8080808080" }
  ]
},
{
  id: 9,
  name: "Orion Studios",
  email: "contact@orionstudios.com",
  domicile: "USA",
  businessStructure: "Private",
  details: "Creative media agency for design, video, and branding.",
  locations: ["San Diego", "Miami"],
  keyPersonnel: [
    { name: "Sasha Grey", role: "Creative Director" },
    { name: "Tom Riley", role: "Producer" }
  ],
  records: ["Clio Awards", "Design Guild Certified"],
  orders: ["ORD-9001", "ORD-9002"],
  services: ["Brand Identity", "Motion Graphics", "Web Design"],
  subscriptions: [{ plan: "Creative Suite", expires: "2025-12-01" }],
  contacts: [
    { name: "Client Relations", email: "clients@orionstudios.com", phone: "+1-888-999-777" }
  ]
}

      // ➕ Add 5–10 more with similar structure if needed
    ]
  });
};

// for future edit support
export const updateCompany = (id, data) => API.put(`/companies/${id}`, data);
