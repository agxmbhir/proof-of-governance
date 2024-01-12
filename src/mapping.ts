import { Block, require as need } from "@hyperoracle/zkgraph-lib";
import { Bytes } from "@hyperoracle/zkgraph-lib";

const WETHaddress = Bytes.fromHexString("0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6");

export function handleBlocks(blocks: Block[]): Bytes {
  let state: Bytes;
  const event = blocks[0].events[0];
  let tokenY: Bytes = new Bytes(0);
  if (event.topic1.equals(WETHaddress.padStart(32))) {
    tokenY = event.topic2;
  } else if (event.topic2.equals(WETHaddress.padStart(32))) {
    tokenY = event.topic1;
  }

  need(tokenY.length > 0)
  let poolAddress = event.data.slice(32, 64);
  state = Bytes.fromByteArray(tokenY.concat(poolAddress));
  return state;
}