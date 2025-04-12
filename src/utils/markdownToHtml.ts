import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  // Process custom YouTube syntax
  let processedMarkdown = markdown.replace(
    /::youtube{videoId=([a-zA-Z0-9_-]+)}/g,
    (match, videoId) => {
      return `<div class="youtube-embed" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
        <iframe
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>`;
    }
  );

  // Process custom Twitter syntax
  processedMarkdown = processedMarkdown.replace(
    /::tweet{id=([0-9]+)}/g,
    (match, tweetId) => {
      return `<div class="tweet-embed">
        <blockquote class="twitter-tweet" data-lang="en" data-dnt="true" data-theme="light">
          <a href="https://twitter.com/x/status/${tweetId}"></a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>`;
    }
  );

  // Process the modified Markdown with remark
  const result = await remark()
    .use(html, { allowDangerousHtml: true }) // Allow HTML in the output
    .process(processedMarkdown);
  
  return result.toString();
}
