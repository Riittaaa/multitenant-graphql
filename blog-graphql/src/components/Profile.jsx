import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROFILE } from "../GraphQL/Queries";
import { CREATEPROFILE } from "../GraphQL/Mutations";

function Profile() {
  const { error, loading, data } = useQuery(GET_PROFILE);
  const [profile, setProfile] = useState(null);

  const [createProfile, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(CREATEPROFILE);

  useEffect(() => {
    if (data && data.profile) {
      setProfile(data.profile);
    } else if (!loading && !data) {
      createProfile({
        variables: {
          input: {
            firstName: "DefaultFirstName",
            lastName: "DefaultLastName",
            email: "default@example.com",
            address: "Default Address",
          },
        },
      });
    }
  }, [data, loading, createProfile]);

  useEffect(() => {
    if (mutationData && mutationData.createProfile) {
      setProfile(mutationData.createProfile.profile);
    }
  }, [mutationData]);

  if (loading || mutationLoading) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error: {error?.message || mutationError?.message}</p>;

  return (
    <>
      <h1>Profile</h1>
      {profile ? (
        <>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Address: {profile.address}</p>
          <p>Email: {profile.email}</p>
        </>
      ) : (
        <p>No profile data available.</p>
      )}
    </>
  );
}

export default Profile;
