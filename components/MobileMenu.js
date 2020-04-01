/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";

import { mq } from "../lib/utils";

export default function() {
  return (
    <div
      css={theme =>
        mq({
          alignItems: "center",
          display: ["flex", "none"],
          height: "100vh",
          position: "fixed",
          top: 0,
          padding: "0 15px",
          left: 0,
          background: theme.colors.brightBlue,
          width: "100vw",
          zIndex: 99999
        })
      }
    >
      <nav
        css={theme =>
          mq({
            "& li": {
              display: "block",
              marginRight: theme.spacing[1]
            }
          })
        }
      >
        <ul
          css={theme => ({
            "& li": {
              marginBottom: theme.spacing[0]
            },
            "& a": {
              color: "white",
              fontSize: theme.headingSizes[3],
              textDecoration: "none",
              "&:hover": {
                borderBottom: "2px solid white"
              }
            }
          })}
        >
          <li>
            <Link href="/case-studies/">
              <a>Case Studies</a>
            </Link>
          </li>
          <li>
            <Link href="/contact/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
