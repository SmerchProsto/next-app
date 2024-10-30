import React from "react";

interface YoutubeEmbedProps extends React.IframeHTMLAttributes<HTMLIFrameElement>  {
    videoUrl: string;
}
export default function YoutubeEmbed({ videoUrl, ...rest  }: YoutubeEmbedProps) {
    return (
        <iframe
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            {...rest}
        ></iframe>
    )
}