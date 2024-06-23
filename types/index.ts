type Post = {
  id: number;
  post_id: string;
  title: string;
  slug: string;
  category: string;
  cat_id: string;
  category_name: string;
  subCategory: string;
  description: string;
  sub_cat_id: string;
  picture: string;
  added_by: string;
  date: string;
};

type Subcategory = {
  sub_category_id: string;
  sub_category_name: string;
};
type Category = {
  category_id: string;
  category_name: string;
  category_date: string;
  category_status: string;
  subcategories: Subcategory[];
};

type Comments = {
  id: number;
  post_id: string;
  comment: string;
  name: string;
  email: string;
  dates: string;
};
