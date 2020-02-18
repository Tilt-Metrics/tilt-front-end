/** @jsx jsx */
import { useEffect } from "react";
import { jsx } from "@emotion/core";
import { motion, useMotionValue, useTransform } from "framer-motion";

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function ProcessGraph(props) {
  const xVal = useMotionValue(props.percent);
  const value = useTransform(
    xVal,
    latest => lerp(latest, xVal.get(), 0.5) * 100
  );

  useEffect(
    () => {
      xVal.set(props.percent);
    },
    [props.percent]
  );

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 1350 745"
    >
      <defs>
        <linearGradient
          x1="100%"
          y1="34.7729767%"
          x2="0%"
          y2="65.2270233%"
          id="linearGradient"
        >
          <stop stopColor="#53F9CB" offset="0%" />
          <stop stopColor="#0091FF" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g stroke="url(#linearGradient)">
          <polyline
            opacity="0.5"
            points="50 785 162.3812 752.955312 242.292659 700.402812 382.640377 710.390937 461.920387 651.210312 534.661582 684.862812 654.570313 651.210312 749.528522 700.402812 822.111855 571.633437 953.436508 514.854687 1049.45821 428.826875 1165.20437 476.825 1263.83495 461.508125 1331 343 1400 40"
          />
        </g>
      </g>
      <motion.circle
        css={{
          offsetDistance: `${value.get()}%`,
          offsetPath:
            "path('M50 785 162.3812 752.955312 242.292659 700.402812 382.640377 710.390937 461.920387 651.210312 534.661582 684.862812 654.570313 651.210312 749.528522 700.402812 822.111855 571.633437 953.436508 514.854687 1049.45821 428.826875 1165.20437 476.825 1263.83495 461.508125 1331 343 1400 40')"
        }}
        r="5"
        stroke="#008dff"
        strokeWidth="1px"
        fill="rgba(255, 255, 255, 1)"
      />
    </svg>
  );
}

export default ProcessGraph;
