"use client";

import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image } from "react-grid-gallery";

export default function ImageViewer({ images }: { images: Image[] }) {
  const [index, setIndex] = useState(-1);
  const slides = images.map(({ src, width, height }) => ({
    src,
    width: width * 4,
    height: height * 4,
  }));

  const handleClick = (index: number, item: Image) => setIndex(index);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
