import { Suspense } from "react";
import axios from "axios";

import CategorySkeleton from "@/components/skeleton/category-skeleton";
import SectionContent from "@/components/section-content";

const Agriculture = async () => {
  const postResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/getAgriculture.php`
  );

  const posts: any = Object.values(postResponse.data).flatMap((posts) => posts);

  return (
    <Suspense fallback={<CategorySkeleton />}>
      <SectionContent title="Agriculture" posts={posts} />
    </Suspense>
  );
};

export default Agriculture;
