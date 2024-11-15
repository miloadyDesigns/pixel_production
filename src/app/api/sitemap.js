export default async function handler(req, res) {
    res.setHeader("Content-Type", "application/xml");
    const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://yourdomain.com/</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>https://yourdomain.com/about</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.8</priority>
        </url>
        <!-- Add dynamic URLs or loop through your pages here -->
      </urlset>
    `;
    res.end(xml);
  }
  