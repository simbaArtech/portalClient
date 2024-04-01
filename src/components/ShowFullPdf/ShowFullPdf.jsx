import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./ShowFullPdf.css";

const ShowFullPdf = ({ pdfDetails }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-wrapper">
      <div className="pdf-document">
        <Document
          file={pdfDetails.media}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading...</div>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              width={800}
            />
          ))}
        </Document>
      </div>
      <div className="background-shadow" />
    </div>
  );
};

export default ShowFullPdf;
