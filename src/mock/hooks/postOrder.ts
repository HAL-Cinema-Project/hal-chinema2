import { apiPost } from "../../util/apiClient";
import { CreateOrder } from "../types/orders";
export const PostOrder = async (req: CreateOrder) => {
  const res = apiPost("http://localhost:8012/orders", req);
  console.log(req);

  return res;
};
