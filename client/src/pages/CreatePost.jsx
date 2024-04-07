import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TextInput, Select, FileInput, Button } from "flowbite-react";

const CreatePost = () => {
  return (
    <div className="p3 max-w-3xl mx-auto min-h-screen4">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select your category</option>
            <option value="category-1">Category 1</option>
            <option value="category-2">Category 2</option>
            <option value="category-3">Category 3</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button type="button" gradientDuoTone="greenToBlue">
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write your thoughts"
          className="h-72 mb-12"
        />
        <Button
          className="mb-6"
          type="submit"
          gradientDuoTone="greenToBlue"
          outline
        >
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
