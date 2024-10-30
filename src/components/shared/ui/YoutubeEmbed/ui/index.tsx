import React from "react";
import styled from "styled-components";

interface YoutubeEmbedProps extends React.IframeHTMLAttributes<HTMLIFrameElement>  {
    videoUrl: string;
}

const YoutubePlayer = styled.iframe`
    background: gray;
`
export default function YoutubeEmbed({ videoUrl, ...rest  }: YoutubeEmbedProps) {
    // Извлекаем ID видео из URL и преобразуем в формат для embed
    const videoId = new URL(videoUrl).searchParams.get("v");
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    return (
        <YoutubePlayer
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            {...rest}
        ></YoutubePlayer>
    )
}