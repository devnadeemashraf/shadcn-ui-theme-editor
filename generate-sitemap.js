import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

(async () => {
  // Define the hostname for your sitemap
  const hostname = "https://shadcnui-theme-editor.nadeemashraf.dev";

  // Define your pages
  const pages = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    // Add other pages here
  ];

  // Create a readable stream for your pages
  const stream = new Readable({
    objectMode: true,
    read() {
      pages.forEach((page) => this.push(page));
      this.push(null);
    },
  });

  // Create a stream to write to the sitemap file
  const sitemap = new SitemapStream({ hostname });

  // Pipe the readable stream into the SitemapStream and then into a writable stream
  try {
    const data = await streamToPromise(stream.pipe(sitemap)).then((data) =>
      data.toString()
    );
    createWriteStream("./public/sitemap.xml").write(data);
    console.log("Sitemap successfully created!");
  } catch (error) {
    console.error("Error creating sitemap:", error);
  }
})();
