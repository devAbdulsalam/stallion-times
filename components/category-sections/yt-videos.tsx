"use client";

import axios from "axios";
import SectionTitle from "../section-title";
import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const YoutubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            channelId: "UCw7FSXrklIHlFo5PRHx1zbA",
            maxResults: 6,
            order: "date",
            type: "video",
            key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
          },
        }
      );
      setVideos(response.data.items);
    };

    fetchVideos();
  }, []);

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="mx-auto">
      <SectionTitle title={"Youtube"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        {videos.map((video) => (
          <div key={video.id.videoId} className="p-2 w-full">
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-16 aspect-h-9">
                <YouTube
                  videoId={video.id.videoId}
                  opts={opts}
                  className="w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base md:text-lg font-semibold">{video.snippet.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
