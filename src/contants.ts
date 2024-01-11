import { BigInt } from "@hyperoracle/zkgraph-lib";

// Confirm the esig of the event you want to use.
const ProposalCreatedEsig = "7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0";
const ProposalQueudEsig = "9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892";
const ProposalCancelledEsig = "789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c";
const ProposalExecutedEsig = "b8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda4";

export const proposalCreatedU32 = BigInt.fromString(ProposalCreatedEsig.slice(0, 8)).toU32();
export const proposalQueuedU32 = BigInt.fromString(ProposalQueudEsig.slice(0, 8)).toU32();
export const proposalCancelledU32 = BigInt.fromString(ProposalCancelledEsig.slice(0, 8)).toU32();
export const proposalExecutedU32 = BigInt.fromString(ProposalExecutedEsig.slice(0, 8)).toU32();

