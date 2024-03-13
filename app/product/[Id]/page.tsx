const ProductId = ({ params }: { params: { Id: string } }) => {
  return <div>Details about product {params.Id}</div>;
};
export default ProductId;
