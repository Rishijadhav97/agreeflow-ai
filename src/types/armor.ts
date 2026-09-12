export type DealStatus = "Draft" | "Under Review" | "Awaiting Counterparty" | "Confirmed" | "Changes Requested" | "Active" | "Completed";
export type Organisation = { id:string; name:string; type:string; industry:string; email:string; phone:string; country:string; address:string; website:string; logo?:string; primaryContact:{name:string;email:string;phone:string} };
export type User = { id:string; organisationId:string; name:string; email:string; role:string };
export type Conversation = { id:string; organisationId:string; type:"online"|"offline"; participants:string[]; startedAt:string; endedAt?:string; duration:string; recordingStatus:string; transcriptStatus:string };
export type Transcript = { id:string; conversationId:string; speaker:string; timestamp:string; text:string; confidence:number };
export type Deal = { id:string; organisationId:string; conversationId:string; title:string; counterparty:string; buyer:string; seller:string; product:string; quantity:number; unitPrice:number; totalAmount:number; paymentTerms:string; deliveryTerms:string; responsibilities:string[]; conditions:string[]; status:DealStatus; createdAt:string; nextMilestone:string; deadline:string; progress:number };
export type Agreement = { id:string; dealId:string; sender:string; counterparty:string; recipientEmail:string; status:DealStatus; sentAt?:string; confirmedAt?:string; changeRequest?:string };
export type Milestone = { id:string; dealId:string; title:string; amount?:number; responsibleParty:string; dueDate:string; status:"completed"|"current"|"upcoming" };
