import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.PEXELS_API_KEY;
    if (!apiKey) {
      console.warn("PEXELS_API_KEY is not defined in environment variables. Using fallback video URL.");
      return NextResponse.json({ 
        videoUrl: "https://videos.pexels.com/video-files/7683855/7683855-hd_1920_1080_30fps.mp4" 
      });
    }

    const res = await fetch("https://api.pexels.com/videos/search?query=college+campus&per_page=1&orientation=landscape", {
      headers: {
        Authorization: apiKey
      },
      next: { revalidate: 3600 } // Cache the response for 1 hour to save API quota
    });

    if (!res.ok) {
      throw new Error("Failed to fetch from Pexels API");
    }

    const data = await res.json();
    const video = data.videos?.[0];
    if (!video) {
      throw new Error("No videos found in Pexels response");
    }

    const videoFile = video.video_files.find((f: any) => f.width === 1920) || 
                      video.video_files.find((f: any) => f.width === 1280) || 
                      video.video_files[0];

    return NextResponse.json({ videoUrl: videoFile.link });
  } catch (err: any) {
    console.error("Pexels video fetch error:", err);
    // Return fallback video link if anything fails
    return NextResponse.json({ 
      videoUrl: "https://videos.pexels.com/video-files/7683855/7683855-hd_1920_1080_30fps.mp4" 
    });
  }
}
