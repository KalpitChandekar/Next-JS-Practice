const page = ({ params }: any) => {
  return (
    <div>
      <h1>Review {params.reviewId} for Product {params.productId} </h1>
    </div>
  );
};
export default page;
