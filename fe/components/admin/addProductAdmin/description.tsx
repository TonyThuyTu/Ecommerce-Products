"use client";

import { useEffect, useState } from "react";

export default function ProductDescriptionEditor({
  onChange,
  data,
}: {
  onChange?: (html: string) => void;
  data?: string;
}) {
  const [Editor, setEditor] = useState<{
    CKEditor: any;
    ClassicEditor: any;
    editorConfig: any;
  } | null>(null);

  useEffect(() => {
    Promise.all([
      import("@ckeditor/ckeditor5-react"),
      import("ckeditor5"),
    ]).then(([{ CKEditor }, CKE]) => {
      const {
        ClassicEditor,
        Bold,
        Essentials,
        Italic,
        Paragraph,
        Heading,
        Link,
        List,
        BlockQuote,
        Undo,
      } = CKE;

      setEditor({
        CKEditor,
        ClassicEditor,
        editorConfig: {
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "blockQuote",
              "|",
              "undo",
              "redo",
            ],
          },
          plugins: [
            Bold,
            Essentials,
            Italic,
            Paragraph,
            Heading,
            Link,
            List,
            BlockQuote,
            Undo,
          ],
          // Add GPL license key to remove warning
          licenseKey: 'GPL',
        },
      });
    });
  }, []);

  if (!Editor) {
    return (
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Description
        </label>
        <div className="border border-gray-300 rounded-lg p-3 min-h-[200px] bg-gray-50 flex items-center justify-center">
          <span className="text-gray-500">Loading editor...</span>
        </div>
      </div>
    );
  }

  const { CKEditor, ClassicEditor, editorConfig } = Editor;

  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Description
      </label>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <CKEditor
          editor={ClassicEditor}
          config={editorConfig}
          data={data || ""}
          onChange={(event: any, editor: any) => {
            const html = editor.getData();
            if (onChange) {
              onChange(html);
            }
          }}
        />
      </div>

      <style jsx global>{`
        .ck-editor__editable {
          min-height: 300px !important;
        }
      `}</style>
    </div>
  );
}