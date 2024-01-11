import { proposalCancelledU32, proposalCreatedU32, proposalExecutedU32, proposalQueuedU32 } from './contants';
import { Bytes, Event, BigInt } from "@hyperoracle/zkgraph-lib";

function getProposalIdfromEvent(event: Event): string {
    const source = changetype<Bytes>(event.data);
    const proposalId = BigInt.fromBytes(source.slice(0, 32));
    return proposalId.toString();
}

export function judgeEvents(events: Event[]): Bytes {
    for (let i = 0; i < events.length; i++) {
        switch (events[i].esig.toU32()) {
            case proposalCreatedU32:
                return Bytes.fromUTF8("0s" + getProposalIdfromEvent(events[i]));
                break;
            case proposalQueuedU32:
                return Bytes.fromUTF8("1s" + getProposalIdfromEvent(events[i]));
                break;
            case proposalCancelledU32:
                return Bytes.fromUTF8("2s" + getProposalIdfromEvent(events[i]));
                break;
            case proposalExecutedU32:
                return Bytes.fromUTF8("3s" + getProposalIdfromEvent(events[i]));
                break;
            default:
                return Bytes.fromHexString("0x00");
        }
    }
    return Bytes.fromHexString("0x00");
}