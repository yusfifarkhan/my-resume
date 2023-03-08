import React, { useEffect, useState } from "react";
import GalleryContainer from "./gallery/GalleryContainer";
import GalleryHeader from "./gallery/GalleryHeader";
import GalleryMenu from "./gallery/GalleryMenu";

const Gallery = ({ data }) => {
  const [key, setKey] = useState("all");
  const [itemList, setItemList] = useState(data);

  const onClickSetKey = (param) => {
    setKey(param);
  };

  useEffect(() => {
    if (key !== "all") {
      setItemList(
        data.filter((item) => {
          return item.type === key;
        })
      );
    } else {
      return setItemList(data);
    }
  }, [key]);

  return (
    <div
      id="gallery"
      className="flex flex-col gap-8 bg-slate-200 px-10 pt-28 pb-20 dark:bg-slate-500 lg:px-32"
    >
      <GalleryHeader />
      <GalleryMenu
        cbSetKey={onClickSetKey}
        total={itemList.length + " from " + data.length}
      />
      <GalleryContainer data={itemList} />
    </div>
  );
};

export default Gallery;
