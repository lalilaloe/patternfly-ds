export default {
  displayName: "fileupload",
  name: "fileupload",
  homepage:
    "https://www.patternfly.org/v4//documentation/core/components/fileupload/",
};

export const variants = [
  {
    displayName: "basic-file-upload",
    picture: {
      src: "./pictures/fileupload/basic-file-upload.png",
      width: 396,
      height: 197,
    },
    snippet: {
      html: `<div class="pf-c-file-upload">
  <div class="pf-c-file-upload__file-select">
    <div class="pf-c-input-group">
      <input class="pf-c-form-control" id="basic-file-upload-text-input" name="basic-file-upload-text-input" aria-label="Drag a file here or browse to upload" readonly placeholder="Drag a file here or browse to upload" aria-describedby="basic-file-upload-browse" />
      <button class="pf-c-button pf-m-control" type="button" id="basic-file-upload-browse">Browse...</button>
      <button class="pf-c-button pf-m-control" type="button" disabled>Clear</button>
    </div>
  </div>
  <div class="pf-c-file-upload__file-details">
    <textarea class="pf-c-form-control pf-m-resize-vertical" id="basic-file-upload-file-details" name="basic-file-upload-file-details" aria-label="Empty text area"></textarea>
  </div>
</div>`,
    },
  },
  {
    displayName: "drag-file-hover-component",
    picture: {
      src: "./pictures/fileupload/drag-file-hover-component.png",
      width: 396,
      height: 197,
    },
    snippet: {
      html: `<div class="pf-c-file-upload pf-m-drag-hover">
  <div class="pf-c-file-upload__file-select">
    <div class="pf-c-input-group">
      <input class="pf-c-form-control" id="drag-file-hover-component-text-input" name="drag-file-hover-component-text-input" aria-label="Drag a file here or browse to upload" readonly placeholder="Drag a file here or browse to upload" aria-describedby="drag-file-hover-component-browse" />
      <button class="pf-c-button pf-m-control" type="button" id="drag-file-hover-component-browse">Browse...</button>
      <button class="pf-c-button pf-m-control" type="button" disabled>Clear</button>
    </div>
  </div>
  <div class="pf-c-file-upload__file-details">
    <textarea class="pf-c-form-control pf-m-resize-vertical" id="drag-file-hover-component-file-details" name="drag-file-hover-component-file-details" aria-label="Empty text area"></textarea>
  </div>
</div>`,
    },
  },
  {
    displayName: "file-upload-in-form-with-error",
    picture: {
      src: "./pictures/fileupload/file-upload-in-form-with-error.png",
      width: 436,
      height: 222,
    },
    snippet: {
      html: `<form novalidate class="pf-c-form">
  <div class="pf-c-form__group">
    <div class="pf-c-file-upload">
      <div class="pf-c-file-upload__file-select">
        <div class="pf-c-input-group">
          <input class="pf-c-form-control" id="file-upload-error-text-input" name="file-upload-error-text-input" aria-label="File upload error" required value="Sample.png" aria-describedby="file-upload-error-browse" />
          <button class="pf-c-button pf-m-control" type="button" id="file-upload-error-browse">Browse...</button>
          <button class="pf-c-button pf-m-control" type="button">Clear</button>
        </div>
      </div>
      <div class="pf-c-file-upload__file-details" aria-describedby="textAreaHelperText1" aria-invalid="true">
        <textarea class="pf-c-form-control pf-m-resize-vertical" id="file-upload-error-file-details" name="file-upload-error-file-details" aria-label="Empty text area" aria-describedby="textAreaHelperText1" aria-invalid="true"></textarea>
      </div>
    </div>
    <p class="pf-c-form__helper-text pf-m-error" id="textAreaHelperText1" aria-live="polite">We don't support this file type. Try again with a different file type.</p>
  </div>
</form>`,
    },
  },
  {
    displayName: "file-upload-loading",
    picture: {
      src: "./pictures/fileupload/file-upload-loading.png",
      width: 396,
      height: 197,
    },
    snippet: {
      html: `<div class="pf-c-file-upload pf-m-loading">
  <div class="pf-c-file-upload__file-select">
    <div class="pf-c-input-group">
      <input class="pf-c-form-control" id="file-upload-loading-text-input" name="file-upload-loading-text-input" aria-label="Read only filename" readonly name="file-upload-loading" value="Sample.png" aria-describedby="file-upload-loading-browse" />
      <button class="pf-c-button pf-m-control" type="button" disabled id="file-upload-loading-browse">Browse...</button>
      <button class="pf-c-button pf-m-control" type="button">Clear</button>
    </div>
  </div>
  <div class="pf-c-file-upload__file-details">
    <textarea class="pf-c-form-control pf-m-resize-vertical" id="file-upload-loading-file-details" name="file-upload-loading-file-details" aria-label="Text area">Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc</textarea>
    <div class="pf-c-file-upload__file-details-spinner">
      <span class="pf-c-spinner pf-m-lg" role="progressbar" aria-valuetext="Loading...">
        <span class="pf-c-spinner__clipper"></span>
        <span class="pf-c-spinner__lead-ball"></span>
        <span class="pf-c-spinner__tail-ball"></span>
      </span>
    </div>
  </div>
</div>`,
    },
  },
  {
    displayName: "upload-complete-editable",
    picture: {
      src: "./pictures/fileupload/upload-complete-editable.png",
      width: 396,
      height: 197,
    },
    snippet: {
      html: `<div class="pf-c-file-upload">
  <div class="pf-c-file-upload__file-select">
    <div class="pf-c-input-group">
      <input class="pf-c-form-control" id="drop-file-text-input" name="drop-file-text-input" aria-label="Read only filename" readonly value="Sample.txt" aria-describedby="drop-file-browse" />
      <button class="pf-c-button pf-m-control" type="button" id="drop-file-browse">Browse...</button>
      <button class="pf-c-button pf-m-control" type="button">Clear</button>
    </div>
  </div>
  <div class="pf-c-file-upload__file-details">
    <textarea class="pf-c-form-control pf-m-resize-vertical" id="drop-file-file-details" name="drop-file-file-details" aria-label="Text area">Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc</textarea>
  </div>
</div>`,
    },
  },
  {
    displayName: "upload-complete-non-editable",
    picture: {
      src: "./pictures/fileupload/upload-complete-non-editable.png",
      width: 396,
      height: 197,
    },
    snippet: {
      html: `<div class="pf-c-file-upload">
  <div class="pf-c-file-upload__file-select">
    <div class="pf-c-input-group">
      <input class="pf-c-form-control" id="browsed-file-upload-complete-text-input" name="browsed-file-upload-complete-text-input" aria-label="Read only filename" readonly value="Read only filename" aria-describedby="browsed-file-upload-complete-browse" />
      <button class="pf-c-button pf-m-control" type="button" id="browsed-file-upload-complete-browse">Browse...</button>
      <button class="pf-c-button pf-m-control" type="button">Clear</button>
    </div>
  </div>
  <div class="pf-c-file-upload__file-details" readonly>
    <textarea class="pf-c-form-control pf-m-resize-vertical" id="browsed-file-upload-complete-file-details" name="browsed-file-upload-complete-file-details" aria-label="Text area" readonly>Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc</textarea>
  </div>
</div>`,
    },
  },
];
