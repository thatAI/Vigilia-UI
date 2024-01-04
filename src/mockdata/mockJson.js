export const NIST_MOCK_DATA = [
  {
    id: "1",
    summary: {
      category: "Identify",
      policies: 33,
      runbooks: 10,
      Compliance: 80,
    },
    categories: [
      {
        category: "Asset Management",
        policy: 20,
        runbook: 6,
        Compliance: 80,
      },
      {
        category: "Business Environment",
        policy: 0,
        runbook: 0,
        Compliance: 0,
      },
      {
        category: "Governance",
        policy: 0,
        runbook: 0,
        Compliance: 0,
      },
      {
        category: "Risk Assessment",
        policy: 0,
        runbook: 0,
        Compliance: 0,
      },
      {
        category: "Risk Management Strategy",
        policy: 3,
        runbook: 1,
        Compliance: 75,
      },
      {
        category: "Supply Chain Risk Management",
        policy: 10,
        runbook: 3,
        Compliance: 85,
      },
    ],
  },
  {
    id: "2",
    summary: {
      category: "Protect",
      policies: 100,
      runbooks: 30,
      Compliance: 65,
    },
    categories: [
      {
        category: "Identity Management & Access Control",
        policy: 20,
        runbook: 7,
        Compliance: 65,
      },
      {
        category: "Awareness and Training",
        policy: 5,
        runbook: 1,
        Compliance: 0,
      },
      {
        category: "Data Security",
        policy: 26,
        runbook: 8,
        Compliance: 0,
      },
      {
        category: "Information Protection Processes & Procedures",
        policy: 28,
        runbook: 8,
        Compliance: 0,
      },
      {
        category: "Maintenance",
        policy: 3,
        runbook: 1,
        Compliance: 75,
      },
      {
        category: "Protective Technology",
        policy: 18,
        runbook: 5,
        Compliance: 55,
      },
    ],
  },
  {
    id: "3",
    summary: {
      category: "Detect",
      policies: 29,
      runbooks: 7,
      Compliance: 72,
    },
    categories: [
      {
        category: "Anomalies and Events",
        policy: 4,
        runbook: 1,
        Compliance: 82,
      },
      {
        category: "Security Continuous Monitoring",
        policy: 17,
        runbook: 4,
        Compliance: 74,
      },
      {
        category: "Detection Processes",
        policy: 8,
        runbook: 2,
        Compliance: 60,
      },
    ],
  },
  {
    id: "4",
    summary: {
      category: "Respond",
      policies: 28,
      runbooks: 7,
      Compliance: 90,
    },
    categories: [
      {
        category: "Response Planning",
        policy: 4,
        runbook: 1,
        Compliance: 95,
      },
      {
        category: "Communications",
        policy: 15,
        runbook: 4,
        Compliance: 95,
      },
      {
        category: "Analysis",
        policy: 3,
        runbook: 1,
        Compliance: 90,
      },
      {
        category: "Mitigation",
        policy: 0,
        runbook: 0,
        Compliance: 85,
      },
      {
        category: "Improvements",
        policy: 6,
        runbook: 1,
        Compliance: 85,
      },
    ],
  },
  {
    id: "5",
    summary: {
      category: "Recover",
      policies: 21,
      runbooks: 5,
      Compliance: 72,
    },
    categories: [
      {
        category: "Recovery Planning",
        policy: 4,
        runbook: 1,
        Compliance: 82,
      },
      {
        category: "Improvements",
        policy: 8,
        runbook: 2,
        Compliance: 74,
      },
      {
        category: "Communications",
        policy: 9,
        runbook: 2,
        Compliance: 60,
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
    id: 1,
    summary: {
      category: "Identify",
      totalPolicies: 17,
    },
    policies: [
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
    ],
  },
  {
    id: 2,
    summary: {
      category: "Protect",
      totalPolicies: 100,
    },
    policies: [
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
    ],
  },
  {
    id: 3,
    summary: {
      category: "Detect",
      totalPolicies: 13,
    },
    policies: [
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
    ],
  },
  {
    id: 4,
    summary: {
      category: "Respond",
      totalPolicies: 11,
    },
    policies: [
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
    ],
  },
  {
    id: 5,
    summary: {
      category: "Recover",
      totalPolicies: 9,
    },
    policies: [
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
    ],
  },
];

export const INSTALL_RUNBOOK_DATA = [
  {
    id: 1,
    name: "AWS S3 ",
    version: "v1.1-16_Oct_2023",
    cves: "2",
    processes: "28",
    nist_csf_policies: "17",
    nist_csf_sub_categories: "16",
    nist_800_controls: "18",
  },

  {
    id: 2,
    name: "AWS RDS",
    version: "v1.1-17_Oct_2023",
    cves: "3",
    processes: "31",
    nist_csf_policies: "19",
    nist_csf_sub_categories: "21",
    nist_800_controls: "14",
  },
  {
    id: 3,
    name: "AWS EC2",
    version: "v1.1-18_Oct_2023",
    cves: "1",
    processes: "12",
    nist_csf_policies: "8",
    nist_csf_sub_categories: "24",
    nist_800_controls: "27",
  },
  {
    id: 4,
    name: "AWS IAM",
    version: "v2.0-19_Oct_2023",
    cves: "1",
    processes: "32",
    nist_csf_policies: "25",
    nist_csf_sub_categories: "8",
    nist_800_controls: "23",
  },
];

export const RUNBOOK_DETAIL_DESCRITPTION = {
  runbook: {
    goal: "Ensure that the Amazon S3 service is configured, managed, and operated in accordance with the security and privacy controls outlined in the National Institute of Standards and Technology (NIST) Cybersecurity Framework v1.1 and NIST Special Publication (SP) 800-53r5.\n",
    name: "AWS S3 HRO Runbook",
    impact:
      "Data Breaches: S3 buckets that are misconfigured can be left publicly accessible, leading to unauthorized access and potential disclosure of sensitive data. This could result in financial losses, reputational damage, and potential legal liabilities.\nData Loss: Improperly configured backup and retention policies can lead to unintentional data deletion or loss.\nData Corruption: Without the proper access controls, data integrity can be compromised either accidentally or maliciously.\nRegulatory and Compliance Issues: Organizations subject to regulations may face penalties, fines, or other legal actions for not adhering to required standards.\nLoss of Trust: Stakeholders, including customers and partners, may lose trust in an organization that fails to secure its data adequately.\nOperational Disruptions: Misconfigurations can disrupt services and business operations, leading to financial loss and increased operational costs.\nFinancial Costs: Remediation of issues after they arise is often more expensive than proactive measures. Organizations might have to invest in emergency response, forensic investigations, public relations campaigns, and other unexpected expenses.\nLegal Implications: If sensitive data such as personal identifiable information (PII) is exposed due to misconfigurations, organizations could face lawsuits.\nReputational Damage: Negative press coverage from a data leak or breach can harm an organization's reputation, potentially leading to loss of customers or business opportunities.\nAuditing Failures: Failure to align with NIST guidelines could lead to unfavorable results during security audits, which can have cascading effects, including loss of contracts or business.\nIncreased Vulnerability: Not following the framework can lead to vulnerabilities that cybercriminals can exploit, increasing the chances of cyberattacks.\nLoss of Competitive Advantage: If business strategies, proprietary algorithms, or trade secrets stored in S3 are exposed, it might give competitors an unfair advantage.\n\n",
    version: "v1.1-16_Oct_2023",
    runbookid: 2,
    isinstalled: true,
    cloudvendorid: "AWS",
    cloudservicecategoryid: 1,
  },
  processes: [
    {
     
      name: "Ensure S3 “Public Block Access” settings are set as follows on the bucket",
      steps:
        "Retrieve the Current Bucket Policy Settings:\nUse get_bucket_policy_status to see the current policy status.\nThis will help determine if there are any existing policies that may grant public access.\nHRO Check Current State: Ensure that you have a clear and comprehensive understanding of the current bucket policy settings, especially with regard to public access.\nCheck Current Public Block Settings:\nHRO Reminder Prompt: \"Cross-reference with known configurations to ensure accuracy in current settings retrieval.\"\nUse the get_public_access_block API call to retrieve the bucket's current public access block settings.\nSet or Update Public Block Access:\nHRO Preparatory Operator Validation: Confirm that you understand the importance of blocking all public access, and that you have the right settings ready for implementation.\nHRO Preparatory Watch Team Validation: Verify and validate the proposed block access settings before applying them to ensure no oversight.\nUtilize the put_public_access_block API call to set the appropriate block access settings.\nMake sure to set all public block options to True to block all public access. This includes:\nBlockPublicAcls\nIgnorePublicAcls\nBlockPublicPolicy\nRestrictPublicBuckets\nVerify the Changes:\nRepeat the get_public_access_block call to confirm that the desired settings have been correctly applied.\nReview any other bucket policies or IAM policies to ensure they don't inadvertently provide public access.\nHRO Operator Validation: Ensure each setting accurately blocks public access and there are no mismatches or omissions.\nHRO Watch Team Validation [required]: Mandatory secondary validation to confirm correct blocking across all public access settings.\nAudit Regularly:\nPeriodically use the list_buckets followed by get_public_access_block for each bucket to ensure no public access settings have changed.\nConsider setting up CloudWatch or AWS Config to monitor and alert on any changes to public access settings for critical buckets.\nHRO Request Feedback: After a series of checks, request feedback from the team to improve the monitoring process. Ensure everyone remains vigilant about the importance of blocking all public access.\n\n",
      impact: "",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose: "Minimize attack surface for high risk assets\n",
      dependencies: null,
      runbookprocessid: 21,
    },
    {
      name: "Identify assets to be stored in S3 Buckets",
      steps:
        "Identify Assets:\nHRO Proficiency Test: Ensure that the operator comprehends the significance and categorization criteria of assets before proceeding.\nHRO Reminder Prompt: \"Remember to thoroughly examine each object's metadata and cross-reference with security protocols to ensure accurate asset identification.\"\nExamine the metadata of each object to discern the nature of the asset. Depending on your criteria, the specifics of this step might vary.\nFor potential confidential assets or those containing sensitive data, consider inspecting additional attributes such as object tags or even the object's content.\nDetermine FIPS 199 Security Categorization of Assets:\nAssess the confidentiality, integrity, and availability requirements of the assets.\nReference the FIPS 199 standard to determine the appropriate security categorization (LOW, MODERATE, HIGH) for each requirement (Confidentiality, Integrity, Availability).\nCombine the individual categorizations to derive the overall FIPS 199 security categorization for the asset.\nDocument the FIPS 199 security categorization for reference in subsequent processes and audits.\nHRO Operator Validation: Confirm that the derived FIPS 199 security categorization for each asset is accurate and adheres to the defined criteria.\nHRO Watch Team Validation [required]: Engage a designated watch team to cross-check and validate the security categorization. Any discrepancies should be flagged for further investigation.\nDocument/Inventory Assets:\nAs assets are identified, maintain a structured inventory. This could be within your script or in an external system or database.\nRecord pertinent details like the bucket's name, the object's key, size, last modified date, and other relevant metadata.\nReview and Verification:\nAfter identifying and cataloging the assets, review the compiled list.\nEnsure that assets, especially those deemed confidential or sensitive, are correctly and comprehensively identified.\nHRO Request Feedback: Invite feedback from team members regarding the effectiveness of the asset identification and categorization process, looking for any suggestions or potential areas of improvement.\n\n",
      impact:
        "Misclassifying assets stored in S3 buckets can directly lead to one or more of the failure scenarios.\n",
      output: "Security Categorization of S3 asset\n",
      seccat:
        "HIGH = (Confidentiality: HIGH, Integrity: HIGH, Availability: HIGH)\n",
      purpose: "Understand the risk associated with the contained assets\n",
      dependencies: null,
      runbookprocessid: 9,
    },
    {
      name: "Identify threats to the Data Stored in S3 bucket",
      steps:
        'Preparation:\nHRO Proficiency Test: Validate the operator\'s familiarity with AWS S3 configurations and threat identification process.\nHRO Reminder Prompt: "Ensure complete understanding of the specific dataset stored within the S3 bucket and its importance to the organization."\nInventory Asset:\nIdentify which S3 bucket contains the dataset.\nHRO Check Current State: Validate that the S3 bucket\'s current state matches the most recent documented configuration.\nDocument bucket properties like region, creation date, owner, and permissions.\nAnalyze Bucket Policies and Permissions:\nHRO Reminder Prompt: "Permissions should adhere to the principle of least privilege."\nRetrieve Bucket Policy: Use the AWS API (get_bucket_policy method) to fetch the policy.\nReview Bucket ACLs: Retrieve and inspect the Access Control Lists (ACLs).\nEvaluate Cross-Account Access: Check for permissions that allow access from external AWS accounts.\nEvaluate Data Encryption:\nHRO Time sensitive: If encryption is not found, raise an immediate alert or prompt for action.\nCheck Encryption at Rest: Determine if server-side encryption is enabled for the S3 bucket using the AWS API (get_bucket_encryption method).\nEvaluate Data Transit Encryption: Ensure data is encrypted during transit.\nAssess Logging and Monitoring:\nHRO Reminder Prompt: "Regular monitoring and logging are vital for early threat detection."\nEvaluate Logging: Confirm if AWS S3 access logs are enabled.\nReview Monitoring Setup: Ensure AWS CloudTrail is enabled for monitoring API calls.\nReview Versioning and Backup:\nHRO Time sensitive: Ensure backup routines and versioning are timely to minimize data loss risks.\nCheck Bucket Versioning: Determine if versioning is enabled on the bucket.\nBackup Assessment: Ensure a backup strategy is in place, either through S3 replication or other means.\nThreat Modeling:\nHRO Proficiency Test: Ensure the operator understands threat modeling methodologies and techniques.\nIdentify Likely Threat Actors: Determine potential malicious actors based on the nature of the data.\nEnumerate Possible Attack Vectors: List potential ways malicious actors might attempt to compromise the data.\nEvaluate Impact: Assess the potential impact on the organization for each identified threat.\nDocument Findings:\nCompile Threat Report: Document all identified threats, potential attack vectors, and their impact.\nRecommend Mitigations: Suggest actions to reduce the risk for each threat.\nHRO Operator Validation: Confirm that all identified threats and recommended mitigations have been comprehensively and accurately documented.\nHRO Watch Team Validation: Engage a designated watch team to review the threat report, ensuring comprehensiveness and accuracy.\n\nReview and Update Periodically:\nRepeat this process at regular intervals to stay updated on potential risks.\nHRO Request Feedback: Encourage team members to provide feedback on the threat identification process, aiming to refine and improve the methodology based on evolving threats and organizational needs.\n\n',
      impact: "",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose: "Understand threats (vulnerabilities) to S3 buckets\n",
      dependencies: null,
      runbookprocessid: 10,
    },
    {
      name: "Identify Authorized Users",
      steps:
        'Identify Applicable S3 Buckets:\nBefore using the AWS API, you\'d need to know which S3 buckets contain the dataset in question. This could be based on naming conventions, tags, or other organizational methods you have in place.\nHRO Check Current State: Verify that you\'re evaluating the most recent version of the S3 bucket configurations.\nAnalyze Permissions for Each Bucket:\nHRO Proficiency Test: Confirm the individual performing this task has the necessary AWS permissions and skills.\nHRO Reminder Prompt: "Thoroughly review each policy, as overlooking details could lead to unauthorized access or data exposure."\nFor each bucket, retrieve the bucket policy using the get_bucket_policy method or aws s3api get-bucket-policy command.\nExtract identities (users, roles, and groups) from the bucket policies which have permissions to the buckets.\nReview Bucket Access Control Lists (ACLs):\nHRO Proficiency Test: Ensure reviewer understands ACL significance.\nHRO Reminder Prompt: "Double-check each ACL entry. Misconfigurations can lead to unintended access permissions."\nRetrieve and inspect the Access Control Lists (ACLs) for each bucket using the get_bucket_acl method or aws s3api get-bucket-acl command.\nIdentify any users or predefined groups with permissions from the ACLs.\nEvaluate IAM Policies:\nHRO Proficiency Test: Confirm capability to interpret IAM policies.\nHRO Reminder Prompt [required]: "Ensure that IAM policies are scrutinized. Overlooked permissions can be a potential security risk."\nUse the list_policies method or aws iam list-policies command to retrieve all policies.\nFor each policy, use get_policy_version or aws iam get-policy-version command to get the policy details.\nAnalyze the policies to see which ones have S3 permissions and identify associated users or roles.\nList IAM Users, Roles, and Groups:\nHRO Reminder Prompt: "Validate that the lists are comprehensive and include all relevant IAM entities."\nRetrieve a list of IAM users using list_users method or aws iam list-users command.\nRetrieve a list of IAM roles using list_roles method or aws iam list-roles command.\nRetrieve a list of IAM groups using list_groups method or aws iam list-groups command.\nCross-Reference IAM Entities with S3 Permissions:\nHRO Proficiency Test: Ensure understanding of IAM and S3 permissions.\nHRO Reminder Prompt: "Ensure that all IAM entities have the intended access to the relevant S3 buckets. Cross-check meticulously."\nCross-reference the IAM users, roles, and groups from step 5 with the permissions identified in steps 2, 3, and 4 to determine which IAM entities have access to which S3 buckets.\nDocument Identified Users and Roles:\nCompile a report detailing which users, roles, and groups have access to each S3 bucket, including the type of access (read, write, etc.).\nHRO Operator Validation: Verify the report.\nHRO Watch Team Validation [required]: A secondary team or individual should review the findings for completeness and accuracy, ensuring that all accesses are intended and authorized.\nPeriodic Review:\nRegularly repeat these steps to ensure that the list of authorized users remains up-to-date, especially when there are changes in personnel or bucket configurations.\nHRO Request Feedback: Encourage feedback on the review process, aiming to refine and improve the methodology over time based on any challenges or insights encountered.\n\n',
      impact:
        "Unauthorized Access: If identities are not clearly defined or managed, unauthorized users or devices might gain access to sensitive data, leading to potential breaches of confidential information.\nAccount Compromise: Without a clear understanding and management of authorized users, accounts are more susceptible to phishing attacks, brute force, or other methods of unauthorized access.\nElevation of Privileges: Misconfiguration or lax management can allow users or devices to gain more privileges than intended, potentially giving them access to critical functions or data.\n",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose:
        "Understand which users, groups of users or devices which require access to the stored assets\n",
      dependencies: null,
      runbookprocessid: 11,
    },
    {
      name: "Ensure all user access is strongly authenticated and authorized",
      steps: "",
      impact: "",
      output: "",
      seccat: "",
      purpose:
        "Retain confidentiality and integrity of assets by scoping access to authorized users\n",
      dependencies: null,
      runbookprocessid: 12,
    },
    {
      name: "Ensure all S3 bucket policies are free of wildcards in the identity fields",
      steps:
        'Retrieve Current Bucket Policy:\nUse the get_bucket_policy API call to obtain the policy attached to the S3 bucket.\nHRO Check Current State: Ensure that you understand the current policy setup and that no prior deviations exist.\nParse and Inspect the Policy:\nHRO Proficiency Test: Evaluate your understanding of AWS IAM policies and their structure.\nHRO Reminder Prompt: "Wildcards (*) in \'Principal\' or \'Action\' fields can lead to overly permissive access. Always adhere to the principle of least privilege."\nConvert the policy from a JSON string to a readable format.\nExamine the policy\'s statements. Look for any statements with a wildcard (*) in the "Principal" or "Action" field.\nRemove or Update Overly Permissive Policies:\nIf wildcards are found in inappropriate locations, modify the policy to be more specific or remove that statement entirely.\nApply the Updated Policy:\nHRO Preparatory Operator Validation: Confirm that you are aware of the implications of changing the bucket policy and have backup or rollback options ready.\nHRO Preparatory Watch Team Validation: Seek a secondary verification to ensure that the updated policy is appropriately configured without oversights.\nUtilize the put_bucket_policy API call to replace the old policy with the revised one.\nVerify the Changes:\nRetrieve the bucket policy again with get_bucket_policy and ensure that the wildcard entries are removed.\nAlso, validate that the changes didn\'t negatively affect legitimate users or processes.\nHRO Operator Validation: Reconfirm that the applied changes match the intended policy modifications.\nHRO Watch Team Validation [required]: Mandatory secondary validation to guarantee that the policy is free from wildcards and no unintended permissions are granted.\nRegular Audits:\nHRO Reminder Prompt: "Maintaining security is an ongoing process. Always be vigilant of any policy changes that might introduce risks."\nPeriodically repeat the process to ensure no new wildcard permissions have been added.\nConsider setting up AWS Config or CloudWatch alarms to monitor and alert on any changes to bucket policies that reintroduce wildcards.\nHRO Request Feedback: Seek feedback after audits to continuously improve the process and ensure alignment with HRO principles.\n\n',
      impact:
        "Unauthorized Access: Wildcards in identity fields could allow any AWS entity to access the S3 bucket, potentially leading to data breaches.\nService Disruption: Overly permissive permissions could enable disruptive actions against the service or data.\nIncreased Risk Profile: With wildcards in policies, the surface area of potential threats expands dramatically.\nCompliance Issues: Many data protection regulations and guidelines emphasize the principle of least privilege. Wildcard permissions could be in violation of such standards.\n\n",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose: "Ensure appropriate access controls\n",
      dependencies: null,
      runbookprocessid: 22,
    },
    {
      name: "Ensure bucket policies limit access to authorized users only",
      steps:
        'Identify Applicable S3 Buckets:\nBefore using the AWS API, you\'d need to know which S3 buckets contain the dataset in question. This could be based on naming conventions, tags, or other organizational methods you have in place.\nHRO Check Current State: Validate you are referencing the most recent and relevant S3 bucket list.\nRetrieve Current Bucket Policy for Specific Bucket:\nAPI: s3:GetBucketPolicy\nUse this API call to retrieve the current policy for the identified bucket to inspect its existing permissions.\nEvaluate the Retrieved Policy:\nHRO Proficiency Test: Verify the evaluator\'s capability to understand AWS bucket policies.\nHRO Reminder Prompt: "Check permissions meticulously against organizational norms. Adhere to the principle of least privilege."\nManual or automated policy analysis to check if the permissions adhere to the principle of least privilege and only allow necessary access.\nList IAM Users, Groups, and Roles:\nHRO Reminder Prompt: "Ensure all IAM entities are captured. Missed entities could lead to unintended access."\nAPIs: iam:ListUsers, iam:ListGroups, and iam:ListRoles\nTo set or adjust permissions correctly, understanding the potential bucket accessors (users/groups/roles) is essential.\nModify or Set Bucket Policy for the Specific Bucket:\nHRO Preparatory Operator Validation: Confirm understanding of necessary policy changes.\nHRO Preparatory Watch Team Validation: Ensure a secondary review of the intended policy changes.\nAPI: s3:PutBucketPolicy\nIf adjustments are required based on the evaluation from step 3, use this API call to apply a new or updated policy to the identified bucket.\nValidate Changes:\nOnce changes are applied, attempt to access the bucket using various user roles to ensure the new permissions work as intended and that access controls are functioning correctly.\nHRO Operator Validation: Confirm the effectiveness of changes from an operator standpoint.\nHRO Watch Team Validation [required]: A mandatory secondary validation to ensure policy changes are correctly implemented.\nEnable Bucket Policy Logging (Optional) for the Specific Bucket:\nAPI: s3:PutBucketLogging\nFor additional security and auditing, enable access logging on the bucket of interest. This provides a record of all requests, helping you monitor and review access patterns.\nHRO Watch Team Validation: Ensure logs are correctly capturing the necessary information.\nPeriodic Review of Bucket Policy:\nPeriodically re-evaluate and adjust the bucket policy as necessary to make sure it aligns with any changes in organizational or security requirements.\nHRO Request Feedback:  Encourage team members to suggest improvements or report potential vulnerabilities in the policy.\n\n',
      impact: "",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose:
        "Ensure that controls are in place to limit access to required uses\n",
      dependencies: null,
      runbookprocessid: 13,
    },
    {
      name: "Disable ACLs by setting bucket owner enforced",
      steps:
        "Identify Applicable S3 Buckets:\nBefore making any changes, identify which S3 buckets are related to the dataset or application in question.\nHRO Check Current State: Confirm you are working with the correct list of S3 buckets relevant to the dataset or application.\nRetrieve Current Bucket ACL for Specific Bucket:\nHRO Proficiency Test: Verify the individual's ability to accurately retrieve and understand AWS bucket ACLs.\nHRO Reminder Prompt: \"Ensure accurate retrieval of the ACL to avoid potential misconfigurations.\"\nAPI: s3:GetBucketAcl\nFetch the current Access Control List for the bucket in question to understand its present state.\nRetrieve Bucket Public Access Block Configuration:\nAPI: s3:GetPublicAccessBlock\nCheck if public access is already blocked for the bucket. If not, you'd want to modify this setting as part of ensuring more secure access control.\nBlock All Public Access:\nHRO Reminder Prompt: \"Always confirm the public access is blocked before proceeding.\"\nAPI: s3:PutPublicAccessBlock\nDisable all public access. This is a best practice and ensures that ACLs or other permissions don't inadvertently allow public access. Set the parameters (like BlockPublicAcls and IgnorePublicAcls) to true.\nRemove All ACL Permissions:\nHRO Reminder Prompt: \"Double-check the ACL settings to make certain only the bucket owner has access.\"\nHRO Preparatory Operator Validation: Operator indicates understanding of the procedure and implications of removing ACLs.\nHRO Preparatory Watch Team Validation: Secondary review to ensure no unintentional blockages occur.\nSince the goal is to shift towards IAM policies and not use ACLs, you might decide to reset the bucket's ACL to its default state where only the bucket owner has access.\nAPI: s3:PutBucketAcl\nSet the ACL parameter to \"private\", which grants full control to the owner and denies all other access.\nReview and Adjust IAM Bucket Policies as Needed:\nAPI: s3:GetBucketPolicy and s3:PutBucketPolicy\nFirst, retrieve the existing policy (if any) using s3:GetBucketPolicy. Then, based on your organization's requirements, adjust or create an IAM policy using s3:PutBucketPolicy.\nHRO Request Feedback: Request team feedback to improve processes or identify overlooked areas.\nValidate Changes:\nIt's crucial to ensure that the changes haven't inadvertently blocked legitimate users or applications. Test access using different roles and verify that your IAM policies are granting the appropriate permissions while ACLs are not being used.\nHRO Operator Validation: Confirm changes from the operator's perspective.\nHRO Watch Team Validation [required]: A mandatory validation to ensure changes were appropriately implemented.\n\n",
      impact: "",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose:
        "ACLs do not ensure strong authentication, IAM policy is preferred control\n",
      dependencies: null,
      runbookprocessid: 14,
    },
    {
      name: "Ensure all AWS clients use IAM roles for authN/authZ",
      steps:
        'Define IAM Roles for S3 Access:\nHRO Proficiency Test: Test operator\'s competency in defining and setting IAM roles correctly.\nHRO Reminder Prompt: "Ensure IAM roles strictly adhere to the principle of least privilege."\nUse the CreateRole API call to define new IAM roles.\nSet permissions specifically for S3 using the PutRolePolicy API call to attach inline policies or AttachRolePolicy to attach managed policies to the role.\nIdentify Applicable S3 Buckets:\nBefore making any changes, identify which S3 buckets are related to the dataset or application in question.\nHRO Check Current State: Verify the list of S3 buckets to ensure alignment with the dataset or application.\nScan Bucket Policies:\nHRO Reminder Prompt: "Ensure that each policy aligns with IAM role-based access guidelines."\nFor each bucket from step 2, use the GetBucketPolicy API call to check which policies are attached to them.\nApply IAM Role-Based Policies to Buckets:\nHRO Preparatory Operator Validation: Confirm the understanding and appropriateness of the IAM roles and policies before applying them.\nHRO Preparatory Watch Team Validation: Secondary check to validate the role-based policies.\nFor each bucket, adjust its policies to allow access only to specific IAM roles or users, and possibly deny all other accesses. This is achieved using the PutBucketPolicy API call.\nReview IAM Role Permissions:\nPeriodically use the GetRolePolicy API call to review permissions of IAM roles. Ensure that roles have only the necessary permissions for S3 and not broad permissions.\nHRO Operator Validation: Confirm the permissions of the IAM roles.\nHRO Watch Team Validation [required]: Mandatory validation for IAM role permissions.\nRotate and Remove Old Access Keys:\nHRO Reminder Prompt: "Always cross-check access keys before deletion to prevent accidental removal of active keys."\nUse the ListAccessKeys API call to list all access keys associated with a user.\nUse the DeleteAccessKey API call to remove old or unused access keys.\nHRO Watch Team Validation: Check the removal of outdated access keys.\nAudit and Monitor S3 Access:\nHRO Reminder Prompt: "Regularly check for any unauthorized or unusual access patterns in the logs."\nUtilize AWS CloudTrail logs to monitor S3 access activities.\nPeriodically fetch and review logs with the LookupEvents API call to see which IAM roles or users are accessing the buckets, ensuring compliance with the expected access patterns.\nHRO Watch Team Validation: Confirm that S3 access activities align with the predefined guidelines.\nImplement Cross-Account Access with IAM Roles (if necessary):\nHRO Reminder Prompt: "Ensure that only trusted accounts have cross-account access."\nIf S3 buckets need to be accessed by entities in different AWS accounts, employ the AssumeRole API call to assume permissions in the target account, ensuring entities from other accounts are also using IAM roles.\nAdjust bucket policies with the PutBucketPolicy API call, granting permissions to the IAM role ARN from the other account.\nHRO Watch Team Validation: Validate the cross-account access setup.\nRegularly Review and Update:\nPeriodically revisit the procedure, especially when new buckets are created, ensuring they also follow IAM role-based access.\nHRO Request Feedback: Share any challenges or suggestions to improve the IAM role-based access process.\n\n',
      impact:
        "Insecure Access: Without IAM roles, there's a higher chance of credentials being exposed, leading to unauthorized access.\nAuditing Challenges: IAM roles make it easier to trace who did what, making auditing and accountability more straightforward.\nIncreased Attack Surface: Hardcoded or stored AWS keys (as opposed to temporary IAM role credentials) can be a security risk if exposed.\n\n",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose:
        "Device identification using IAM roles provides strong authentication for services\n",
      dependencies: null,
      runbookprocessid: 15,
    },
    {
      name: "Assess and document risk profile for each asset",
      steps: "",
      impact: "",
      output: "",
      seccat: "",
      purpose: "Understand and communicate risk of unauthorized access\n\n",
      dependencies: null,
      runbookprocessid: 16,
    },
    {
      name: "Assess value of the assets and the likelihood of threat success",
      steps:
        'Identify Applicable S3 Buckets:\nBefore making any changes, identify which S3 buckets are related to the dataset or application in question.\nHRO Check Current State: Validate the current state of the S3 buckets and ensure a correct list of assets.\nClassify Assets:\nHRO Proficiency Test: Assess operator’s ability to correctly classify assets based on various criteria.\nHRO Reminder Prompt: "Remember to consider data sensitivity, business relevance, and compliance requirements during classification."\nReview object metadata, tags, or naming conventions to help classify the assets.\nYou might also consider integrating with Amazon Macie, which uses machine learning to automatically discover, classify, and protect sensitive data stored in AWS.\nIdentify Bucket and Object Permissions:\nHRO Reminder Prompt: "Verify that permissions align with business needs and avoid overly permissive configurations."\nFor each bucket, use get-bucket-acl and get-bucket-policy to determine its access controls and policies.\nCheck object permissions with get-object-acl.\nAnalyze AWS CloudTrail Logs:\nIf CloudTrail is enabled, review the logs to understand access patterns to the S3 buckets and objects.\nAnalyze API call history to detect any unusual or unauthorized activities.\nHRO Watch Team Validation: Periodic examination of access patterns to identify anomalies.\nEvaluate External Threat Intelligence:\nHRO Reminder Prompt: "Stay updated with the latest threat intelligence feeds and always correlate with current configurations."\nIntegrate with AWS Security Hub or third-party services that provide threat intelligence feeds.\nUnderstand common threat vectors, especially those pertinent to S3, to gauge the likelihood of various threats.\nAssess Value:\nCombine information from asset classification, permissions, access patterns, and external intelligence to derive a value for each asset.\nThis may be a qualitative measure (e.g., high, medium, low) or a quantitative one.\nHRO Watch Team Validation: Ensure that the derived asset value is accurate and reflective of its significance.\nCalculate Threat Likelihood:\nHRO Reminder Prompt: "When estimating threat likelihood, consider historical incidents, known vulnerabilities, and threat intelligence insights."\nBased on historical data, current configurations, and threat intelligence, estimate the likelihood of potential threats for each asset.\nDocument Findings:\nUse AWS services like AWS Systems Manager Parameter Store or Amazon RDS to securely document your findings. Alternatively, consider documenting findings in an internal risk management tool or database.\nHRO Operator Validation: Confirm that the findings are well-documented and comprehensible.\nHRO Watch Team Validation [required]: A mandatory second check to ensure findings are documented properly and securely.\nReview and Update Regularly:\nSet up regular intervals (e.g., quarterly) to review and update your asset value assessments and threat likelihood calculations. Use AWS Lambda and CloudWatch Events to automate and schedule these reviews.\nHRO Request Feedback: Provide insights or recommendations to improve the risk assessment process.\nIntegrate with Risk Management:\nHRO Reminder Prompt: "Align risk management priorities with asset values and threat likelihoods to ensure effective resource allocation."\nUse the findings to integrate with your broader risk management processes, ensuring that high-value assets with high threat likelihoods receive appropriate security measures.\n\n',
      impact:
        "Inefficient Resource Allocation: Without proper assessment, resources might be allocated to protect less valuable assets, while more critical assets remain vulnerable.\nStrategic Misalignment: If the value of assets isn't clearly understood, the broader organizational or IT strategy may be misaligned with the actual business needs or risks.\nDifficulty in Incident Response: Without a prior understanding of the asset's value and threat likelihood, responding to security incidents can become chaotic and less effective.\n",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose:
        "Understand risk profile by decomposing characteristics of risk\n",
      dependencies: null,
      runbookprocessid: 17,
    },
    {
      name: "Bucket risk profile is the highest risk profile of any asset (object) in the bucket",
      steps: `<ol>
      <li>Inventory Assets within the Bucket:<ol>
              <li>Use the <em>ListObjects</em> API call to retrieve a list of all objects within the S3 bucket.</li>
              <li><strong>HRO Check Current State</strong>: Ensure an up-to-date inventory of all assets in the bucket.
              </li>
          </ol>
      </li>
      <li>Determine Risk Profile of Each Object:</li>
      <li><strong>HRO Proficiency Test</strong>: Evaluate an operator's capability to assess and tag assets based on risk
          correctly.</li>
      <li><strong>HRO Reminder Prompt</strong>: &quot;Always refer to company guidelines or criteria when determining the
          risk profile of an asset.&quot;</li>
      <li>This step might involve a custom process or solution since AWS does not inherently assign risk profiles to
          individual objects. If you have a tagging mechanism or metadata attribute indicating risk for each object, you
          can fetch it using the AWS SDK.</li>
      <li>Evaluate the Highest Risk Profile:</li>
      <li><strong>HRO Reminder Prompt:</strong> &quot;Always consider the impact, likelihood, and vulnerability attributes
          of each asset during this evaluation.&quot;</li>
      <li>Iterate over each object's risk profile (from metadata or tags) to identify the highest risk profile among all
          objects in the bucket.</li>
      <li>Apply Highest Risk Profile Settings to Bucket:</li>
      <li><strong>HRO Preparatory Operator Validation</strong>: Confirm that you are about to set the appropriate
          configurations and policies reflective of the highest risk profile.</li>
      <li><strong>HRO Preparatory Watch Team Validation</strong>: Ensure that a second team or set of eyes has checked and
          validated the configurations before application.</li>
      <li>Depending on how you define and implement risk profiles, you will now apply the relevant configurations and
          policies to the S3 bucket. This typically involves setting up bucket policies, ACLs, and other AWS services
          integrations to enforce the highest risk profile settings.</li>
      <li>Validate Bucket Policies:</li>
      <li>Use the <em>get_bucket_policy</em> API call to retrieve the bucket's policy.</li>
      <li>Analyze the policy to ensure that it aligns with the required highest risk profile.</li>
      <li><strong>HRO Operator Validation</strong>: Confirm that the bucket policy matches the desired risk profile
          settings.</li>
      <li><strong>HRO Watch Team Validation [required]</strong>: A mandatory secondary validation to confirm that the
          bucket policy is correctly configured.</li>
      <li>Periodically Review and Adjust:</li>
      <li>Since the bucket's content can change over time, regularly use the AWS API to review object risk profiles and
          adjust bucket settings as necessary.</li>
      <li><strong>HRO Request Feedback</strong>: After each review, provide insights and recommendations for optimization.
      </li>
      <li>Logging and Monitoring:</li>
      <li><strong>HRO Reminder Prompt:</strong> &quot;Regularly review logs to detect anomalies or potential security
          breaches.&quot;</li>
      <li>Enable AWS CloudTrail for S3 bucket monitoring.</li>
      <li>Ensure that AWS Config is set up to monitor S3 bucket settings, ensuring compliance with the highest risk
          profile.</li>
      <li>Notifications:</li>
      <li>Use S3 bucket notifications and AWS Lambda to get alerted when high-risk assets are added to the bucket. This
          will enable immediate review and potential reconfiguration.</li>
      <li><strong>HRO Watch Team Validation</strong>: Ensure that notifications are operational and the team is responsive
          to these alerts.</li>
      <li>Documentation:</li>
      <li><strong>HRO Reminder Prompt:</strong> &quot;Keep documentation clear, detailed, and easily accessible for future
          reference and auditing purposes.&quot;</li>
      <li>Document the bucket's risk profile and relevant configurations for auditing and governance purposes.</li>
  </ol>`,
      impact:
        "Performance and Cost: While security is paramount, applying the highest risk profile settings and protections to all assets, including those with a lower risk profile, might introduce unnecessary performance hits and costs. Regularly reviewing and optimizing bucket configurations can help mitigate these challenges.\nUsability and Accessibility: Overly restrictive access might create barriers for legitimate users or services. It might be worthwhile to consider finer-grained access controls or segregation of assets, so high-risk data doesn't inadvertently limit access to low-risk data that should be more accessible.\nMaintenance and Management Overhead: The need to continually reassess buckets as new assets are added could introduce significant management overhead. Consider implementing tools or AWS services that can automate asset classification and the corresponding risk assessments.\nMitigation of Risk through Separation: If possible, high-risk assets should be isolated in their own buckets, and strict policies should be applied to only those buckets. This strategy helps avoid the potential consequences of an overly broad policy and keeps high-risk data separate from lower-risk data.\n\n",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose:
        "Ensure that high risk assets are not compromised by low risk asset colocation\n",
      dependencies: null,
      runbookprocessid: 18,
    },
    {
      name: "Ensure all objects are tagged with the appropriate risk profile setting",
      steps:
        "Identify the S3 Buckets Relevant to the Dataset:\nUse the list_buckets() API call to get a list of all your S3 buckets.\nDetermine which buckets are relevant to your dataset.\nHRO Check Current State: Confirm that you are working with the relevant dataset and have a clear list of associated buckets.\nList Objects in the Bucket:\nHRO Proficiency Test: Check the ability of the operator to identify and differentiate objects within the bucket correctly.\nHRO Reminder Prompt: \"Ensure you are considering all objects within the specified bucket for accurate risk profiling.\"\nUse the list_objects_v2(Bucket='your-bucket-name') API call.\nRetrieve a list of all objects within the chosen bucket.\nDefine the Risk Profile Tags:\nDepending on the criteria from Process 1, craft the appropriate tags.\nTags might be structured like: { 'Key': 'RiskProfile', 'Value': 'High' }.\nApply Tags to Objects:\nHRO Preparatory Operator Validation: Confirm that the correct risk tags are ready for application.\nHRO Preparatory Watch Team Validation: Ensure that a secondary team has verified and validated the risk tags before application.\nFor each object in the bucket, apply the risk profile tag.\nUse the put_object_tagging(Bucket='your-bucket-name', Key='your-object-key', Tagging={'TagSet': [tag]}) API call.\nVerify Tags on Objects:\nEnsure that tags have been applied correctly.\nUse the get_object_tagging(Bucket='your-bucket-name', Key='your-object-key') API call for verification.\nHRO Operator Validation: Ensure each object's tag aligns with its risk profile and there are no mismatches or omissions.\nHRO Watch Team Validation [required]: Mandatory secondary validation to confirm correct tagging across all objects.\nSet Up S3 Bucket Policies based on Tags (Optional):\nHRO Reminder Prompt: \"Ensure the bucket policies accurately reflect and enforce the desired behaviors based on the object's risk profile tags.\"\nEnforce specific policies based on risk profile tags.\nUse the put_bucket_policy(Bucket='your-bucket-name', Policy='your-policy') API call.\nMonitor and Audit:\nRegularly check that the tags on objects remain consistent with their risk profile.\nEmploy AWS CloudTrail and AWS Config for monitoring and auditing purposes.\nHRO Watch Team Validation: Make sure periodic checks occur and deviations are promptly identified and rectified.\nRetain Documentation:\nKeep a record of the tagging criteria and decisions made during the classification.\nThis documentation is vital for future audits and understanding tag contexts.\n\n",
      impact:
        "Misclassification: Incorrect tagging could result in higher risk data being treated as lower risk or vice versa.\nOperational Issues: Without consistent tagging, automations and alerts based on those tags may fail or produce false results.\nAudit Failures: During security audits, inconsistency in risk tagging might lead to audit failures and subsequent reputational damage.\nIncreased Cost: Incorrect tagging can lead to data being stored on more expensive storage classes than necessary or additional costs to rectify misclassified data.\n\n",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose:
        "Track assets risk profile throughout the lifecycle of the storage container\n",
      dependencies: null,
      runbookprocessid: 19,
    },
    {
      name: "Ensure private access to S3 buckets in normal or high risk profile",
      steps: "",
      impact: "",
      output: "",
      seccat: "",
      purpose:
        "Track assets risk profile throughout the lifecycle of the storage container\n\n",
      dependencies: null,
      runbookprocessid: 20,
    },
    {
      name: "Ensure all S3 bucket ACLs are free of Everyone or Any authenticated AWS user",
      steps:
        'Retrieve Current Bucket ACL:\nUse the get_bucket_acl API call to retrieve the Access Control List (ACL) for the specified S3 bucket.\nHRO Check Current State: Before making any changes, ensure that you\'ve thoroughly understood the current ACL setup, and that it\'s in a consistent state with what you expect.\nExamine the ACL for Broad Permissions:\nHRO Proficiency Test: Assess your familiarity with the AWS ACL structure and permissions.\nHRO Reminder Prompt: "Broad permissions, especially those allowing \'Everyone\' or \'Any authenticated AWS user\', can significantly elevate the risk of unauthorized access. Always act with caution."\nInspect the returned ACL for any grants that have the "Grantee" set to "http://acs.amazonaws.com/groups/global/AllUsers" (which represents "Everyone") or "http://acs.amazonaws.com/groups/global/AuthenticatedUsers" (which represents "Any authenticated AWS user").\nRemove Overly Permissive Grants:\nHRO Preparatory Operator Validation: Ensure that you have a full understanding of the implications of removing these permissions and that you\'re ready to act upon it.\nHRO Preparatory Watch Team Validation: Secure a secondary confirmation that these broad permissions should be eliminated, ensuring that no oversight happens.\nIf any broad permissions are found, you\'ll need to modify the ACL to remove these permissions.\nUtilize the put_bucket_acl API call to update the ACL for the bucket with the overly permissive grants removed.\nValidate the Changes:\nAfter updating, retrieve the ACL again with get_bucket_acl to ensure that the changes were applied correctly and that no broad permissions remain.\nAdditionally, ensure that the changes did not inadvertently disrupt access for valid users or processes.\nHRO Operator Validation: Double-check and verify that the ACL updates match the intended security adjustments.\nHRO Watch Team Validation [required]: An obligatory second check to confirm that the bucket is now free from any broad permissions and is securely configured.\nRegular Audits:\nPeriodically re-check the ACLs to ensure that no broad permissions have been reintroduced.\nConsider setting up monitoring tools such as AWS Config to track ACL changes and to send alerts for any suspicious modifications.\nHRO Request Feedback: Solicit feedback post audits to refine the process continuously and guarantee alignment with best practices and HRO principles.\n\n',
      impact:
        'Unauthorized Access: ACLs allowing "Everyone" or "Any authenticated AWS user" can lead to unwanted actors accessing the bucket, potentially causing data breaches.\nService Disruption: Unauthorized actions against the service/data can be disruptive.\nIncreased Risk Profile: Broad permissions raise the risk profile of the S3 bucket.\nCompliance Issues: Such broad permissions could violate data protection standards or regulations, leading to penalties.\n\n',
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose: "Ensure appropriate access controls\n",
      dependencies: null,
      runbookprocessid: 23,
    },
    {
      name: "Ensure all access to the bucket is via a VPC endpoint",
      steps: "",
      impact: "",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n\n",
      purpose: "Minimize attack surface\n",
      dependencies: null,
      runbookprocessid: 24,
    },
    {
      name: "Ensure there is a VPC endpoint policy of “Access-to-specific-VPCE-only” for each authorized VPC endpoint with default “Deny”",
      steps:
        'Retrieve the Bucket Policy:\nUse get_bucket_policy API call to retrieve the current bucket policy.\nHRO Check Current State: Before modifying the policy, thoroughly understand the current state and ensure that it aligns with what you anticipate.\nCheck for VPC Endpoint Restriction:\nHRO Proficiency Test: Evaluate your understanding of VPC endpoint restrictions within bucket policies.\nHRO Reminder Prompt: "VPC endpoint restrictions are critical to ensure controlled and secure access to AWS resources. Always be meticulous when assessing and implementing them."\nInspect the bucket policy for statements ensuring that the source VPC endpoint or VPC is explicitly mentioned, making sure that it\'s the only way to access the bucket.\nSet Up VPC Endpoint:\nIf not already done, create a VPC endpoint for S3 using the create_vpc_endpoint API call.\nModify Bucket Policy:\nHRO Preparatory Operator Validation: Prior to implementing changes, confirm that you are well-acquainted with the implications of adjusting the bucket policy for VPC endpoint restrictions.\nHRO Preparatory Watch Team Validation: Acquire a secondary confirmation before policy alterations to ensure no detail is overlooked.\nIf the bucket policy does not restrict access to the VPC endpoint, adjust the policy to ensure that only the VPC endpoint can access it.\nUse put_bucket_policy API call to apply the updated policy to the S3 bucket.\nValidate the Configuration:\nUse the list_vpc_endpoints API call to ensure the VPC endpoint for S3 is active and correctly configured.\nTest accessing the bucket from within the VPC using the endpoint, and from outside the VPC to ensure the policy is working as expected.\nHRO Operator Validation: Double-check that the endpoint restrictions are applied accurately and that there are no loopholes.\nHRO Watch Team Validation [required]: A mandatory secondary check to confirm that the bucket is securely configured for the intended VPC endpoint.\nMonitor and Audit:\nSet up logging and monitoring, such as VPC Flow Logs and AWS CloudTrail, to monitor bucket access attempts.\nRegularly audit the access logs to identify any unauthorized or unexpected access patterns.\nHRO Request Feedback: Invite feedback after audits to constantly refine the process, ensuring it aligns with best practices and HRO principles.\n\n',
      impact:
        "Inconsistent Network Policies: Not using VPC endpoints might lead to not uniformly applying network transit policies.\n\n",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n",
      purpose: "Minimize attack surface\n",
      dependencies: null,
      runbookprocessid: 25,
    },
    {
      name: "Select Client-Side Encryption",
      steps:
        "Choose an Encryption SDK or Library:\nHRO Proficiency Test: Assess your understanding and expertise in the selection and usage of encryption SDKs or libraries\nHRO Reminder Prompt: \"Selecting the correct encryption library is paramount. Ensure your choice aligns with the application's requirements and recognized security standards.\"\nSelect an appropriate SDK or library, like the AWS Encryption SDK, for your application's language and platform.\nHRO Check Current State: Verify the present encryption methods, if any, before making modifications.\nGenerate Encryption Keys:\nGenerate or choose an appropriate encryption key.\nConsider using AWS Key Management Service (KMS) to manage the encryption key lifecycle.\nEncrypt Data Before Storing:\nUse the chosen SDK or library functions to encrypt data on the client side before sending it to S3 or any other AWS service.\nTransfer Encrypted Data:\nUse regular AWS SDK functions, like put_object for S3, to store the encrypted data.\nDecrypt Data After Retrieval:\nWhen retrieving data, use the AWS Encryption SDK or chosen library to decrypt the data after it's been downloaded.\nRotate Encryption Keys:\nPeriodically rotate the encryption keys used for client-side encryption.\nIf using AWS KMS, utilize its key rotation capabilities.\nHRO Operator Validation: After rotating keys, confirm that the new keys function correctly without causing decryption issues or data access challenges.\nHRO Watch Team Validation [required]: Key rotations can inadvertently introduce vulnerabilities. A second-layer check is imperative to ascertain that the new keys are safely deployed.\nMonitor and Audit:\nSet up logging, such as with AWS CloudTrail, to monitor the use of encryption and decryption operations.\nRegularly audit the logs to ensure that encryption is consistently applied and to detect any anomalies.\nHRO Request Feedback: Invite team members and stakeholders to offer feedback on the encryption process, looking for improvements or highlighting potential areas of concern.\n\n",
      impact:
        "Data Exposure: If data isn't encrypted client-side before being transferred, it may be exposed during transit or while at rest if the storage service's own encryption is compromised.\n\n",
      output: "",
      seccat: "Determined by Process 1 asset classification.\n",
      purpose: "Protect confidentiality of assets\n",
      dependencies: null,
      runbookprocessid: 26,
    },
    {
      name: "Ensure versioning is selected",
      steps:
        'Enable Versioning on S3 Bucket:\nHRO Check Current State: Confirm the current state of versioning on the S3 bucket to ensure no unintended changes have been made.\nHRO Preparatory Operator Validation: Prior to enabling, assess the potential impact on storage and costs. Understand the implications and benefits.\nHRO Preparatory Watch Team Validation: Obtain secondary approval from a monitoring team or supervisor to ensure the implications of enabling versioning are clearly understood.\nUse the put_bucket_versioning API call with Status set to "Enabled".\nHRO Operator Validation: After enabling, verify that versioning is active and properly functioning.\nHRO Watch Team Validation [required]: A secondary team should confirm that versioning is successfully enabled without any issues.\nHRO Request Feedback: Ask team members for feedback on the versioning process. Are there any concerns or suggestions for improvement?\nRegularly Monitor Versioning Status:\nUse the get_bucket_versioning API call to periodically check the versioning status of the bucket.\nRestore Older Object Versions When Necessary:\nUse the get_object API call with the VersionId parameter to retrieve a specific version of an object.\nPeriodically Clean Up Old Versions:\nWhile versioning helps in preserving object versions, it might lead to increased storage costs. Consider setting up lifecycle policies to transition older versions to cheaper storage classes or delete non-essential versions after a set period.\nEnsure Monitoring and Alarms:\nUse AWS CloudWatch to set up alarms for events related to object overwrites or deletions. This helps in taking quick actions in case of unintended changes.\nBackup Critical Data:\nBeyond versioning, have a strategy for backing up critical data. This could be cross-region replication to another S3 bucket or even to another AWS service.\nTest Data Restoration:\nPeriodically test the process of restoring data from previous versions to ensure that the versioning setup works as intended.\nHRO Request Feedback: Invite team members to offer feedback on the restoration process. Are there any concerns about the integrity or accessibility of restored data?\n\n',
      impact:
        "Data Loss: Without versioning, unintentional overwrites or deletions could lead to permanent data loss.\nLimited Recovery from Ransomware: Ransomware typically encrypts files and demands payment for decryption. Without versioning, recovering the original versions of encrypted files would be challenging or impossible.\nIncreased Restoration Time: In the absence of versioning, recovering an earlier state of the data would involve searching through backups, increasing the time taken for restoration.\n\n",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n",
      purpose: "Denial of service mitigation (ransomeware, e.g.)\n",
      dependencies: null,
      runbookprocessid: 27,
    },
    {
      name: "For Buckets in the low risk profile",
      steps: "",
      impact: "",
      output: "",
      seccat: "",
      purpose: "",
      dependencies: null,
      runbookprocessid: 28,
    },
    {
      name: "If public access is required",
      steps:
        "Review the Need for Public Access:\nHRO Proficiency Test: Test the understanding of team members on the implications of public access and ensure they can differentiate between public and private access configurations.\nHRO Reminder Prompt: \"Remember, public access can expose data to anyone on the internet. Ensure there's a valid reason for this action.\"\nBefore making any data public, evaluate why it's necessary and if there are alternative solutions.\nSet Bucket Permissions to Public:\nHRO Check Current State: Verify the current state of the bucket's permissions to ensure you're not unintentionally changing permissions.\nHRO Preparatory Operator Validation: Ensure that any sensitive data has been appropriately segregated or redacted before proceeding.\nHRO Preparatory Watch Team Validation: Gain secondary confirmation from a separate team or supervisor about the necessity of making this bucket public.\nUse the put_bucket_acl API call to modify the bucket's access control list (ACL) and grant public read access.\nReview Object Permissions:\nEven if a bucket is public, individual objects might not be. Consider using the put_object_acl API call to ensure the desired objects are publicly accessible.\nApply Bucket Policies:\nInstead of using ACLs, you can use bucket policies to provide more granular access. Define a policy using the put_bucket_policy API call.\nHRO Operator Validation: After defining the bucket policy, validate that the permissions are set as intended and that no unintentional access is granted.\nHRO Watch Team Validation [required]: A separate team should confirm that the bucket policy is set appropriately and doesn't introduce unintended vulnerabilities.\nEnable Logging and Monitoring:\nUse AWS CloudWatch and S3 access logs to monitor the public bucket, ensuring you can track access patterns and detect potential malicious activity.\nHRO Watch Team Validation: A separate team or automated system should continuously monitor and validate the logging results for unexpected behavior.\nReview Periodically:\nPeriodically re-evaluate the need for public access. Use the get_bucket_acl and get_object_acl API calls to review permissions and ensure they align with the current requirements.\nHRO Request Feedback: Ask team members if the public access setting still aligns with organizational needs and gather suggestions for potential changes or improvements.\nSet Up Alerts:\nSet up alerts to be notified of any changes to the bucket's public access settings. This can help in catching unintended changes.\nHRO Watch Team Validation: Ensure a secondary team or system also gets these alerts to provide a secondary layer of oversight.\n\n",
      impact:
        "Unintended Data Exposure: Without proper controls, making a bucket or object public could lead to the accidental exposure of sensitive data.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: MODERATE, Integrity: LOW, Availability: LOW)\n",
      purpose: "Appropriate availability\n",
      dependencies: null,
      runbookprocessid: 29,
    },
    {
      name: "If public access is not required",
      steps:
        "Check Current Bucket Permissions:\nHRO Proficiency Test: Test team members on their ability to identify and distinguish between various bucket permission settings.\nHRO Reminder Prompt: \"Ensure you are inspecting the correct bucket and remember, public access should be restricted.\"\nUtilize the get_bucket_acl API call to review the current access control list (ACL) of the bucket.\nHRO Check Current State: Verify the initial state of bucket permissions to confirm the need for changes.\nRemove Public Bucket Permissions:\nIf public access is detected, use the put_bucket_acl API call to modify the bucket's ACL and restrict public access.\nReview and Modify Object Permissions:\nObjects within the bucket might have been individually set to public access. Consider using the get_object_acl and put_object_acl API calls to review and modify permissions.\nUpdate or Remove Bucket Policies Granting Public Access:\nIf a bucket policy is granting public access, update it. Use the get_bucket_policy API call to review policies and the put_bucket_policy or delete_bucket_policy to modify or remove them.\nEnable Block Public Access Feature:\nHRO Preparatory Operator Validation: Ensure that all data within the bucket is appropriately categorized and no public dependencies exist before blocking public access.\nHRO Preparatory Watch Team Validation: Receive a secondary confirmation from a separate team or supervisor that the bucket should indeed have public access blocked.\nUse the AWS Management Console or the put_public_access_block API call to configure S3 Block Public Access settings for your account or bucket. This provides an additional layer of restriction against making data public unintentionally.\nHRO Operator Validation: After setting the Block Public Access feature, validate that all data remains internally accessible and that no legitimate external requests are blocked.\nHRO Watch Team Validation [required]: An independent team should confirm that the block public access settings are appropriate and no inadvertent access barriers were established.\nRegular Monitoring:\nSet up monitoring mechanisms using AWS CloudWatch and S3 access logs. Regularly check for changes in permissions and access patterns.\nHRO Request Feedback: Engage with team members to gather insights on the monitoring process and any suggestions for improvements.\nAlerts for Unauthorized Changes:\nEnsure alerts are in place to notify about changes to the bucket's public access settings or unusual access patterns. This helps in identifying and rectifying any unintended changes or breaches promptly.\nHRO Watch Team Validation: Ensure a separate team or system is also alerted to provide an extra layer of oversight and rapid response.\n\n",
      impact: "",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n",
      purpose: "Minimize attack surface\n",
      dependencies: null,
      runbookprocessid: 30,
    },
    {
      name: "For buckets with only immutable objects ensure S3 object lock is set",
      steps:
        "Identify the Relevant Bucket Containing the Dataset:\nUse bucket naming conventions, tags, or metadata to pinpoint the S3 bucket containing the dataset in question.\nHRO Check Current State: Verify the present state of the S3 bucket before making any alterations. Confirm that no unauthorized changes have occurred.\nReview Current Object Lock Configuration for the Identified Bucket:\nHRO Proficiency Test: Test operator’s knowledge regarding the Object Lock feature and its importance.\nHRO Reminder Prompt: “Remember the significance of enabling Object Lock for data integrity and protection against unauthorized alterations.”\nUtilize the GetObjectLockConfiguration API call to determine if the Object Lock is already activated for the specified bucket.\nEnable Object Lock for the Bucket:\nIf Object Lock isn't activated, note that for existing buckets, you cannot enable Object Lock unless it's a newly created bucket. For such buckets, consider migrating the dataset to a new bucket with Object Lock activated.\nFor setting up Object Lock on a new bucket, employ the PutObjectLockConfiguration API call. Once activated, Object Lock can't be disabled.\nSet the Retention Period for the Dataset:\nHRO Preparatory Operator Validation: Confirm understanding of the significance of setting a retention period and ensuring data remains immutable.\nHRO Preparatory Watch Team Validation: Engage the watch team to confirm the process and intent before setting the retention period.\nUse the PutObjectRetention API call to establish the retention duration for the dataset, rendering it immutable for that period.\nHRO Operator Validation: Verify that the retention period has been correctly set and the data is locked.\nHRO Watch Team Validation [required]: Ensure that the watch team cross-checks and validates the retention settings.\nContinuous Monitoring:\nMonitor the bucket routinely using tools like AWS CloudWatch and S3 access logs to identify any irregularities or unauthorized modifications.\nHRO Watch Team Validation: The watch team should periodically validate the monitoring process, ensuring alerts are functional and unauthorized modifications are tracked.\nInstitute Alert Mechanisms:\nConfigure alerts to be notified about any alterations to the Object Lock configurations or if attempts are made to modify the dataset in the bucket.\nHRO Request Feedback: Gather feedback from the operator about the ease of configuring alerts, any potential issues faced, and suggestions for improvement.\n\n",
      impact:
        "Ransomware Attacks: Attackers can encrypt the data and demand a ransom for its release.\n\n",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n",
      purpose: "Denial of Service mitigation (e.g. ransomware)\n",
      dependencies: null,
      runbookprocessid: 31,
    },
    {
      name: "Ensure all communications are secured by TLS",
      steps:
        'Identify Endpoints and Services:\nList all AWS services, applications, and endpoints that communicate data. This could include S3 buckets, EC2 instances, RDS databases, and more.\nHRO Check Current State: Verify that all identified endpoints are in their expected security configurations.\nReview Existing Communication Protocols:\nHRO Proficiency Test: Ensure the operator understands the significance of using encrypted communication protocols.\nHRO Reminder Prompt: "Always ensure that data communications are using TLS encryption. Unencrypted data exposes our systems to significant vulnerabilities, including interception and MITM attacks."\nUse AWS service-specific logging and monitoring solutions, such as VPC Flow Logs and ELB access logs, to ascertain if any unencrypted traffic exists.\nForce TLS on S3 Buckets:\nHRO Preparatory Operator Validation: Confirm understanding of the steps before execution.\nHRO Preparatory Watch Team Validation: Ensure a secondary review of the intended changes by another team member.\nFor S3 buckets, employ the PutBucketPolicy API call to enforce a bucket policy that allows only HTTPS (TLS) for communication.\nHRO Operator Validation: Confirm the changes were implemented as expected.\nHRO Watch Team Validation [required]: Secondary verification that the bucket policy has been set correctly.\nEnforce TLS on Load Balancers:\nIf using Elastic Load Balancers (ELB), ensure they are configured to listen only on HTTPS and terminate SSL/TLS at the load balancer.\nRDS & Database Encryption:\nFor RDS or other database services, leverage the appropriate API calls to modify the instance or cluster to enforce encrypted connections.\nContinuous Monitoring & Alerts:\nUse AWS CloudWatch or other monitoring tools to detect and alert on any non-TLS traffic in the environment.\nPeriodic Reviews:\nRegularly review the security configurations to ensure adherence and to account for any newly introduced services or changes.\nHRO Request Feedback: After the review, gather feedback on the process, any challenges faced, and areas for improvement.\n\n',
      impact:
        "Data Interception: Unencrypted data can be intercepted during transit by malicious entities leading to unauthorized access.\nMan-in-the-Middle Attacks: Without TLS, communications are susceptible to MITM attacks, where attackers can secretly relay or even alter the communication between two parties.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: MODERATE, Integrity: LOW, Availability: LOW)\n",
      purpose: "Protect confidentiality and integrity\n",
      dependencies: null,
      runbookprocessid: 32,
    },
    {
      name: "Ensure an audit log of all accesses to S3 objects is created",
      steps: "",
      impact: "",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n\n",
      purpose: "Detect and analyze asset behavior\n",
      dependencies: null,
      runbookprocessid: 33,
    },
    {
      name: "Ensure the risk profile tag is in audit log",
      steps:
        "Review Current Logging Standards:\nExamine existing logging practices to determine if risk profile tags are currently incorporated in S3 datasets.\nHRO Check Current State: Verify if current logging standards include risk profile tags. Ensure consistency across all datasets.\nTag S3 Objects with Risk Profile:\nHRO Proficiency Test: Demonstrate your capability to add and modify risk profile tags on S3 objects.\nHRO Reminder Prompt: \"Remember to validate the presence of risk profile tags in the audit logs. Ensuring these tags are consistently applied helps in promptly identifying and responding to potential threats related to our assets.\"\nFor the S3 buckets containing the dataset under consideration, use the PutObjectTagging API operation to add risk profile tags to objects.\nPeriodically review and update the risk profile tags, especially if there's a change in the dataset's content or its risk categorization.\nEnable AWS CloudTrail for S3:\nIf not already enabled, activate AWS CloudTrail to audit S3 bucket events. Ensure that CloudTrail is specifically tracking the S3 bucket containing your dataset.\nConfigure CloudTrail to Log Risk Profile Tag:\nAdapt event selectors in CloudTrail to capture risk profile metadata tags associated with S3 objects. Ensure that these tags are appropriately reflected in the logs.\nMonitor and Analyze Logs with Risk Profile:\nUtilize services like Amazon CloudWatch or AWS Athena to scrutinize the CloudTrail logs, emphasizing the risk profile tags. Establish alarms or notifications for any anomalies or unauthorized actions tied to high-risk S3 assets.\nHRO Operator Validation: Verify and ensure that the risk profile tags are captured accurately in the audit logs and match with the predefined risk categories.\nHRO Watch Team Validation [required]: Cross-check the CloudTrail logs to confirm the presence and accuracy of risk profile tags. Document any discrepancies.\nPeriodic Review and Validation:\nConduct routine audits of the CloudTrail logs to verify the presence and accuracy of the risk profile tags. Make updates as required.\nHRO Request Feedback: After the audit, gather insights from the team on the effectiveness of the risk profile tagging process. Use the feedback to refine and enhance the procedure.\n\n",
      impact:
        "Lack of Visibility: Without risk profile tags, it becomes challenging to discern the significance of an event or action in the audit logs related to an asset.\nDelayed Incident Response: In the absence of clear risk profile information in the logs, security incidents concerning high-risk assets might be treated with the same urgency as low-risk ones, leading to potential delays in response.\nInefficient Forensics: During a post-incident analysis, the lack of a risk profile tag can make it difficult to determine the scope and impact of a security breach.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: LOW, Integrity: MODERATE, Availability: LOW)\n",
      purpose: "Detect and analyze behavior\n",
      dependencies: null,
      runbookprocessid: 34,
    },
    {
      name: "Ensure a time-stamp is in the audit log",
      steps:
        'Enable AWS CloudTrail:\nEnsure that CloudTrail is enabled for your AWS account. CloudTrail captures AWS API call logs, which include timestamps for every event.\nHRO Check Current State: Validate if CloudTrail is active and capturing events with accurate timestamps for the AWS account.\nSpecify S3 Bucket for Logs:\nHRO Proficiency Test: Demonstrate the ability to specify and configure the S3 bucket where CloudTrail logs are stored.\nHRO Reminder Prompt: "Ensure that the designated S3 bucket for CloudTrail logs is correctly configured to capture and retain all logs with precise timestamps."\nDefine the S3 bucket where you want CloudTrail to store the logs.\nVerify Log File Integrity:\nEnable log file validation in CloudTrail. This feature ensures that the log files haven\'t been tampered with, which includes the accuracy of timestamps.\nPeriodically Review CloudTrail Logs:\nRetrieve the logs using the GetTrailStatus API call or the DescribeTrails call to ensure that the CloudTrail is operational and delivering logs.\nReview a sample of the logs to confirm that timestamps are present.\nSet Up CloudWatch Alarm for Log Modifications:\nYou can create CloudWatch Alarms to notify you if there\'s any modification in the log files. This is an added step to ensure the integrity of your logs, including the timestamps.\nAutomate Verification:\nDevelop a script or lambda function that periodically fetches a sample of the logs using the AWS SDK or AWS CLI.\nParse the logs to verify the presence of the "eventTime" field, which represents the timestamp. If missing, trigger an alert.\nMaintain Secure Access:\nEnsure that only authorized personnel have access to CloudTrail settings and the S3 bucket where logs are stored to prevent any unintentional or malicious modifications.\nRetention Policy:\nSpecify the retention period for your CloudTrail logs in S3 to ensure you keep logs for the required time frame for audit or compliance purposes.\nHRO Operator Validation: Verify that the retention policy for CloudTrail logs is set up correctly and ensures logs are kept for the necessary compliance period.\nHRO Watch Team Validation [required]: Review and ensure the CloudTrail log retention settings meet compliance requirements and logs contain accurate timestamps.\nDocument and Train:\nDocument the procedures and ensure relevant personnel are trained on the importance of timestamps in audit logs and how to check and interpret them.\nContinuous Monitoring:\nConsider using AWS-native or third-party solutions to continuously monitor and analyze CloudTrail logs for anomalies.\nHRO Request Feedback: Seek feedback from stakeholders and operators on the effectiveness of timestamp monitoring in the CloudTrail logs. Identify areas for improvement.\n\n',
      impact:
        "Loss of Accountability: Without accurate timestamps, it becomes difficult to determine when specific actions or events took place. This makes it challenging to hold individuals or processes accountable for their actions, as there's no clear timeline of events.\nImpediments to Forensic Analysis: For security incidents or data breaches, a forensic analysis is crucial to understand the scope, impact, and root cause. Without accurate timestamps, reconstructing the sequence of events becomes difficult, potentially leading to inaccurate conclusions.\nIncreased Response Time: During a security incident, timely response is essential to limit damage. If incident responders cannot quickly understand the sequence of events due to missing or inaccurate timestamps, it can delay the response, leading to increased damage or exposure.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: LOW, Integrity: MODERATE, Availability: LOW)\n",
      purpose: "Detect and analyze behavior\n",
      dependencies: null,
      runbookprocessid: 35,
    },
    {
      name: "Ensure the type of access and user identity is in audit log",
      steps:
        'Enable AWS CloudTrail:\nEnsure CloudTrail is enabled for your AWS account, capturing every AWS API call, which will include logs for both authorized and unauthorized access attempts.\nHRO Check Current State: Verify that CloudTrail is actively logging all AWS API calls, specifically focusing on access and identity-related events.\nSpecify S3 Bucket for Logs:\nHRO Proficiency Test: Demonstrate the ability to correctly specify and configure the S3 bucket to store CloudTrail access and identity logs.\nHRO Reminder Prompt: "Before proceeding, ensure the designated S3 bucket for CloudTrail logs is configured correctly to retain all pertinent access and identity events."\nDefine an S3 bucket to store the CloudTrail logs.\nSet Up CloudWatch Alarms:\nCreate alarms for specific events or API calls that are critical to be recorded. This way, if such an event doesn\'t get logged, you\'re instantly notified.\nReview CloudTrail Logs:\nPeriodically retrieve the logs to confirm authorized accesses are being recorded. Look for the "eventName" and "eventSource" fields in the logs.\nEnsure Granular IAM Policies:\nSet fine-grained permissions for resources to ensure that authorized actions are explicitly defined, making it easier to monitor and record the right actions.\nHRO Operator Validation: Ensure that IAM policies are granular and capture all authorized actions. Validate the presence of necessary "eventName" and "eventSource" fields in the logs.\nHRO Watch Team Validation [required]: Periodically review and validate IAM policies and configurations to ensure precise access logging and to detect any deviations.\nLog Archival:\nSet up a policy to regularly archive old logs, ensuring that you retain logs for the required time frame for audit or compliance purposes.\nRegular Audit and Review:\nPeriodically review the access logs and audit configurations to ensure everything remains as expected. Check for any gaps in logging or any unauthorized changes to configurations.\nHRO Request Feedback: Gather feedback from users and operators on the efficacy and comprehensiveness of the logging mechanism. Address any areas of concern or potential improvements.\nDocument and Train:\nMaintain documentation about the logging process, and train relevant personnel on its importance and the procedures to check and interpret logs.\n\n',
      impact:
        "Accountability Loss: Without proper logging of authorized access, it becomes challenging to trace actions back to specific users or entities, leading to potential accountability issues.\nCompromised Integrity: Given the moderate integrity classification, failure to log authorized access can jeopardize the dataset's trustworthiness. Unauthorized changes might go unnoticed.\nReduced Detection Capabilities: If authorized accesses aren't logged, detecting unusual or unauthorized behavior becomes significantly harder, potentially leading to security incidents going unnoticed.\nAudit and Compliance Risks: Inability to present comprehensive audit logs during regulatory or internal audits can lead to non-compliance findings, penalties, or reputational damage.\n\n",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n",
      purpose: "Detect and analyze behavior\n",
      dependencies: null,
      runbookprocessid: 36,
    },
    {
      name: "Ensure authorized access is recorded in audit log",
      steps:
        'Enable Logging for S3 Bucket:\nTurn on server access logging for the desired S3 bucket. This will capture requests made to the bucket.\nHRO Check Current State: Verify if server access logging is already enabled on the S3 bucket. If not, determine the steps needed to activate it.\nDefine Destination for Logs:\nHRO Proficiency Test: Demonstrate the ability to correctly set a destination for access logs without affecting the integrity of existing data.\nHRO Reminder Prompt: "Ensure the destination S3 bucket has adequate storage and is protected from unauthorized access or modifications."\nSpecify another S3 bucket where the access logs will be stored.\nIAM Policy Review:\nHRO Reminder Prompt: "Re-evaluate the IAM policies to confirm there are no overrides or exclusions that could prevent or interrupt log capturing."\nEnsure that the AWS Identity and Access Management (IAM) policies for the S3 bucket permit logging and have no restrictions that might prevent it.\nPeriodic Log Validation:\nRegularly review the access logs to verify that authorized accesses are being documented. This can be done using AWS management console or AWS CLI.\nHRO Request Feedback: After reviewing, note any discrepancies or anomalies that may indicate logging issues or potential security concerns.\nImplement Alarms:\nUse Amazon CloudWatch to create alarms for specific log events to ensure critical events are recorded and any discrepancies are promptly reported.\nHRO Operator Validation: Test the CloudWatch alarms to ensure they trigger accurately for defined events and that notifications are sent to the appropriate stakeholders.\nRetention and Backup:\nDefine policies for log retention and ensure backups of logs are made for durability.\nHRO Watch Team Validation [required]: Periodically verify that log backups are intact, unmodified, and can be restored if needed. Validate the adherence to retention policies.\nAccess Control for Logs:\nEnsure that the S3 bucket where logs are stored has strict access controls to prevent tampering.\nHRO Operator Validation: Check and validate the access controls on the S3 bucket to ensure they adhere to best practices and organizational policies\nHRO Watch Team Validation [required]: Run periodic access simulations to ensure unauthorized attempts to tamper with or view logs are thwarted.\n\n',
      impact:
        "Accountability Void: Without a clear record of authorized access, tracing actions or changes to individual users or entities becomes challenging, if not impossible. This could make investigations, troubleshooting, or establishing responsibility in incidents problematic.\nIntegrity at Stake: The integrity classification for the dataset is moderate, implying any compromise or oversight in logging can potentially degrade the dataset's reliability or trustworthiness.\nCompromised Detection: A full log of authorized access forms a baseline against which anomalous behaviors can be spotted. Absence of such a baseline weakens intrusion detection systems and makes spotting unauthorized access more challenging.\nRegulatory & Compliance Risks: If an organization is subject to external audits or regulations that demand rigorous logging, failure to log authorized access can lead to non-compliance, potential penalties, and reputational damage.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: LOW, Integrity: MODERATE, Availability: LOW)\n",
      purpose: "Detect and analyze behavior\n",
      dependencies: null,
      runbookprocessid: 37,
    },
    {
      name: "Ensure unauthorized access is recorded in audit log",
      steps:
        'Enable Logging for S3 Bucket:\nTurn on server access logging for the S3 bucket to capture all requests, including unauthorized ones.\nHRO Check Current State: Verify if server access logging is active and configured to capture both authorized and unauthorized requests\nSet Up CloudTrail:\nHRO Proficiency Test: Demonstrate the ability to set up and configure CloudTrail effectively, ensuring all relevant API calls are captured.\nHRO Reminder Prompt:  "Cross-check if CloudTrail settings cover all resources and regions pertinent to the organization."\nAWS CloudTrail provides more granular logging of API calls, which can capture unauthorized access attempts in more detail.\nIAM Policy Review:\nRegularly review AWS Identity and Access Management (IAM) policies to ensure that logging permissions are set correctly.\nHRO Reminder Prompt: "Check for any recent changes to IAM policies that might affect logging capabilities or create unintended access loopholes."\nImplement Alarms:\nUse Amazon CloudWatch to establish alarms for specific unauthorized access patterns or frequent access denied events.\nHRO Operator Validation: Test the alarms for specific unauthorized patterns to ensure they trigger accurately and that stakeholders are informed.\nAnomaly Detection:\nUtilize AWS GuardDuty or similar services to detect and alert on unusual behavior that might indicate unauthorized access attempts.\nHRO Operator Validation: Simulate an unusual access pattern and verify if GuardDuty picks it up and sends an alert.\nHRO Watch Team Validation [required]: Perform periodic checks to ensure the anomaly detection system is operational and adequately calibrated.\nReview and Analyze Logs Regularly:\nPeriodically assess the logs to identify and analyze unauthorized access attempts. Tools like Amazon Athena can assist in querying S3 logs.\nHRO Request Feedback: "After analysis, seek feedback on potential areas of improvement in detection, logging, or analysis procedures."\nLimit Permissions:\nRefine IAM permissions to ensure that only necessary personnel have access to the logs, protecting their integrity.\nHRO Request Feedback: Solicit feedback from the team about the current access levels. Ensure they align with the principle of least privilege and that no one is granted unnecessary access.\n\n',
      impact:
        "Unnoticed Security Threats: Without logs of unauthorized access, malicious attempts might go unnoticed, allowing potential attackers to repeatedly try different strategies without detection.\nDelayed Response: Failure to promptly detect and respond to unauthorized access attempts could give attackers more time to discover vulnerabilities.\nCompromised Analysis: The absence of unauthorized access records compromises the ability to conduct a thorough post-incident analysis or forensic investigation.\nRegulatory & Compliance Risks: Non-compliance with regulations requiring rigorous logging of unauthorized access can lead to penalties, legal repercussions, and reputational harm.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: LOW, Integrity: MODERATE, Availability: LOW)\n",
      purpose: "Detect and analyze behavior\n",
      dependencies: null,
      runbookprocessid: 38,
    },
    {
      name: "Ensure timely detection of anomalous activity against the S3 bucket is recorded and alerts the operator",
      steps:
        'Enable AWS CloudTrail:\nActivate CloudTrail for the S3 bucket to get detailed logging of all bucket-related API activities.\nHRO Check Current State: Confirm that CloudTrail is correctly set up and capturing all necessary data related to the S3 bucket. Review any recent changes or interruptions to CloudTrail logging.\nActivate GuardDuty:\nHRO Proficiency Test: Simulate a test scenario to ensure GuardDuty is active and properly configured to detect anomalies and unauthorized behaviors.\nHRO Reminder Prompt: "Before completing the GuardDuty activation, cross-check its settings against best practices and review its integration with other AWS services."\nAWS GuardDuty provides intelligent threat detection by continuously monitoring for malicious activity. Once activated, it can identify anomalies and unauthorized behaviors.\nSet Up CloudWatch Alarms:\nUsing Amazon CloudWatch, configure alarms for specific patterns or metrics that might indicate anomalous activity on the S3 bucket.\nHRO Reminder Prompt: "Ensure that the thresholds for CloudWatch alarms are set to provide a balance between sensitivity and avoiding too many false positives."\nIntegrate with Amazon SNS:\nLink CloudWatch alarms with Amazon Simple Notification Service (SNS) to ensure that operators receive real-time alerts when anomalies are detected.\nHRO Operator Validation: Simulate an anomaly to test the SNS alert mechanism, ensuring alerts are received promptly and contain actionable information.\nHRO Watch Team Validation [required]: The watch team should independently verify the alerting mechanism and response times, ensuring consistency and reliability.\nRegularly Review Logs:\nConduct periodic reviews of CloudTrail and GuardDuty findings to refine detection patterns and reduce false positives.\nHRO Reminder Prompt: "Periodically revisit log reviews, especially after major infrastructure changes or incident resolutions, to ensure the system remains effective."\nFeedback Loop:\nAs incidents are investigated, continuously refine and adjust the alarm parameters based on the findings to improve detection accuracy.\nHRO Request Feedback: After responding to and resolving an incident, gather feedback from the incident response team and other stakeholders to understand what went well and where improvements can be made.\n\n',
      impact:
        "Undetected Threats: A delay or failure in detecting unusual activities can allow malicious actors to exploit vulnerabilities or extract sensitive data without being noticed.\nDelayed Incident Response: Without timely alerts, the response to potential security incidents can be delayed, leading to potentially more significant damage or data loss.\nOperational Disruption: Unauthorized access or anomalous activity might disrupt operations, causing potential downtime or service degradation.\nRegulatory & Compliance Risks: Inability to detect and respond to incidents in real-time can lead to non-compliance with industry regulations.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: LOW, Integrity: MODERATE, Availability: LOW)\n",
      purpose: "Detect unauthorized access\n",
      dependencies: null,
      runbookprocessid: 39,
    },
    {
      name: "Identify and document a process to quickly halt all write access to S3 buckets",
      steps:
        'Document Bucket Identifiers:\nHave a ready list of S3 bucket names/ARNs to which the process applies.\nHRO Check Current State: Regularly review the list of S3 buckets to ensure that all relevant buckets are included and that obsolete ones are removed.\nPrepare IAM Policies:\nHRO Proficiency Test: Simulate a scenario where write access needs to be quickly restricted. Validate that team members can locate and apply the predefined IAM policies efficiently.\nHRO Reminder Prompt: "Double-check the IAM policy\'s effectiveness by testing it against write actions before it\'s needed in a real situation."\nDraft IAM policies that restrict write access to the buckets while retaining read access. Store these policies in a readily accessible location.\nAutomate Policy Application via AWS Lambda:\nSet up a Lambda function that, when triggered, applies the restrictive IAM policies to the relevant S3 buckets.\nHRO Reminder Prompt: "Before deploying the Lambda function, review its permissions to ensure it only has the required permissions and no additional ones."\nIntegrate with CloudWatch and SNS:\nUse CloudWatch Events to detect specific conditions that might necessitate triggering the Lambda function (e.g., suspicious write activities or alerts from other AWS security services).\nLink CloudWatch with SNS for notification purposes, ensuring stakeholders are alerted when the Lambda function is activated.\nHRO Operator Validation: Regularly verify that the notifications from CloudWatch through SNS are promptly delivered and contain accurate, actionable information.\nHRO Watch Team Validation [required]: The watch team should independently validate the entire workflow, from CloudWatch event detection to the application of restrictive IAM policies.\nTest Periodically:\nRegularly test the Lambda function and policy application process to ensure it works as intended and that there are no unexpected side effects.\nHRO Reminder Prompt: "After any major AWS or infrastructure changes, or at predefined intervals, revisit and test this process to ensure continued reliability."\nDocument Manual Override:\nPrepare a documented procedure for administrators to manually apply the restrictive policies, in case automated systems fail.\nHRO Reminder Prompt: "In any scenario where the automated system might fail, ensure that key personnel are well-versed with the manual override process."\nRecovery Process:\nDocument steps to investigate the incident, ensure the threat is removed, and safely restore write access when deemed appropriate.\nHRO Request Feedback: After every incident or test scenario, collect feedback from involved personnel to identify any hiccups in the process and areas for improvement.\n\n',
      impact:
        "Unauthorized Data Modification: If malicious actors gain access, they might change or delete data, leading to potential data loss or misinformation.\nOperational Issues: Continual unauthorized modifications can disrupt regular operations and services.\nReputational Damage: If the breach becomes public knowledge, the organization might suffer from damaged trust and reputation.\nIncreased Incident Response Time: Without the ability to quickly halt access, the time taken to respond to and control an incident could increase.\n\n",
      output: "",
      seccat:
        "MODERATE = (Confidentiality: LOW, Integrity: MODERATE, Availability: LOW)\n",
      purpose: "Mitigation for compromised assets\n",
      dependencies: null,
      runbookprocessid: 40,
    },
    {
      name: "Ensure regular updates and verification of compliance of this runbook",
      steps:
        'Schedule Regular Reviews:\nHRO Proficiency Test: During the review, team members should be tested on their understanding and application of the runbook procedures to ensure they\'re not just following steps blindly but understand their significance.\nHRO Reminder Prompt: "Ensure reminders are sent out a month, a week, and a day in advance to ensure key stakeholders are available and prepared for the review session."\nCalendar bi-annual or annual runbook review sessions.\nEstablish Review Committee:\nInclude cybersecurity experts, IT personnel, and other relevant stakeholders to ensure diverse perspectives.\nHRO Reminder Prompt: "Review the committee\'s composition yearly to ensure it reflects the current needs and expertise required for the organization."\nCollect Feedback:\nGather input from team members who use the runbook in real-world scenarios. Document lessons learned from incidents, drills, or exercises.\nConsult External Sources:\nStay updated on emerging threats, vulnerabilities, and best practices. Consider insights from organizations like NIST.\nHRO Check Current State: Periodically validate that the runbook\'s procedures align with the current threat landscape and evolving best practices.\nUpdate Runbook:\nIntegrate feedback and external insights to enhance the runbook.\nHRO Operator Validation: Once updates are implemented, have operators validate that the changes are clear, actionable, and feasible.\nConduct Compliance Checks:\nUse automated tools, checklists, or external audits to verify alignment with security standards and best practices.\nHRO Reminder Prompt: "After any significant organizational change or major incident, ensure a compliance check is performed."\nDocument Changes:\nKeep a changelog, detailing what changes were made, the reasons for such changes, and the date of modification.\nHRO Check Current State: "Periodically review the changelog to ensure it provides a clear audit trail and that no significant changes have been omitted."\nCommunicate Updates:\nEnsure that all relevant stakeholders are aware of changes to the runbook.\nHRO Watch Team Validation [required]: The watch team should review communications for clarity and ensure they reach all necessary personnel.\nTraining & Drills:\nEnsure that staff members are trained on new procedures, and conduct drills to test the efficacy of the updated runbook.\nHRO Proficiency Test: Post-training, test team members on their understanding of changes to gauge the effectiveness of the training.\nReview:\nHRO Operator Validation: Regularly gather feedback from operators post-incident to validate the runbook\'s effectiveness in real-world scenarios.\nHRO Watch Team Validation [required]: The watch team should periodically review the entire runbook, from procedural steps to the underlying rationale, ensuring consistency and effectiveness.\n\n\n',
      impact:
        "Outdated Response Mechanisms: If the runbook isn't updated, it might not effectively address new threats, vulnerabilities, or scenarios.\nMissed Opportunities for Improvement: Without periodic verification, the organization might overlook gaps in compliance, leading to potential security incidents.\nDecreased Efficiency: Failing to incorporate lessons learned can result in repeated mistakes and longer incident response times.\nReputational Risk: An outdated or non-compliant runbook can lead to potential breaches, which might impact the organization's reputation.\n\n",
      output: "",
      seccat:
        "LOW = (Confidentiality: LOW, Integrity: LOW, Availability: LOW)\n",
      purpose: "Ensure control gaps can be filled quickly\n",
      dependencies: null,
      runbookprocessid: 41,
    },
  ],
  counts: {
    processes: 33,
    subcategories: 16,
    controls: 15,
    policies: 68,
  },
};
