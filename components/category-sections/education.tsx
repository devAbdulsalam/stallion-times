import { Suspense } from "react";
import axios from "axios";

import CategorySkeleton from "@/components/skeleton/category-skeleton";
import SectionContent from "@/components/section-content";

const Education = async () => {
  const postResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/getEducation.php`
  );

  const posts: any = Object.values(postResponse.data).flatMap((posts) => posts);

  return (
    <Suspense fallback={<CategorySkeleton />}>
      <SectionContent title="Education" posts={posts} />
    </Suspense>
  );
};

export default Education;
