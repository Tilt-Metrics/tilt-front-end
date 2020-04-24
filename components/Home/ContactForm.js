/** @jsx jsx */
import { useState } from "react";
import { jsx } from "@emotion/core";

function ContactForm(props) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => {
    const form = document.querySelector("#form");
    e.preventDefault();

    const formData = new FormData();
    formData.append("your-name", form.elements[0].value);
    formData.append("your-email", form.elements[1].value);
    formData.append("your-message", form.elements[2].value);

    fetch(
      "https://admin.tiltmetrics.com/wp-json/contact-form-7/v1/contact-forms/76/feedback",
      {
        method: "POST",
        body: formData
      }
    )
      .then(e => {
        window.dataLayer.push({
          event: "formSubmitted",
          formName: "Contact Form Home"
        });
        setSubmitted(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div
      css={theme => ({
        backgroundColor: theme.colors.slate,
        fontFamily: theme.fonts.body,
        minHeight: "100vh",
        width: "100%"
      })}
    >
      <div
        css={theme => ({
          paddingTop: theme.spacing[3],
          paddingBottom: theme.spacing[3],
          maxWidth: theme.maxWidths[0],
          margin: "0 auto",
          textAlign: "center"
        })}
      >
        <span
          css={theme => ({
            color: theme.colors.brightBlue,
            display: "block",
            marginBottom: theme.spacing[0],
            textTransform: "uppercase",
            fontWeight: "bold"
          })}
        >
          {props.label}
        </span>
        <h3
          css={theme => ({
            fontSize: theme.headingSizes[2],
            marginBottom: theme.spacing[1]
          })}
        >
          {props.headline}
        </h3>
        <p
          css={theme => ({
            fontSize: theme.copySizes[1],
            color: theme.colors.concrete
          })}
        >
          {props.subheadline}
        </p>
        {!submitted && (
          <form
            id="form"
            onSubmit={handleSubmit}
            css={theme => ({
              display: "flex",
              flexDirection: "column",
              marginTop: theme.spacing[1],
              "& input, & textarea": {
                background: "none",
                border: "none",
                borderBottom: "2px solid rgba(39, 40, 61, .2)",
                fontSize: theme.copySizes[1],
                fontFamily: theme.fonts.body,
                marginBottom: theme.spacing[1],
                outline: "none",
                transition: ".3s ease",
                "&:focus": {
                  borderBottom: `2px solid ${theme.colors.coral}`
                }
              }
            })}
          >
            <input name="your-name" placeholder="Name" type="text" required />
            <input
              name="your-email"
              placeholder="Email"
              type="text"
              type="email"
              required
            />
            <textarea
              name="your-message"
              placeholder="Message"
              required
              css={{ height: 200 }}
            />
            <button
              css={theme => ({
                background: "none",
                border: `1px solid ${theme.colors.coral}`,
                color: theme.colors.coral,
                fontSize: theme.copySizes[1],
                margin: "0 auto",
                cursor: "pointer",
                padding: "18px 20px",
                width: "40%"
              })}
              type="submit"
            >
              {props.buttonText}
            </button>
          </form>
        )}
        {submitted && (
          <p css={{ marginTop: "50px" }}>
            Your message was successfully sent. We can’t wait to read it, and
            will be in contact with you shortly!
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
