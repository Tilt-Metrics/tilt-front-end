/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx } from "@emotion/core";
import Link from "next/link";
import { useRouter } from "next/router";

import Wrapper from "./UI/Wrapper";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

import { mq } from "../lib/utils";

function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scheme, setScheme] = useState(
    router.route === "/" ? "light" : "normal"
  );

  function handleHomeHeader() {
    const headerHeight = document.querySelector("#hero").clientHeight;
    const top = window.scrollY;

    if (top >= headerHeight && scheme === "light") {
      setScheme("normal");
    } else if (top <= headerHeight && !open) {
      setScheme("light");
    }
  }

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    if (router.route === "/") {
      window.addEventListener("scroll", handleHomeHeader, { passive: true });
    }
    return () =>
      window.removeEventListener("scroll", handleHomeHeader, {
        passive: true
      });
  });

  return (
    <>
      <div
        css={theme =>
          mq({
            width: "100%",
            position: "fixed",
            background:
              scheme === "light" || open ? "none" : theme.colors.slate,
            padding: `${theme.spacing[0]} 0px`,
            top: 0,
            left: 0,
            zIndex: 999999
          })
        }
      >
        <Wrapper>
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <div>
              <Link href="/" passHref>
                <a css={mq({ display: "inline-block", width: [20, "auto"] })}>
                  <Logo
                    scheme={open || scheme === "light" ? "light" : scheme}
                  />
                </a>
              </Link>
            </div>
            <div
              onClick={() => (!open ? setOpen(true) : setOpen(false))}
              css={mq({
                display: ["block", "none"],
                cursor: "pointer",
                position: "relative",
                height: 32,
                width: 32
              })}
            >
              <span
                css={theme => ({
                  width: "100%",
                  height: 3,
                  background:
                    scheme === "light" || open ? "white" : theme.colors.coral,
                  position: "absolute",
                  transform: open
                    ? "rotate(45deg) translateY(6px)"
                    : "rotate(0deg) translateY(0px)",
                  top: 10
                })}
              />
              <span
                css={theme => ({
                  width: "100%",
                  height: 3,
                  background:
                    scheme === "light" || open ? "white" : theme.colors.coral,
                  position: "absolute",
                  transform: open
                    ? "rotate(-45deg) translateY(-6px)"
                    : "rotate(0deg) translateY(0px)",
                  bottom: 10
                })}
              />
            </div>
            <nav
              css={theme =>
                mq({
                  display: ["none", "block"],
                  "& li": {
                    display: "inline-block",
                    marginRight: theme.spacing[1]
                  }
                })
              }
            >
              <ul
                css={theme => ({
                  "& a": {
                    color: scheme === "light" ? "white" : theme.colors.coral,
                    textDecoration: "none",
                    "&:hover": {
                      borderBottom:
                        scheme === "light"
                          ? "2px solid white"
                          : `2px solid ${theme.colors.coral}`
                    }
                  }
                })}
              >
                <li>
                  <Link href="/#services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#process">
                    <a>Process</a>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" passHref>
                    <a>Case Studies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" scroll={false}>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Wrapper>
      </div>
      <div
        css={mq({
          opacity: open ? 1 : 0,
          display: ["block", "none"],
          pointerEvents: open ? "auto" : "none"
        })}
      >
        <MobileMenu />
      </div>
    </>
  );
}

export default Header;
