import Image from "next/image";

export const UnOptimizedImage = (props: any) => {
  return <Image alt="" {...props} unoptimized={true} />;
};
