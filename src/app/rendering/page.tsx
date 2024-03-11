// src>app>rendering/page.tsx
import CSR from "@/components/rendering/CSR";
import ISR from "@/components/rendering/ISR";
import SSG from "@/components/rendering/SSG";
import SSR from "@/components/rendering/SSR";
import Link from "next/link";
import React from "react";

export const revalidate = 5;

const RenderingTestPage = () => {
  return (
    <div>
      <h1>4가지 렌더링 방식을 테스트합니다.</h1>
      <ul>
        <li>
          SSG test
          <SSG />
        </li>
        <li>
          ISR test
          <ISR />
        </li>
        <li>
          SSR test
          <SSR />
        </li>
        <li>
          CSR test
          <CSR />
        </li>
      </ul>
    </div>
  );
};

export default RenderingTestPage;
