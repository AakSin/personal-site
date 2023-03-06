import React from "react";
import { useParams } from "react-router-dom";

export default function WorkMain() {
  let { name } = useParams();
  return <div>{name}</div>;
}
