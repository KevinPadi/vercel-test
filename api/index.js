import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f0f0f0;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Express Server on Vercel!</h1>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
