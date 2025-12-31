"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface Props {
  description: string;
  setDescription: (data: string) => void;
}

export default function ProductDescriptionEditor({ description, setDescription }: Props) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={description}
      onChange={(event, editor) => setDescription(editor.getData())}
    />
  );
}
