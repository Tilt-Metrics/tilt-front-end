/** @jsx jsx */
import { jsx } from "@emotion/core";
import { mq } from "../lib/utils";

function Footer() {
  return (
    <div
      css={theme => ({
        backgroundColor: theme.colors.licorice
      })}
    >
      <footer
        css={theme => ({
          color: "white",
          padding: theme.spacing[2],
          maxWidth: theme.maxWidths[1],
          margin: "0 auto",
          width: "100%",
          "& a": {
            color: theme.colors.concrete,
            textDecoration: "none",
            transition: ".3s ease",
            "&:hover": {
              color: "white"
            }
          }
        })}
      >
        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["repeat(1, 1fr)", "1fr 1fr 1fr 1fr 1fr"],
            gridRowGap: ["30px", "auto"]
          })}
        >
          <div css={mq({ display: ["none", "block"], gridColumn: "1/2" })}>
            <svg
              viewBox="0 0 230 34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Landing-Page"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="tilt-metrics-logo-2-color" fillRule="nonzero">
                  <path
                    d="M2.5656535,29.8916667 C2.9592497,30.1344536 3.38886181,30.3114411 3.83799392,30.4158333 C5.04042553,30.6354167 6.6343465,30.3308333 7.69696049,27.9720833 L9.84316109,23.1341667 C12.1151976,18.0695833 14.3173252,13.32375 15.9182371,10.1504167 C17.1916202,7.46898569 20.1264716,6.0368262 22.9895198,6.69974626 C25.8525681,7.36266631 27.882152,9.94430825 27.8796353,12.92 L27.8796353,27.3416667 C27.8925195,28.8025984 28.8881811,30.0658277 30.2914894,30.4016667 C31.4589666,30.6708333 33.0878419,30.4016667 34.2273556,28.02875 C35.150152,26.0241667 36.3246201,23.4175 37.5130699,20.6620833 C40.3094225,14.4216667 43.4133739,7.33833333 44.9863222,4.37041667 C46.6431611,1.275 49.7820669,-0.0425 52.725228,0.91375 C55.3499865,1.75011062 57.1339295,4.21753942 57.1294833,7.00541667 L57.1294833,27.2425 C57.0315521,28.6400992 57.90262,29.9198509 59.2267477,30.32375 C60.5829787,30.7770833 62.393617,30.23875 63.631003,28.3829167 C63.8617021,28.0429167 64.1762918,27.5825 64.5468085,27.0654167 L67.1753799,28.985 L66.3155015,30.2245833 C64.4209726,33.0579167 60.8765957,34.4745833 57.9264438,33.2916667 C55.4854506,32.3018133 53.8908592,29.8993684 53.9066869,27.2354167 L53.9066869,7.04083333 C53.9830645,5.5633404 52.9762726,4.25349969 51.543769,3.96666667 C50.3133739,3.6975 48.9361702,3.96666667 47.8525836,5.95708333 C46.3285714,8.79041667 43.2316109,15.8170833 40.4841945,22.0079167 C39.2607903,24.7704167 38.100304,27.3841667 37.1844985,29.4029167 C35.7164134,32.6329167 32.8291793,34.2620833 29.7462006,33.6033333 C26.4954407,32.895 24.6428571,30.1254167 24.649848,26.6545833 L24.649848,13.0120833 C24.7627533,11.5565292 23.7838738,10.2452517 22.3708207,9.95916667 C20.9101743,9.59325738 19.3982986,10.3265361 18.7635258,11.70875 C17.1556231,14.7475 15.037386,19.5004167 12.7933131,24.45875 L10.6331307,29.3179167 C9.38176292,32.06625 7.07477204,33.6883333 4.54407295,33.6883333 C4.05316968,33.6851845 3.56376955,33.6329875 3.08297872,33.5325 C2.43592687,33.398648 1.80695827,33.1870118 1.20942249,32.9020833 L0.629179331,32.6045833 L2.02735562,29.58 L2.5656535,29.8916667 Z"
                    id="SVGID"
                    fill="#008DFF"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div css={mq({ gridColumn: ["auto", "2/4"] })}>
            <div
              css={theme => ({
                marginBottom: theme.spacing[0]
              })}
            >
              <span
                css={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 14
                }}
              >
                contact
              </span>
              <ul>
                <li>
                  <a href="mailto:hello@tiltmetics.com">
                    hello@tiltmetrics.com
                  </a>
                </li>
                <li>
                  <a href="tel:4015155940">(401) 515-5940</a>
                </li>
              </ul>
            </div>
            <div>
              <span
                css={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 14
                }}
              >
                locations
              </span>
              <ul>
                <li>
                  <a href="https://goo.gl/maps/C25837YmXQo9cHbGA">
                    56 Exchange Terrace #210 Providence, RI 02903
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/JUnAXwMH4tsvmQYu6">
                    745 Atlantic Ave. Boston, MA 02111
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <span
              css={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 14
              }}
            >
              connect
            </span>
            <ul>
              <li>
                <a href="http://twitter.com/tiltmetricsHQ">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com/tiltmetrics">Facebook</a>
              </li>
              <li>
                <a href="https://linkedin.com/company/tiltmetrics">Linkedin</a>
              </li>
            </ul>
          </div>

          <div
            css={{
              display: "flex",
              position: "relative",
              flexDirection: "column"
            }}
          >
            <script
              type="text/javascript"
              src="https://widget.clutch.co/static/js/widget.js"
            />
            <div
              className="clutch-widget"
              {...{ "data-url": "https://widget.clutch.co" }}
              {...{ "data-widget-type": "2" }}
              {...{ "data-darkbg": "1" }}
              {...{ "data-clutchcompany-id": "474669" }}
            />
            <div className="ggl">
              <script src="https://apis.google.com/js/platform.js" />
              <div className="g-partnersbadge" data-agency-id="6146276113" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
