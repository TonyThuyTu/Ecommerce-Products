"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { cleanHTMLForSEO, getTinyMCEConfig } from "@/ultis/tinymeConfig";

// Load TinyMCE Editor only on client
const Editor = dynamic(() => import("@tinymce/tinymce-react").then((m) => m.Editor), {
  ssr: false,
});

const ProductDescriptionEditor = ({
  initialValue = "",
  onContentChange,
  height = 400,
  toolbar = "product",
  apiKey = "ugol5zkoya8hjpj58cvcxpe5rpx9h887uxbe6hfrijrdn360",
  // readonly = false,
  className = "",
}) => {
  const [content, setContent] = useState(initialValue);

  const handleEditorChange = (content) => {
    // Clean HTML for better SEO
    const cleanedContent = cleanHTMLForSEO(content);
    setContent(cleanedContent);

    if (onContentChange) {
      onContentChange(cleanedContent);
    }
  };

  const editorConfig = getTinyMCEConfig({
    height,
    toolbar,
    apiKey,
    // readonly: false,
  });

  return (
    <div className={`w-full ${className}`}>
      <Editor
        apiKey={apiKey}
        value={content}
        onEditorChange={handleEditorChange}
        init={editorConfig}
      />

      {/* Custom CSS for product description styling */}
      <style jsx global>{`
        .feature-list {
          padding-left: 0;
        }

        .feature-list li {
          list-style: none;
          padding: 8px 0;
          position: relative;
          padding-left: 24px;
        }

        .feature-list li:before {
          content: "✓";
          color: #28a745;
          position: absolute;
          left: 0;
          font-weight: bold;
          font-size: 1.2em;
        }

        @media (max-width: 768px) {
          .tox-tinymce {
            min-height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDescriptionEditor;
