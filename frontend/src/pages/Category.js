// src/pages/Category.js
import React from "react";
import { useParams } from "react-router-dom";
import MotivationGallery from "./MotivationGallery";
// import other categories if needed

export default function Category() {
  const { id } = useParams();

  if (id === "motivation") {
    return <MotivationGallery />;
  }

  // Add other categories like birthday, valentines etc.
  return <div style={{ padding: "20px" }}>Category "{id}" is coming soon!</div>;
}
