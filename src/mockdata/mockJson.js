export const NIST_MOCK_DATA = [
  {
    id: "1",
    summary: {
      category: "Identify",
      policies: 33,
      runbooks: 10,
      compilance: 80,
    },
    categories: [
      {
        category: "Asset Management",
        policy: 20,
        runbook: 6,
        compilance: 80,
      },
      {
        category: "Business Environment",
        policy: 0,
        runbook: 0,
        compilance: 0,
      },
      {
        category: "Governance",
        policy: 0,
        runbook: 0,
        compilance: 0,
      },
      {
        category: "Risk Assessment",
        policy: 0,
        runbook: 0,
        compilance: 0,
      },
      {
        category: "Risk Management Strategy",
        policy: 3,
        runbook: 1,
        compilance: 75,
      },
      {
        category: "Supply Chain Risk Management",
        policy: 10,
        runbook: 3,
        compilance: 85,
      },
    ],
  },
  {
    id: "2",
    summary: {
      category: "Protect",
      policies: 100,
      runbooks: 30,
      compilance: 65,
    },
    categories: [
      {
        category: "Identity Management & Access Control",
        policy: 20,
        runbook: 7,
        compilance: 65,
      },
      {
        category: "Awareness and Training",
        policy: 5,
        runbook: 1,
        compilance: 0,
      },
      {
        category: "Data Security",
        policy: 26,
        runbook: 8,
        compilance: 0,
      },
      {
        category: "Information Protection Processes & Procedures",
        policy: 28,
        runbook: 8,
        compilance: 0,
      },
      {
        category: "Maintenance",
        policy: 3,
        runbook: 1,
        compilance: 75,
      },
      {
        category: "Protective Technology",
        policy: 18,
        runbook: 5,
        compilance: 55,
      },
    ],
  },
  {
    id: "3",
    summary: {
      category: "Detect",
      policies: 29,
      runbooks: 7,
      compilance: 72,
    },
    categories: [
      {
        category: "Anomalies and Events",
        policy: 4,
        runbook: 1,
        compilance: 82,
      },
      {
        category: "Security Continuous Monitoring",
        policy: 17,
        runbook: 4,
        compilance: 74,
      },
      {
        category: "Detection Processes",
        policy: 8,
        runbook: 2,
        compilance: 60,
      },
    ],
  },
  {
    id: "4",
    summary: {
      category: "Respond",
      policies: 28,
      runbooks: 7,
      compilance: 90,
    },
    categories: [
      {
        category: "Response Planning",
        policy: 4,
        runbook: 1,
        compilance: 95,
      },
      {
        category: "Communications",
        policy: 15,
        runbook: 4,
        compilance: 95,
      },
      {
        category: "Analysis",
        policy: 3,
        runbook: 1,
        compilance: 90,
      },
      {
        category: "Mitigation",
        policy: 0,
        runbook: 0,
        compilance: 85,
      },
      {
        category: "Improvements",
        policy: 6,
        runbook: 1,
        compilance: 85,
      },
    ],
  },
  {
    id: "5",
    summary: {
      category: "Recover",
      policies: 21,
      runbooks: 5,
      compilance: 72,
    },
    categories: [
      {
        category: "Recovery Planning",
        policy: 4,
        runbook: 1,
        compilance: 82,
      },
      {
        category: "Improvements",
        policy: 8,
        runbook: 2,
        compilance: 74,
      },
      {
        category: "Communications",
        policy: 9,
        runbook: 2,
        compilance: 60,
      },
    ],
  },
];

export const RUNBOOK_STORE_DATA = [
  {
    name: "AWS SQS",
    version: "v1.1-26_Oct_2023",
    cves: "5",
    processes: "33",
    nist_csf_policies: "17",
    nist_csf_sub_categories: "31",
    nist_800_controls: "31",
  },
  {
    name: "AWS SNS",
    version: "v1.2-25_Oct_2023",
    cves: "9",
    processes: "31",
    nist_csf_policies: "19",
    nist_csf_sub_categories: "14",
    nist_800_controls: "19",
  },
  {
    name: "AWS EBS",
    version: "v1.0-25_Oct_2023",
    cves: "14",
    processes: "12",
    nist_csf_policies: "8",
    nist_csf_sub_categories: "17",
    nist_800_controls: "28",
  },
  {
    name: "AWS Lambda",
    version: "v2.0-25_Oct_2023",
    cves: "22",
    processes: "32",
    nist_csf_policies: "25",
    nist_csf_sub_categories: "27",
    nist_800_controls: "17",
  },
];


export const NIST_CSF_POLICIES = [
  {
    id:1,
    summary:{
      category:"Identify",
      totalPolicies: 17,
    },
    policies:[
      {
        category: "Asset Management",
        policies: 5,
      },
      {
        category: "Business Environment",
        policies: 0,
      },
      {
        category: "Governance",
        policies: 0,
      },
      {
        category: "Risk Assessment",
        policies: 0,
      },
      {
        category: "Risk Management Strategy",
        policies: 5,
      },
      {
        category: "Supply Chain Risk Management",
        policies: 7,
      },
    ]
  },
  {
    id:2,
    summary:{
      category:"Protect",
      totalPolicies: 100,
    },
    policies:[
      {
        category: "Identity Management & Access Control",
        policies: 20,
      },
      {
        category: "Awareness and Training",
        policies: 25,
      },
      {
        category: "Data Security",
        policies: 26,
      },
      {
        category: "Information Protection Processes & Procedures",
        policies: 28,
      },
      {
        category: "Maintenance",
        policies: 3,
      },
      {
        category: "Protective Technology",
        policies: 18,
      },
    ]
  },
  {
    id:3,
    summary:{
      category:"Detect",
      totalPolicies: 13,
    },
    policies:[
      {
        category: "Anomalies and Events",
        policies: 4,
      },
      {
        category: "Security Continuous Monitoring",
        policies: 5,
      },
      {
        category: "Detection Processes",
        policies: 4,
      },
      
    ]
  },
  {
    id:4,
    summary:{
      category:"Respond",
      totalPolicies: 11,
    },
    policies:[
      {
        category: "Response Planning",
        policies: 3,
      },
      {
        category: "Communications",
        policies: 2,
      },
      {
        category: "Analysis",
        policies: 4,
      },
      {
        category: "Mitigation",
        policies: 0,
      },
      {
        category: "Improvements",
        policies: 2,
      },
      
    ]
  },
  {
    id:5,
    summary:{
      category:"Recover",
      totalPolicies: 9,
    },
    policies:[
      {
        category: "Recovery Planning",
        policies: 3,
      },
      {
        category: "Improvements",
        policies: 2,
      },
      {
        category: "Communications",
        policies: 4,
      },
      
    ]
  },
  
]