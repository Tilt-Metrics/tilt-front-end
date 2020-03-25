/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx } from "@emotion/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "./UI/Wrapper";
import Logo from "./Logo";

function Header() {
  const router = useRouter();
  const [scheme, setScheme] = useState(
    router.route === "/" ? "light" : "normal"
  );

  function handleHomeHeader() {
    const headerHeight = document.querySelector("#hero").clientHeight;
    const top = window.scrollY;

    if (top >= headerHeight && scheme === "light") {
      setScheme("normal");
    } else if (top <= headerHeight) {
      setScheme("light");
    }
  }

  useEffect(() => {
    if (router.route === "/") {
      window.addEventListener("scroll", handleHomeHeader, { passive: true });
    }
    return () =>
      window.removeEventListener("scroll", handleHomeHeader, {
        passive: true
      });
  });

  return (
    <div
      css={theme => ({
        width: "100%",
        position: "fixed",
        background: scheme === "light" ? "none" : theme.colors.slate,
        padding: `${theme.spacing[0]}`,
        top: 0,
        left: 0,
        zIndex: 999999
      })}
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
              <a>
                <Logo scheme={scheme} />
              </a>
            </Link>
          </div>
          <nav
            css={theme => ({
              "& li": { display: "inline-block", marginRight: theme.spacing[1] }
            })}
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
      </Wrapper>
    </div>
  );
}

export default Header;
