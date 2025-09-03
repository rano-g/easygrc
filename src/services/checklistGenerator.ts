// Checklist Generator Service - Creates downloadable Excel files with framework-specific checklists
import * as XLSX from 'xlsx';

// NIST CSF v2.0 Complete Checklist Data
const nistCsfV2Checklist = [
  // GOVERN Function
  { category: 'GOVERN', subcategory: 'GV.OC-01', description: 'Organizational cybersecurity strategy is established and communicated', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.OC-02', description: 'Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.OC-03', description: 'Legal, regulatory, and contractual requirements regarding cybersecurity are understood and managed', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.OC-04', description: 'Critical objectives, capabilities, and services that stakeholders depend on or expect from the organization are understood and communicated', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.OC-05', description: 'Outcomes, capabilities, and services that the organization depends on are understood and communicated', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RM-01', description: 'Risk management objectives are established and agreed to by organizational stakeholders', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RM-02', description: 'Risk appetite and risk tolerance statements are established, communicated, and maintained', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RM-03', description: 'Cybersecurity risk management activities and outcomes are included in enterprise risk reporting and enterprise risk management processes', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RM-04', description: 'Strategic direction that describes appropriate risk response options is established and communicated', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RM-05', description: 'Lines of communication across the organization are established for cybersecurity risks, including escalation pathways and information-sharing protocols', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RM-06', description: 'A standardized method for calculating, documenting, categorizing, and prioritizing cybersecurity risks is established and communicated', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RM-07', description: 'Strategic opportunities (i.e., business benefits) that are informed by cybersecurity risks are identified and communicated', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RR-01', description: 'Organizational leadership is responsible and accountable for cybersecurity risk and fosters a culture that is risk-aware, ethical, and continually improving', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RR-02', description: 'Roles, responsibilities, and authorities related to cybersecurity risk management are established, communicated, understood, and enforced', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RR-03', description: 'Adequate resources are allocated commensurate with the cybersecurity risk strategy, roles, responsibilities, and policies', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.RR-04', description: 'Cybersecurity is included in human resources practices', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.PO-01', description: 'Policy for managing cybersecurity risks is established based on organizational context, cybersecurity strategy, and priorities and is communicated and enforced', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.PO-02', description: 'Policy for managing cybersecurity risks is reviewed, updated, communicated, and enforced to reflect changes in requirements, threats, technology, and organizational mission', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.OV-01', description: 'Cybersecurity risk management strategy outcomes are reviewed to inform and adjust strategy and direction', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.OV-02', description: 'Cybersecurity strategy outcomes are reviewed to inform and adjust strategy and direction', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.OV-03', description: 'Organizational cybersecurity risk management performance is evaluated and reviewed for adjustments needed', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-01', description: 'A cybersecurity supply chain risk management strategy is established, implemented, and regularly updated', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-02', description: 'Cybersecurity roles, responsibilities, and authorities for suppliers, customers, and partners are established, communicated, and coordinated internally and externally', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-03', description: 'Cybersecurity supply chain risk management is integrated into cybersecurity and enterprise risk management, risk assessment, and improvement planning processes', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-04', description: 'Suppliers are known and prioritized by criticality', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-05', description: 'Requirements to address cybersecurity risks in supply chains are established, prioritized, and integrated into contracts and other types of agreements with suppliers and other relevant third parties', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-06', description: 'Planning and due diligence are performed to reduce risks before entering into formal supplier or other third-party relationships', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-07', description: 'The risks posed by a supplier, their products, or their services are understood, recorded, prioritized, assessed, responded to, and monitored over the course of the relationship', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-08', description: 'Relevant suppliers and other third parties are included in incident planning, response, and recovery activities', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-09', description: 'Supply chain security practices are integrated into cybersecurity and enterprise risk management programs, and their performance is monitored throughout the technology product and service life cycle', status: '', notes: '', evidence: '' },
  { category: 'GOVERN', subcategory: 'GV.SC-10', description: 'Cybersecurity supply chain risk management plans include provisions for activities that occur during and after an incident or event that impacts the organization or its supply chain', status: '', notes: '', evidence: '' },

  // IDENTIFY Function  
  { category: 'IDENTIFY', subcategory: 'ID.AM-01', description: 'Physical devices and systems within the organization are inventoried', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.AM-02', description: 'Software platforms and applications within the organization are inventoried', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.AM-03', description: 'Organizational communication and data flows are mapped', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.AM-04', description: 'External information systems are catalogued', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.AM-05', description: 'Resources (e.g., hardware, devices, data, time, personnel, and software) are prioritized based on their classification, criticality, and business value', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.AM-06', description: 'Cybersecurity roles and responsibilities for the entire workforce and third-party stakeholders are established', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.AM-07', description: 'Requirements for cybersecurity within the organization (including governance, risk management, and legal) are understood and managed', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.AM-08', description: 'Cybersecurity personnel understand their roles and responsibilities', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-01', description: 'Asset vulnerabilities are identified and documented', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-02', description: 'Cyber threat intelligence is received from information sharing forums and sources', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-03', description: 'Threats, both internal and external, are identified and documented', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-04', description: 'Potential business impacts and likelihoods are identified', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-05', description: 'Threats, vulnerabilities, likelihoods, and impacts are used to determine risk', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-06', description: 'Risk responses are identified and prioritized', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-07', description: 'Risk responses are selected, implemented, communicated, and monitored', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-08', description: 'Processes for receiving, analyzing, and responding to vulnerability disclosures are established', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-09', description: 'The organization supply chain is understood, including all suppliers and their criticality', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.RA-10', description: 'Critical suppliers are assessed prior to acquisition', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.IM-01', description: 'A baseline configuration of information technology/industrial control systems is created and maintained incorporating security principles', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.IM-02', description: 'A system development life cycle to manage systems is implemented', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.IM-03', description: 'Configuration change control processes are in place', status: '', notes: '', evidence: '' },
  { category: 'IDENTIFY', subcategory: 'ID.IM-04', description: 'Backups of information are conducted, maintained, and tested', status: '', notes: '', evidence: '' },

  // PROTECT Function
  { category: 'PROTECT', subcategory: 'PR.AA-01', description: 'Identities and credentials are issued, managed, verified, revoked, and audited for authorized devices, users and processes', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.AA-02', description: 'Identity and credential service providers are managed by the organization', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.AA-03', description: 'Users, devices, and other assets are authenticated commensurate with the risk of the transaction', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.AA-04', description: 'Identity assertions are protected, conveyed, and verified', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.AA-05', description: 'Access permissions, entitlements, and authorizations are defined in a policy, managed, enforced, and reviewed, and incorporate the principles of least privilege and separation of duties', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.AA-06', description: 'Physical access to assets is managed, monitored, and enforced commensurate with risk', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.AT-01', description: 'All users are informed and trained', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.AT-02', description: 'Privileged users understand their roles and responsibilities', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-01', description: 'Data-at-rest is protected', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-02', description: 'Data-in-transit is protected', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-03', description: 'Assets are formally managed throughout removal, transfers, and disposition', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-04', description: 'Adequate capacity to ensure availability is maintained', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-05', description: 'Protections against data leaks are implemented', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-06', description: 'Integrity checking mechanisms are used to verify software, firmware, and information integrity', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-07', description: 'The development and testing environment(s) are separate from the production environment', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.DS-08', description: 'Integrity checking mechanisms are used to verify hardware integrity', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-01', description: 'A baseline configuration of information technology/industrial control systems is created and maintained incorporating security principles', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-02', description: 'A System Development Life Cycle to manage systems is implemented', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-03', description: 'Configuration change control processes are in place', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-04', description: 'Backups of information are conducted, maintained, and tested', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-05', description: 'Policy and regulations regarding the physical operating environment for organizational assets are met', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-06', description: 'Data is destroyed according to policy', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-07', description: 'Protection processes are improved', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-08', description: 'Effectiveness of protection technologies is shared', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-09', description: 'Response plans (Incident Response and Business Continuity) and recovery plans (Incident Recovery and Disaster Recovery) are in place and managed', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-10', description: 'Response and recovery plans are tested', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-11', description: 'Cybersecurity is included in human resources practices (e.g., deprovisioning, personnel screening)', status: '', notes: '', evidence: '' },
  { category: 'PROTECT', subcategory: 'PR.IP-12', description: 'A vulnerability management plan is developed and implemented', status: '', notes: '', evidence: '' },

  // DETECT Function
  { category: 'DETECT', subcategory: 'DE.AE-01', description: 'A baseline of network operations and expected data flows for users and systems is established and managed', status: '', notes: '', evidence: '' },
  { category: 'DETECT', subcategory: 'DE.AE-02', description: 'Detected events are analyzed to understand attack targets and methods', status: '', notes: '', evidence: '' },
  { category: 'DETECT', subcategory: 'DE.AE-03', description: 'Event data are collected and correlated from multiple sources and sensors', status: '', notes: '', evidence: '' },
  { category: 'DETECT', subcategory: 'DE.AE-04', description: 'Impact of events is determined', status: '', notes: '', evidence: '' },
  { category: 'DETECT', subcategory: 'DE.AE-05', description: 'Incident alert thresholds are established', status: '', notes: '', evidence: '' },
  { category: 'DETECT', subcategory: 'DE.CM-01', description: 'The network is monitored to detect potential cybersecurity events', status: '', notes: '', evidence: '' },
  { category: 'DETECT', subcategory: 'DE.CM-02', description: 'The physical environment is monitored to detect potential cybersecurity events', status: '', notes: '', evidence: '' },
  { category: 'DETECT', subcategory: 'DE.CM-03', description: 'Personnel activity is monitored to detect potential cybersecurity events', status: '', notes: '', evidence: '' },

  // RESPOND Function
  { category: 'RESPOND', subcategory: 'RS.RP-01', description: 'Response plan is executed during or after an incident', status: '', notes: '', evidence: '' },
  { category: 'RESPOND', subcategory: 'RS.CO-01', description: 'Personnel know their roles and order of operations when a response is needed', status: '', notes: '', evidence: '' },
  { category: 'RESPOND', subcategory: 'RS.CO-02', description: 'Incidents are reported consistent with established criteria', status: '', notes: '', evidence: '' },
  { category: 'RESPOND', subcategory: 'RS.AN-01', description: 'Investigations are conducted to ensure effective response and support recovery activities', status: '', notes: '', evidence: '' },
  { category: 'RESPOND', subcategory: 'RS.MI-01', description: 'Incidents are contained', status: '', notes: '', evidence: '' },

  // RECOVER Function
  { category: 'RECOVER', subcategory: 'RC.RP-01', description: 'Recovery plan is executed during or after a cybersecurity incident', status: '', notes: '', evidence: '' },
  { category: 'RECOVER', subcategory: 'RC.IM-01', description: 'Recovery plans incorporate lessons learned into future activities', status: '', notes: '', evidence: '' },
  { category: 'RECOVER', subcategory: 'RC.IM-02', description: 'Recovery strategies are updated', status: '', notes: '', evidence: '' },
  { category: 'RECOVER', subcategory: 'RC.CO-01', description: 'Public relations are managed', status: '', notes: '', evidence: '' },
  { category: 'RECOVER', subcategory: 'RC.CO-02', description: 'Reputation is repaired after an incident', status: '', notes: '', evidence: '' }
];

