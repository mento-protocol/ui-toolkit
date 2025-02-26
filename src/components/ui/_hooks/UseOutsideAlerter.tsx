/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";

function useOutsideAlerter(
  ref: React.RefObject<any>,
  callback: (...args: any[]) => any,
  prompt?: string,
) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (!prompt || !window.confirm(prompt)) {
          callback();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, prompt]);
}

export default useOutsideAlerter;
