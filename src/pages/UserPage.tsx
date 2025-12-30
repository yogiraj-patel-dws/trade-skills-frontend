import React from "react";
import { useUsers, useCreateUser } from "../services/user/user.service";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../react-query/queryKeys";
import type { User } from "../services/user/user.types";

const UserPage: React.FC = () => {
  const { data: users, isLoading, isError, error } = useUsers();
  const createUserMutation = useCreateUser();
  const queryClient = useQueryClient();

  const handleCreateUser = () => {
    createUserMutation.mutate(
      { name: "New User", email: `newuser${Date.now()}@example.com` },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: queryKeys.user.all });
        },
      }
    );
  };

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        onClick={handleCreateUser}
        disabled={createUserMutation.isPending}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:opacity-50"
      >
        {createUserMutation.isPending ? "Creating..." : "Create User"}
      </button>

      <ul className="space-y-2">
        {users?.data?.map((user: User) => (
          <li key={user.id} className="border p-2 rounded shadow-sm">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
