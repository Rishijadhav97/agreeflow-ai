import type { Agreement, Deal, Milestone, Organisation, Transcript } from "@/types/armor";
export const organisation: Organisation = { id:"org-1", name:"Vertex Commerce", type:"Private Limited", industry:"Industrial Supply", email:"ops@vertexcommerce.in", phone:"+91 98765 43210", country:"India", address:"Andheri East, Mumbai, Maharashtra", website:"vertexcommerce.in", primaryContact:{name:"Rishi Jadhav",email:"rishi@vertexcommerce.in",phone:"+91 98765 43210"} };
export const deals: Deal[] = [
 {id:"ARM-1029",organisationId:"org-1",conversationId:"con-1",title:"500 Unit Supply Agreement",counterparty:"Shakti Components Pvt Ltd",buyer:"Vertex Commerce",seller:"Shakti Components Pvt Ltd",product:"Precision valve assemblies",quantity:500,unitPrice:800,totalAmount:400000,paymentTerms:"30% advance, 70% after delivery",deliveryTerms:"Delivery by 20 September 2026",responsibilities:["Buyer pays ₹1,20,000 advance","Seller supplies 500 units by deadline"],conditions:["Quality inspection on delivery"],status:"Active",createdAt:"12 Sep 2026",nextMilestone:"Advance Payment",deadline:"2d 14h",progress:62},
 {id:"ARM-1031",organisationId:"org-1",conversationId:"con-2",title:"Business Consulting Agreement",counterparty:"Aarav Strategy LLP",buyer:"Vertex Commerce",seller:"Aarav Strategy LLP",product:"Market entry advisory",quantity:1,unitPrice:1250000,totalAmount:1250000,paymentTerms:"Quarterly retainers",deliveryTerms:"Final report by 15 November 2026",responsibilities:["Consultant delivers market report"],conditions:[],status:"Awaiting Counterparty",createdAt:"10 Sep 2026",nextMilestone:"Counterparty confirmation",deadline:"18h",progress:36},
 {id:"ARM-1034",organisationId:"org-1",conversationId:"con-3",title:"Equipment Purchase Agreement",counterparty:"Bharat Process Systems",buyer:"Vertex Commerce",seller:"Bharat Process Systems",product:"Packaging equipment",quantity:2,unitPrice:420000,totalAmount:840000,paymentTerms:"50% advance",deliveryTerms:"Delivery by 2 October 2026",responsibilities:["Seller installs equipment"],conditions:[],status:"Under Review",createdAt:"08 Sep 2026",nextMilestone:"Internal review",deadline:"3d",progress:24},
 {id:"ARM-1038",organisationId:"org-1",conversationId:"con-4",title:"Service Contract",counterparty:"Nexora Services India",buyer:"Vertex Commerce",seller:"Nexora Services India",product:"Annual maintenance",quantity:1,unitPrice:275000,totalAmount:275000,paymentTerms:"Annual upfront",deliveryTerms:"12 month term",responsibilities:["Provider maintains equipment"],conditions:[],status:"Completed",createdAt:"28 Aug 2026",nextMilestone:"Complete",deadline:"—",progress:100},
];
export const transcript: Transcript[] = [
{id:"t1",conversationId:"con-1",speaker:"Rahul — Buyer",timestamp:"00:42",text:"I need 500 units for the next shipment.",confidence:.98},
{id:"t2",conversationId:"con-1",speaker:"Arjun — Seller",timestamp:"01:08",text:"We can provide 500 units at ₹800 per unit.",confidence:.99},
{id:"t3",conversationId:"con-1",speaker:"Rahul — Buyer",timestamp:"01:36",text:"I'll make 30 percent advance payment.",confidence:.94},
{id:"t4",conversationId:"con-1",speaker:"Arjun — Seller",timestamp:"02:11",text:"Delivery can be completed by September 20th.",confidence:.97},
];
export const agreements: Agreement[] = [
{id:"AGR-1029",dealId:"ARM-1029",sender:"Vertex Commerce",counterparty:"Shakti Components Pvt Ltd",recipientEmail:"agreements@shakticomponents.in",status:"Awaiting Counterparty",sentAt:"12 Sep 2026"},
{id:"AGR-1031",dealId:"ARM-1031",sender:"Vertex Commerce",counterparty:"Aarav Strategy LLP",recipientEmail:"legal@aaravstrategy.in",status:"Confirmed",sentAt:"10 Sep 2026",confirmedAt:"11 Sep 2026"},
{id:"AGR-1034",dealId:"ARM-1034",sender:"Vertex Commerce",counterparty:"Bharat Process Systems",recipientEmail:"contracts@bharatprocess.in",status:"Draft"},
];
export const milestones: Milestone[] = [
{id:"m1",dealId:"ARM-1029",title:"Conversation completed",responsibleParty:"Both parties",dueDate:"12 Sep",status:"completed"},
{id:"m2",dealId:"ARM-1029",title:"Transcript verified",responsibleParty:"Vertex Commerce",dueDate:"12 Sep",status:"completed"},
{id:"m3",dealId:"ARM-1029",title:"Deal created",responsibleParty:"Armor AI",dueDate:"12 Sep",status:"completed"},
{id:"m4",dealId:"ARM-1029",title:"Agreement sent",responsibleParty:"Vertex Commerce",dueDate:"12 Sep",status:"completed"},
{id:"m5",dealId:"ARM-1029",title:"Agreement confirmed",responsibleParty:"Both parties",dueDate:"13 Sep",status:"completed"},
{id:"m6",dealId:"ARM-1029",title:"Advance payment",amount:120000,responsibleParty:"Buyer",dueDate:"15 Sep",status:"current"},
{id:"m7",dealId:"ARM-1029",title:"Delivery",responsibleParty:"Seller",dueDate:"20 Sep",status:"upcoming"},
{id:"m8",dealId:"ARM-1029",title:"Final payment",amount:280000,responsibleParty:"Buyer",dueDate:"23 Sep",status:"upcoming"},
];
export const money=(n:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
