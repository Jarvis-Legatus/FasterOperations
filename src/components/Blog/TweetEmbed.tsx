"use client";

import React, { useEffect } from 'react';

interface TweetEmbedProps {
  tweetId: string;
}

const TweetEmbed: React.FC<TweetEmbedProps> = ({ tweetId }) => {
  useEffect(() => {
    // Ensure Twitter's widgets script is loaded
    const scriptId = 'twitter-widgets-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }

    // Trigger rendering for any new tweets added to the DOM
    // Check if twttr object is available and call load
    if (window.twttr && window.twttr.widgets) {
       window.twttr.widgets.load();
    }

    // Basic cleanup function (optional, as widgets.js handles multiple loads)
    // return () => {
    //   // Potentially remove script if it's the last instance, but generally safe to leave
    // };
  }, [tweetId]); // Dependency array includes tweetId to potentially re-trigger if needed

  if (!tweetId) {
    return <p>Error: Tweet ID is missing.</p>;
  }

  // Note: data-theme can be 'light' or 'dark'
  // data-dnt="true" helps with privacy (Do Not Track)
  return (
    <div className="tweet-embed my-4 flex justify-center"> {/* Added flex justify-center */}
      <blockquote className="twitter-tweet" data-lang="en" data-dnt="true" data-theme="light">
         {/* The content of the blockquote is usually ignored once widgets.js processes it */}
        <p lang="en" dir="ltr">Loading Tweet...</p>
        &mdash; Loading Author <a href={`https://twitter.com/x/status/${tweetId}`}>Tweet Link</a>
      </blockquote>
    </div>
  );
};

// Declare twttr on window type for TypeScript
declare global {
    interface Window {
        twttr?: any;
    }
}


export default TweetEmbed;