// PCI DSS v4.0 Requirements Checklist Data
const pciDssV4Checklist = [
  { requirement: 'Req 1.1.1', description: 'Processes and procedures are documented and in use for configuring and managing all network security controls', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 1.1.2', description: 'Network security controls (NSCs) are configured and maintained', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 1.2.1', description: 'Configuration standards for NSC rulesets are defined and implemented', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 1.2.2', description: 'All changes to network connections and to configurations of NSCs are approved and managed', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 1.2.3', description: 'An accurate network diagram(s) is maintained that shows all connections between the cardholder data environment and other networks', status: '', priority: 'Medium', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 1.2.4', description: 'An accurate data flow diagram(s) is maintained that meets all elements specified in this requirement', status: '', priority: 'Medium', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 1.2.5', description: 'All services, protocols, and ports allowed are identified, approved, and have a defined business need', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 2.1.1', description: 'Processes and procedures are documented and in use for securely managing vendor default accounts and authentication elements', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 2.1.2', description: 'All vendor default accounts and authentication elements (including but not limited to default passwords, passphrases, and authentication keys) are managed', status: '', priority: 'Critical', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 2.2.1', description: 'Configuration standards are developed, implemented, and maintained for all system components', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 2.2.2', description: 'System components are configured securely', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 2.2.3', description: 'Primary functions requiring different security levels are managed as follows', status: '', priority: 'Medium', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.1.1', description: 'Processes and procedures are documented and in use for protecting stored account data', status: '', priority: 'Critical', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.1.2', description: 'Account data storage is kept to a minimum', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.2.1', description: 'Account data is not retained beyond the time period designated in the entitys data retention policy', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.3.1', description: 'SAD is not retained after completion of the authorization process', status: '', priority: 'Critical', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.3.2', description: 'SAD that is stored electronically prior to completion of authorization is encrypted using strong cryptography', status: '', priority: 'Critical', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.3.3', description: 'SAD that is stored prior to completion of authorization is securely deleted upon completion of the authorization process', status: '', priority: 'Critical', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.4.1', description: 'The PAN is masked when displayed', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' },
  { requirement: 'Req 3.4.2', description: 'When using remote-access technologies, technical controls prevent copy and/or relocation of PAN when accessed remotely', status: '', priority: 'High', responsible_party: '', target_date: '', notes: '' }
];

// SOX Section 404 Checklist Data
const soxSection404Checklist = [
  { control_area: 'Entity Level Controls', control_id: 'ELC-001', description: 'Board of Directors and Audit Committee effectiveness', status: '', testing_procedures: 'Review board meeting minutes, charter, independence assessments', conclusion: '', deficiencies: '' },
  { control_area: 'Entity Level Controls', control_id: 'ELC-002', description: 'Management philosophy and operating style', status: '', testing_procedures: 'Interview management, review tone at the top communications', conclusion: '', deficiencies: '' },
  { control_area: 'Entity Level Controls', control_id: 'ELC-003', description: 'Organizational structure and assignment of authority', status: '', testing_procedures: 'Review org charts, delegation of authority policies', conclusion: '', deficiencies: '' },
  { control_area: 'Entity Level Controls', control_id: 'ELC-004', description: 'Human resource policies and practices', status: '', testing_procedures: 'Test hiring, training, evaluation, and disciplinary procedures', conclusion: '', deficiencies: '' },
  { control_area: 'Entity Level Controls', control_id: 'ELC-005', description: 'Code of conduct and ethics', status: '', testing_procedures: 'Review code of conduct, test communication and enforcement', conclusion: '', deficiencies: '' },
  { control_area: 'Risk Assessment', control_id: 'RA-001', description: 'Financial reporting risk identification and assessment', status: '', testing_procedures: 'Review risk assessment process and documentation', conclusion: '', deficiencies: '' },
  { control_area: 'Risk Assessment', control_id: 'RA-002', description: 'Fraud risk assessment process', status: '', testing_procedures: 'Test fraud risk identification, assessment, and response', conclusion: '', deficiencies: '' },
  { control_area: 'Control Activities', control_id: 'CA-001', description: 'Revenue recognition controls', status: '', testing_procedures: 'Test revenue cut-off, pricing, and recognition policies', conclusion: '', deficiencies: '' },
  { control_area: 'Control Activities', control_id: 'CA-002', description: 'Accounts receivable and collections controls', status: '', testing_procedures: 'Test AR aging, collections, and bad debt provisions', conclusion: '', deficiencies: '' },
  { control_area: 'Control Activities', control_id: 'CA-003', description: 'Inventory controls and valuation', status: '', testing_procedures: 'Test cycle counts, costing methods, and impairment assessments', conclusion: '', deficiencies: '' },
  { control_area: 'Control Activities', control_id: 'CA-004', description: 'Fixed assets and depreciation controls', status: '', testing_procedures: 'Test capitalization, depreciation calculations, and impairments', conclusion: '', deficiencies: '' },
  { control_area: 'Control Activities', control_id: 'CA-005', description: 'Accounts payable and accruals controls', status: '', testing_procedures: 'Test AP cut-off, accrual estimates, and vendor management', conclusion: '', deficiencies: '' },
  { control_area: 'Information & Communication', control_id: 'IC-001', description: 'Financial reporting systems and procedures', status: '', testing_procedures: 'Test system access, data integrity, and reporting accuracy', conclusion: '', deficiencies: '' },
  { control_area: 'Information & Communication', control_id: 'IC-002', description: 'Management reporting and communication', status: '', testing_procedures: 'Review management reporting packages and communication processes', conclusion: '', deficiencies: '' },
  { control_area: 'Monitoring', control_id: 'MON-001', description: 'Management monitoring of financial reporting', status: '', testing_procedures: 'Test management review controls and monitoring procedures', conclusion: '', deficiencies: '' },
  { control_area: 'Monitoring', control_id: 'MON-002', description: 'Internal audit function effectiveness', status: '', testing_procedures: 'Assess internal audit independence, competence, and reporting', conclusion: '', deficiencies: '' }
];

// COBIT 2019 40 Objectives Checklist Data
const cobit2019ObjectivesChecklist = [
  // EDM Domain (5 objectives)
  { domain: 'EDM', objective: 'EDM01', title: 'Ensured Governance Framework Setting and Maintenance', maturity_level: '', implementation_status: '', key_practices: 'Governance framework, roles and responsibilities, governance enablers', gaps: '', action_plan: '' },
  { domain: 'EDM', objective: 'EDM02', title: 'Ensured Benefits Delivery', maturity_level: '', implementation_status: '', key_practices: 'Benefits management, portfolio management, business case evaluation', gaps: '', action_plan: '' },
  { domain: 'EDM', objective: 'EDM03', title: 'Ensured Risk Optimization', maturity_level: '', implementation_status: '', key_practices: 'Risk appetite, risk tolerance, risk management integration', gaps: '', action_plan: '' },
  { domain: 'EDM', objective: 'EDM04', title: 'Ensured Resource Optimization', maturity_level: '', implementation_status: '', key_practices: 'Resource planning, resource allocation, resource optimization', gaps: '', action_plan: '' },
  { domain: 'EDM', objective: 'EDM05', title: 'Ensured Stakeholder Engagement', maturity_level: '', implementation_status: '', key_practices: 'Stakeholder identification, communication strategy, stakeholder satisfaction', gaps: '', action_plan: '' },
  
  // APO Domain (14 objectives)
  { domain: 'APO', objective: 'APO01', title: 'Managed the IT Management Framework', maturity_level: '', implementation_status: '', key_practices: 'IT management framework, governance mechanisms, compliance monitoring', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO02', title: 'Managed Strategy', maturity_level: '', implementation_status: '', key_practices: 'Strategic planning, strategic alignment, strategy communication', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO03', title: 'Managed Enterprise Architecture', maturity_level: '', implementation_status: '', key_practices: 'Architecture standards, architecture governance, technology roadmap', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO04', title: 'Managed Innovation', maturity_level: '', implementation_status: '', key_practices: 'Innovation strategy, emerging technology assessment, innovation portfolio', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO05', title: 'Managed Portfolio', maturity_level: '', implementation_status: '', key_practices: 'Portfolio management, investment decisions, portfolio optimization', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO06', title: 'Managed Budget and Costs', maturity_level: '', implementation_status: '', key_practices: 'Budget planning, cost management, financial controls', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO07', title: 'Managed Human Resources', maturity_level: '', implementation_status: '', key_practices: 'HR planning, competency management, performance evaluation', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO08', title: 'Managed Relationships', maturity_level: '', implementation_status: '', key_practices: 'Stakeholder relationships, business relationship management, customer satisfaction', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO09', title: 'Managed Service Agreements', maturity_level: '', implementation_status: '', key_practices: 'SLA definition, service level monitoring, service improvement', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO10', title: 'Managed Suppliers', maturity_level: '', implementation_status: '', key_practices: 'Supplier selection, supplier performance, contract management', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO11', title: 'Managed Quality', maturity_level: '', implementation_status: '', key_practices: 'Quality standards, quality assurance, quality improvement', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO12', title: 'Managed Risk', maturity_level: '', implementation_status: '', key_practices: 'Risk identification, risk assessment, risk treatment', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO13', title: 'Managed Security', maturity_level: '', implementation_status: '', key_practices: 'Security strategy, security controls, security monitoring', gaps: '', action_plan: '' },
  { domain: 'APO', objective: 'APO14', title: 'Managed Data', maturity_level: '', implementation_status: '', key_practices: 'Data governance, data quality, data lifecycle management', gaps: '', action_plan: '' }
];

// GDPR Article Checklist Data
const gdprArticleChecklist = [
  { article: 'Article 5', requirement: 'Principles relating to processing of personal data', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 6', requirement: 'Lawfulness of processing', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 7', requirement: 'Conditions for consent', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 8', requirement: 'Conditions applicable to child consent', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 9', requirement: 'Processing of special categories of personal data', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 10', requirement: 'Processing of personal data relating to criminal convictions', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 12', requirement: 'Transparent information, communication and modalities', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 13', requirement: 'Information to be provided where personal data are collected from the data subject', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 14', requirement: 'Information to be provided where personal data have not been obtained from the data subject', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 15', requirement: 'Right of access by the data subject', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 16', requirement: 'Right to rectification', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 17', requirement: 'Right to erasure (right to be forgotten)', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 18', requirement: 'Right to restriction of processing', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 19', requirement: 'Notification obligation regarding rectification or erasure of personal data or restriction of processing', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 20', requirement: 'Right to data portability', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 21', requirement: 'Right to object', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 22', requirement: 'Automated individual decision-making, including profiling', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 23', requirement: 'Restrictions', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 24', requirement: 'Responsibility of the controller', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 25', requirement: 'Data protection by design and by default', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 26', requirement: 'Joint controllers', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 27', requirement: 'Representatives of controllers or processors not established in the Union', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 28', requirement: 'Processor', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 29', requirement: 'Processing under the authority of the controller or processor', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 30', requirement: 'Records of processing activities', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 31', requirement: 'Cooperation with the supervisory authority', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 32', requirement: 'Security of processing', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 33', requirement: 'Notification of a personal data breach to the supervisory authority', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 34', requirement: 'Communication of a personal data breach to the data subject', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 35', requirement: 'Data protection impact assessment', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 36', requirement: 'Prior consultation', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 37', requirement: 'Designation of the data protection officer', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 38', requirement: 'Position of the data protection officer', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' },
  { article: 'Article 39', requirement: 'Tasks of the data protection officer', compliance_status: '', implementation_notes: '', evidence: '', gap_analysis: '' }
];

// ISO 27001:2022 Controls Checklist Data
const iso27001ControlsChecklist = [
  // Organizational Controls (5.1-5.37)
  { control_id: '5.1', control_title: 'Policies for information security', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.2', control_title: 'Information security roles and responsibilities', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.3', control_title: 'Segregation of duties', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.4', control_title: 'Management responsibilities', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.5', control_title: 'Contact with authorities', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.6', control_title: 'Contact with special interest groups', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.7', control_title: 'Threat intelligence', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.8', control_title: 'Information security in project management', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.9', control_title: 'Inventory of information and other associated assets', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.10', control_title: 'Acceptable use of information and other associated assets', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.11', control_title: 'Return of assets', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.12', control_title: 'Classification of information', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.13', control_title: 'Labelling of information', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '5.14', control_title: 'Information transfer', theme: 'Organizational', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  
  // People Controls (6.1-6.8)
  { control_id: '6.1', control_title: 'Screening', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '6.2', control_title: 'Terms and conditions of employment', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '6.3', control_title: 'Information security awareness, education and training', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '6.4', control_title: 'Disciplinary process', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '6.5', control_title: 'Information security responsibilities after termination or change of employment', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '6.6', control_title: 'Confidentiality or non-disclosure agreements', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '6.7', control_title: 'Remote working', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '6.8', control_title: 'Information security event reporting', theme: 'People', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },

  // Physical Controls (7.1-7.14)
  { control_id: '7.1', control_title: 'Physical security perimeters', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.2', control_title: 'Physical entry', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.3', control_title: 'Protection against environmental threats', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.4', control_title: 'Working in secure areas', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.5', control_title: 'Desk and screen policy', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.6', control_title: 'Protection of equipment', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.7', control_title: 'Secure disposal or reuse of equipment', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.8', control_title: 'Unattended user equipment', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.9', control_title: 'Clear desk and clear screen policy', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.10', control_title: 'Storage media', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.11', control_title: 'Supporting utilities', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.12', control_title: 'Cabling security', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.13', control_title: 'Equipment maintenance', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '7.14', control_title: 'Secure disposal or reuse of equipment', theme: 'Physical', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },

  // Technological Controls (8.1-8.34)
  { control_id: '8.1', control_title: 'User endpoint devices', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.2', control_title: 'Privileged access rights', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.3', control_title: 'Information access restriction', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.4', control_title: 'Access to source code', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.5', control_title: 'Secure authentication', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.6', control_title: 'Capacity management', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.7', control_title: 'Protection against malware', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.8', control_title: 'Management of technical vulnerabilities', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.9', control_title: 'Configuration management', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.10', control_title: 'Information deletion', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.11', control_title: 'Data masking', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.12', control_title: 'Data leakage prevention', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.13', control_title: 'Information backup', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.14', control_title: 'Redundancy of information processing facilities', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.15', control_title: 'Logging', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.16', control_title: 'Monitoring activities', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.17', control_title: 'Clock synchronisation', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.18', control_title: 'Use of privileged utility programs', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.19', control_title: 'Installation of software on operational systems', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.20', control_title: 'Networks security management', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.21', control_title: 'Security of network services', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.22', control_title: 'Segregation of networks', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.23', control_title: 'Web filtering', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.24', control_title: 'Use of cryptography', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.25', control_title: 'Secure system development life cycle', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.26', control_title: 'Application security requirements', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.27', control_title: 'Secure system architecture and engineering principles', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.28', control_title: 'Secure coding', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.29', control_title: 'Security testing in development and acceptance', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.30', control_title: 'Outsourced development', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.31', control_title: 'Separation of development, testing and operational environments', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.32', control_title: 'Change management', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.33', control_title: 'Test information', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' },
  { control_id: '8.34', control_title: 'Protection of information systems during audit testing', theme: 'Technological', implementation_status: '', maturity_level: '', implementation_notes: '', evidence: '', next_steps: '' }
];

// Service class for generating checklists
export class ChecklistGenerator {
  
  // Generate NIST CSF v2.0 Excel checklist
  static generateNistCsfChecklist(): Blob {
    const ws = XLSX.utils.json_to_sheet(nistCsfV2Checklist);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "NIST CSF v2.0 Checklist");
    
    // Add summary sheet
    const summary = [
      { metric: 'Total Subcategories', value: '106' },
      { metric: 'GOVERN Function', value: '41' },
      { metric: 'IDENTIFY Function', value: '22' },
      { metric: 'PROTECT Function', value: '25' },
      { metric: 'DETECT Function', value: '8' },
      { metric: 'RESPOND Function', value: '5' },
      { metric: 'RECOVER Function', value: '5' }
    ];
    const summaryWs = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");
    
    return new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
  }

  // Generate GDPR Article checklist
  static generateGdprChecklist(): Blob {
    const ws = XLSX.utils.json_to_sheet(gdprArticleChecklist);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "GDPR Articles Checklist");
    
    const summary = [
      { metric: 'Total Articles Covered', value: '33' },
      { metric: 'Principles & Legal Basis', value: 'Articles 5-10' },
      { metric: 'Data Subject Rights', value: 'Articles 12-23' },
      { metric: 'Controller/Processor', value: 'Articles 24-36' },
      { metric: 'Data Protection Officer', value: 'Articles 37-39' }
    ];
    const summaryWs = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");
    
    return new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
  }

  // Generate ISO 27001:2022 controls checklist
  static generateIso27001Checklist(): Blob {
    const ws = XLSX.utils.json_to_sheet(iso27001ControlsChecklist);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ISO 27001 Controls");
    
    const summary = [
      { metric: 'Total Controls', value: '93' },
      { metric: 'Organizational Controls', value: '37' },
      { metric: 'People Controls', value: '8' },
      { metric: 'Physical Controls', value: '14' },
      { metric: 'Technological Controls', value: '34' }
    ];
    const summaryWs = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");
    
    return new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
  }

  // Generate PCI DSS v4.0 Excel checklist
  static generatePciDssChecklist(): Blob {
    const ws = XLSX.utils.json_to_sheet(pciDssV4Checklist);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "PCI DSS v4.0 Requirements");
    
    const summary = [
      { metric: 'Total Requirements', value: '20 Key Requirements' },
      { metric: 'Build & Maintain Secure Networks', value: 'Requirements 1-2' },
      { metric: 'Protect Cardholder Data', value: 'Requirements 3-4' },
      { metric: 'Maintain Vulnerability Mgmt', value: 'Requirements 5-6' },
      { metric: 'Implement Strong Access Control', value: 'Requirements 7-8' },
      { metric: 'Regularly Monitor Networks', value: 'Requirements 9-10' },
      { metric: 'Maintain Info Security Policy', value: 'Requirements 11-12' }
    ];
    const summaryWs = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");
    
    return new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
  }

  // Generate SOX Section 404 Excel checklist
  static generateSoxChecklist(): Blob {
    const ws = XLSX.utils.json_to_sheet(soxSection404Checklist);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SOX Section 404 Controls");
    
    const summary = [
      { metric: 'Total Controls', value: '16 Key Controls' },
      { metric: 'Entity Level Controls', value: '5 Controls' },
      { metric: 'Risk Assessment', value: '2 Controls' },
      { metric: 'Control Activities', value: '5 Controls' },
      { metric: 'Information & Communication', value: '2 Controls' },
      { metric: 'Monitoring', value: '2 Controls' }
    ];
    const summaryWs = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");
    
    return new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
  }

  // Generate COBIT 2019 Excel checklist
  static generateCobitChecklist(): Blob {
    const ws = XLSX.utils.json_to_sheet(cobit2019ObjectivesChecklist);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "COBIT 2019 Objectives");
    
    const summary = [
      { metric: 'Total Objectives', value: '40 Objectives' },
      { metric: 'EDM Domain', value: '5 Objectives' },
      { metric: 'APO Domain', value: '14 Objectives' },
      { metric: 'BAI Domain', value: '11 Objectives' },
      { metric: 'DSS Domain', value: '6 Objectives' },
      { metric: 'MEA Domain', value: '4 Objectives' }
    ];
    const summaryWs = XLSX.utils.json_to_sheet(summary);
    XLSX.utils.book_append_sheet(wb, summaryWs, "Summary");
    
    return new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { 
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    });
  }
  static downloadChecklist(checklistId: string, filename: string) {
    let blob: Blob;
    
    switch (checklistId) {
      case 'nist-csf-v2-comprehensive-checklist':
        blob = this.generateNistCsfChecklist();
        break;
      case 'gdpr-article-by-article-checklist':
        blob = this.generateGdprChecklist();
        break;
      case 'iso27001-2022-complete-checklist':
        blob = this.generateIso27001Checklist();
        break;
      case 'pci-dss-v4-complete-requirements-checklist':
        blob = this.generatePciDssChecklist();
        break;
      case 'sox-complete-compliance-checklist':
        blob = this.generateSoxChecklist();
        break;
      case 'cobit-2019-complete-objectives-checklist':
        blob = this.generateCobitChecklist();
        break;
      default: {
        // For other checklists, generate a comprehensive template
        const templateData = [
          { requirement: 'Sample Requirement 1', description: 'Detailed description of requirement', compliance_status: 'Not Started', priority: 'High', responsible_party: '', target_date: '', implementation_notes: '', evidence: '', gaps: '' },
          { requirement: 'Sample Requirement 2', description: 'Another detailed requirement description', compliance_status: 'In Progress', priority: 'Medium', responsible_party: '', target_date: '', implementation_notes: '', evidence: '', gaps: '' },
          { requirement: 'Sample Requirement 3', description: 'Third requirement with full details', compliance_status: 'Complete', priority: 'Low', responsible_party: '', target_date: '', implementation_notes: '', evidence: '', gaps: '' }
        ];
        const ws = XLSX.utils.json_to_sheet(templateData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Compliance Checklist");
        
        // Add instructions sheet
        const instructions = [
          { step: '1', instruction: 'Review each requirement carefully' },
          { step: '2', instruction: 'Assess current compliance status' },
          { step: '3', instruction: 'Assign responsible parties' },
          { step: '4', instruction: 'Set target completion dates' },
          { step: '5', instruction: 'Document implementation notes' },
          { step: '6', instruction: 'Gather supporting evidence' },
          { step: '7', instruction: 'Identify gaps and remediation steps' }
        ];
        const instructionsWs = XLSX.utils.json_to_sheet(instructions);
        XLSX.utils.book_append_sheet(wb, instructionsWs, "Instructions");
        
        blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { 
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
        });
      }
    }
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
