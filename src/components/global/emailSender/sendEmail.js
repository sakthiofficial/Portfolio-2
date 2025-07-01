import sgMail from "@sendgrid/mail";

function userMailOption({ name, email, feedback }) {
  return {
    from: "Portfolio Form Data <sakthivel.g@alliancezone.in>",
    to: "sakthiroky123@gmail.com",
    subject: "Message from Persnoal Website",
    html: `
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
            
                background-color: #f4f4f4;
              }
              .container {
                max-width: 600px;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h1 {
                color: #000;
              }
              p {
                color: #555;
                line-height: 1.5;
              }
              a {
                color: #F9B800; /* Secondary color */
              }
            </style>
          </head>
          <body>
            <div class="container">
  <p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>Feedback: ${feedback}</p>

             
            </div>
          </body>
        </html>
      `,
  };
}
export default async function sendMail(userDetails) {
  const mailOptions = userMailOption(userDetails);
  try {
    sgMail.setApiKey(
      "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"
    );
    const result = await sgMail.send(mailOptions);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
}
