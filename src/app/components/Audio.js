"use client";

import { useEffect, useState } from "react";

export default function AudioDuration({ audioLink, showPlayer = false , showDuration = true}) {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const audio = new window.Audio(audioLink);

    const handleLoaded = () => {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);

      setDuration(`${minutes}:${String(seconds).padStart(2, "0")}`);
    };

    audio.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.src = "";
    };
  }, [audioLink]);

  return (
    <div>
      <p>{showDuration && duration}</p>

      {showPlayer && (
        <audio controls className="w-full">
          <source src={audioLink} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}