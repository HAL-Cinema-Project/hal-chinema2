import { UserMock } from "../../../mock/types/user";

type ProfileCardProps = {
  user: UserMock;
};

export const ProfileCard = (props: ProfileCardProps) => {
  const { user } = props;
  return (
    <div
      style={{ padding: "20px", backgroundColor: "#333", borderRadius: "10px" }}
    >
      <p
        style={{
          fontSize: "2rem",
          color: "#fff",
        }}
      >
        {user && user?.firstName}
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#fff",
        }}
      >
        {user && user?.lastName}
      </p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#555",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        編集
      </button>
    </div>
  );
};
