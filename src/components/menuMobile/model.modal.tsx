import { useState } from "react";

export function useModelModal() {
  const [modal, setModal] = useState(false);
 const closeModal = ()=>{
  setModal(false)
 }
  return {
    state:{modal},
    actions: {closeModal, setModal},
  };
}
