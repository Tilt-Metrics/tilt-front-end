/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";
import Wrapper from "./UI/Wrapper";
import Logo from "./Logo";

function Header() {
  return (
    <div
      css={theme => ({
        width: "100%",
        position: "fixed",
        backgroundColor: theme.colors.slate,
        padding: `${theme.spacing[0]}`,
        top: 0,
        left: 0,
        zIndex: 999
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
                <Logo />
              </a>
            </Link>
          </div>
          <nav
            css={theme => ({
              "& li": { display: "inline-block", marginRight: theme.spacing[1] }
            })}
          >
            <ul>
              <li>Services</li>
              <li>Clients</li>
              <li>
                <Link href="/case-studies/">
                  <a>Case Studies</a>
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
