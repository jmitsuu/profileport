import { ReactNode } from "react";

interface element {
  children: ReactNode;
}
export function Container({ children }: element) {
  return (
    <div className=" min-h-screen  ">
      {children}
    </div>
  );
}
