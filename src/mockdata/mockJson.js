export const NIST_MOCK_DATA = [{
    id : "1",
    summary : {
        category: "Identify",
        policies : 33  ,
        runbooks : 10,
        compilance : 80,
    }, 
    categories: [
        {
             category : "Asset Management",
             policy : 20,
             runbook:6,
             compilance : 80,

        },
        {
            category : "Business Environment",
            policy : 0,
             runbook:0,
             compilance : 0,
        },
        {
            category : "Governance",
            policy : 0,
             runbook:0,
             compilance : 0,
        },
        {
            category : "Risk Assessment",
            policy : 0,
             runbook:0,
             compilance : 0,
        },
        {
            category : "Risk Management Strategy",
            policy : 3,
             runbook:1,
             compilance : 75,
        },
        {
            category : "Supply Chain Risk Management",
            policy : 10,
             runbook:3,
             compilance : 85,
        }
        
    ]},
    {
        id : "2",
        summary : {
            category: "Protect",
            policies : 100  ,
            runbooks : 30,
            compilance : 65,
        }, 
        categories: [
            {
                 category : "Identity Management & Access Control",
                 policy : 20,
                 runbook:7,
                 compilance : 65,
    
            },
            {
                category : "Awarness and Training",
                policy : 5,
                 runbook:1,
                 compilance : 0,
            },
            {
                category : "Data Security",
                policy : 26,
                 runbook:8,
                 compilance : 0,
            },
            {
                category : "Information Protection Processes & Procedures",
                policy : 28,
                 runbook:8,
                 compilance : 0,
            },
            {
                category : "Maintenance",
                policy : 3,
                 runbook:1,
                 compilance : 75,
            },
            {
                category : "Protective Technology",
                policy : 18,
                 runbook:5,
                 compilance : 55,
            }
            
        ]},
        {
            id : "3",
            summary : {
                category: "Detect",
                policies : 29  ,
                runbooks : 7,
                compilance : 72,
            }, 
            categories: [
                {
                     category : "Anomalies and Events",
                     policy : 4,
                     runbook:1,
                     compilance : 82,
        
                },
                {
                    category : "Security Continuous Monitoring",
                    policy : 17,
                     runbook:4,
                     compilance : 74,
                },
                {
                    category : "Detection Processes",
                    policy : 8,
                     runbook:2,
                     compilance : 60,
                }
            ]},{
                id : "4",
                summary : {
                    category: "Respond",
                    policies : 28 ,
                    runbooks : 7,
                    compilance : 90,
                }, 
                categories: [
                    {
                         category : "Response Planning",
                         policy : 4,
                         runbook:1,
                         compilance : 95,
            
                    },
                    {
                        category : "Communications",
                        policy : 15,
                         runbook:4,
                         compilance : 95,
                    },
                    {
                        category : "Analysis",
                        policy : 3,
                         runbook:1,
                         compilance : 90,
                    },
                    {
                        category : "Mitigation",
                        policy : 0,
                         runbook:0,
                         compilance : 85,
                    },
                    {
                        category : "Improvements",
                        policy : 6,
                         runbook:1,
                         compilance : 85,
                    }
                ]}
                ,{
                    id : "5",
                    summary : {
                        category: "Recover",
                        policies : 21  ,
                        runbooks : 5,
                        compilance : 72,
                    }, 
                    categories: [
                        {
                             category : "Recovery Planning",
                             policy : 4,
                             runbook:1,
                             compilance : 82,
                
                        },
                        {
                            category : "Improvements",
                            policy : 8,
                             runbook:2,
                             compilance : 74,
                        },
                        {
                            category : "Communications",
                            policy : 9,
                             runbook:2,
                             compilance : 60,
                        }
                    ]},
                   
]