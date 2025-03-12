import { ReactNode } from "react";

interface element {
  children: ReactNode;
}
export function Container({ children }: element) {
  return (
    <div className=" overflow-x-hidden min-h-screen overflow-y-hidden  ">
      {children}
    </div>
  );
}
