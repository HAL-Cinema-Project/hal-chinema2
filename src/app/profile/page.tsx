import { Suspense } from "react";
import { useOrderByUser } from "../../../mock/hooks/useOrderByUser";
import { useUser } from "../../../mock/hooks/useUser";
import { OrderCard } from "./components/OrderCard";
import { ProfileCard } from "./components/ProfileCard";

function Page() {
  const { user } = useUser(1);
  const { orders } = useOrderByUser(1);

  return (
    <div style={{ padding: "20px" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileCard user={user!} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OrderCard orders={orders!} />
      </Suspense>
    </div>
  );
}

export default Page;
