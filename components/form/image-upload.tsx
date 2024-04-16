import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ChangeEvent, useRef, useState } from "react";
import { Avatar, Button } from "../common";
import { Plus } from "lucide-react";
import Image from "next/image";

const getBase64 = (file: any): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve) => {
    let baseURL: string | ArrayBuffer | null = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  // FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer();
  // Add newly uploaded images
  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  );
  const file = dataTransfer.files[0];
  const displayUrl = URL.createObjectURL(event.target.files![0]);
  return { file, displayUrl };
}

interface PropsT {
  form: any;
  className?: string;
  label: string;
  name: string;
  fileList?: string[];
  multiple?: boolean;
}

export function ImageUpload(props: PropsT) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [previewFileList, setPreviewFileList] = useState(props.fileList || []);
  const [base64List, setBase64List] = useState<(string | ArrayBuffer | null)[]>(
    []
  );

  const handleUpload = () => {
    if (hiddenFileInput.current !== null) {
      hiddenFileInput.current.click();
    }
  };

  return (
    <div className={props.className ?? ""}>
      <FormLabel>{props?.label || ""}</FormLabel>
      <div className="my-3 flex flex-wrap items-center space-x-3">
        {previewFileList?.length &&
          previewFileList?.map((imagePath) => (
            <div
              key={imagePath}
              className="rounded-lg border border-dashed border-gray-700 p-2 flex items-center justify-center w-[100px] h-[100px]"
            >
              <div className="h-full w-full flex items-center justify-center">
                <Image width={300} height={300} alt='' src={imagePath}  />
              </div>
            </div>
          ))}
        <div className="rounded-lg border border-dashed border-gray-700 p-4 flex items-center justify-center w-[100px] h-[100px]">
          <div className="h-full w-full flex items-center justify-center">
            <Button size="icon" onClick={handleUpload}>
              <Plus />
            </Button>
          </div>
        </div>
      </div>
      <FormField
        control={props.form.control}
        name={props.name}
        render={({ field: { onChange, value, ...rest } }) => (
          <>
            <FormItem>
              <FormControl>
                <Input
                  ref={hiddenFileInput}
                  className="hidden"
                  type="file"
                  onChange={(event) => {
                    const { file, displayUrl } = getImageData(event);
                    getBase64(file)
                      .then((base64: string | ArrayBuffer | null) => {
                        setPreviewFileList([...previewFileList, displayUrl]);
                        setBase64List([...base64List, base64]);
                        onChange([...base64List, base64]);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                />
              </FormControl>
              <FormDescription>File accept: png, jpg</FormDescription>
              <FormMessage />
            </FormItem>
          </>
        )}
      />
    </div>
  );
}
