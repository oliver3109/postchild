
interface PostChildRequest {
  method: string;
  url: string;
  contentType:
    | "无"
    | "application/json"
    | "application/ld+json"
    | "application/hal+json"
    | "application/vnd.api+json"
    | "application/xml"
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/html"
    | "text/plain";
  headers?: KeyValueList;
  queryParams?: KeyValueList;
  body?: any;
  formData?: RequestMultipartFormDataList;
}

interface KeyValue {
  key: string;
  value?: string;
}

type KeyValueList = Array<KeyValue>;

interface RequestMultipartFormData extends KeyValue {
  valueType: "string" | "file";
  file?: File;
}

type RequestMultipartFormDataList = Array<RequestMultipartFormData>;
