import React, { useState, useEffect, useCallback } from "react";
import { Node, ExtNode } from "relatives-tree/lib/types";
import ReactFamilyTree from "react-family-tree";

import simpleFamily from "relatives-tree/samples/simple-family.json";

import nadeem_family from "./nadeem_family.json";

import styles from "./App.module.css";
import FamilyNode from "./FamilyNode";

const WIDTH = 250;
const HEIGHT = 130;

const DEFAULT_SOURCE = "average-tree.json";

export default React.memo<{}>(function FamilyTree() {
  const nodes = nadeem_family;
  const rootId = nodes[0].id;
  const myId = nodes[0].id;

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>FamilyTree demo</h1>
      </header>
      <ReactFamilyTree
        nodes={nodes as Node[]}
        rootId={rootId}
        width={WIDTH}
        height={HEIGHT}
        className={styles.tree}
        renderNode={(node: ExtNode) => (
          <FamilyNode
            key={node.id}
            node={node}
            isRoot={node.id === rootId}
            onSubClick={() => {}}
            style={{
              width: WIDTH,
              height: HEIGHT,
              transform: `translate(${node.left * (WIDTH / 2)}px, ${
                node.top * (HEIGHT / 2)
              }px)`,
            }}
          />
        )}
      />
    </div>
  );
});
