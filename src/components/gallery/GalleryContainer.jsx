import React from "react";
import EmptyItem from "./EmptyItem";
import GalerryItem from "./GalleryItem";

const GalleryContainer = ({ data }) => {
  {
    if (data.length !== 0) {
      return (
        <div className="h-content grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
          {data.map((record) => {
            return (
              <GalerryItem
                key={record.id}
                title={record.title}
                image={record.image}
                type={record.type}
                link={record.outlink}
              />
            );
          })}
        </div>
      );
    } else {
      return <EmptyItem />;
    }
  }
};

export default GalleryContainer;
