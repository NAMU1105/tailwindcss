import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import JoditEditor from "jodit-react";

// css
import { ContainerLayout } from "../assets/styles/layout";
import { HeadingFirst } from "../assets/styles/base";

// component
import { Input, Checkbox, Select } from "../components/form/input";
import Button from "../components/form/button";

const AddPost = (props) => {
  //   const editor = useRef(null);
  //   const [content, setContent] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const [config, setConfig] = useState({
    readonly: false,
    enableDragAndDropFileToEditor: true,
  });

  const handleBlurAreaChange = () => {
    console.log("Blur");
  };

  const handleTextAreaChange = (newTextAreaValue) => {
    // console.log("handleTextAreaChange", newTextAreaValue);
    return setTextAreaValue(() => newTextAreaValue);
  };

  return (
    <ContainerLayout>
      <div className="max-w-2xl w-full space-y-8">
        <HeadingFirst align="left" className="border-b-2 border-gray-800 pb-5">
          ADD POST
        </HeadingFirst>
        <Formik
          initialValues={{
            category: "",
            title: "",
            content: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <Form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <Select
                label="title"
                name="title"
                className="rounded-md border border-solid border-gray w-full px-3 py-2"
              >
                <option value="">카테고리를 선택해주세요.</option>
                <option value="">배송</option>
                <option value="">환불/교환</option>
              </Select>
              <Input
                label="title"
                name="title"
                type="text"
                placeholder="제목을 입력해주세요."
                customstyle={
                  "block rounded-md border border-solid border-gray w-full px-3 py-2 "
                }
              />

              <JoditEditor
                config={config}
                onChange={handleTextAreaChange}
                onBlur={handleBlurAreaChange}
                value={textAreaValue}
              />

              {/* 제출 버튼 */}
              <Button
                type="submit"
                disabled={isSubmitting}
                // onClick={submitAuth}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-layout group-hover:text-layout-light"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {isSubmitting ? "Submitting..." : "submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ContainerLayout>
  );
};

export default AddPost;
