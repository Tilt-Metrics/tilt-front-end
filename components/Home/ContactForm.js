/** @jsx jsx */
import { jsx } from "@emotion/core";

function handleSubmit(e) {
  const formData = document.querySelector("#form");
  e.preventDefault();
  console.log(e);
  fetch(
    "https://admin.tiltmetrics.com/wp-json/contact-form-7/v1/contact-forms/76/feedback/",
    {
      method: "POST",
      body: formData
    }
  )
    .then(e => {
      console.log(e);
    })
    .catch(err => console.log(err));
}

function ContactForm(props) {
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
      </div>
    </div>
  );
}

export default ContactForm;
