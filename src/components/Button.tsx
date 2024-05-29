"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";
import Link from "next/link";

export function MovingBorderDemo({ content, link }: any) {
  return (
    <div>
      <Link href="/emergencyDetails">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          {content || "Button"}
        </Button>
      </Link>
    </div>


  );
}
