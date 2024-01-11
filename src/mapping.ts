//@ts-ignore
import { Block } from "@hyperoracle/zkgraph-lib";
import { Bytes } from "@hyperoracle/zkgraph-lib";
import { judgeEvents } from './judgeEvents';

export function handleBlocks(blocks: Block[]): Bytes {
  return judgeEvents(blocks[0].events);
}
