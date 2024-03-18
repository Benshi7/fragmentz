import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://fragmentz-fragmentzdev.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA3MTk4NDYsImlkIjoiZjU0YTQyZGUtMTc2MC00ZjM1LThmNGYtOGM1MjhlMzhjOTBhIn0.iEDnIQmUQ-Ko1i9vBugOWjkmvZXGj5VdQhiBHNKxTKQJSpi_PFLZ-WUrgy-tvAYUorggM-ZEKGHGFsfla63tDw",
});

