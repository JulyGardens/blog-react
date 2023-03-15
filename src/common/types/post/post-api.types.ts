export interface CreatePostOptionsAPI {
  title: string;
  body: string;
}

export interface UpdatePostOptionsAPI {
  id: number;
  post: UpdatePostDataAPI;
  fromSinglePage?: boolean;
}

export interface UpdatePostDataAPI {
  title: string;
  body: string;
}
