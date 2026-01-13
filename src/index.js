import http from "http";
import animals from "../data/animals.json" with { type: "json" };
import characteristics from "../data/characteristics.json" with { type: "json" };

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const name = `${randomFrom(characteristics)}-${randomFrom(animals)}`;

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    });
    res.end(JSON.stringify({ name }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`RNaaS listening on port ${PORT}`);
});
