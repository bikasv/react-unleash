import { useGetUsersQuery } from '@/store/usersSlice';

import {
  Card,
  Container,
  StyledName,
  StyledUsername,
} from './Users.styled';

export function Users() {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return <div>Error fetching users</div>;
  }

  return (
    <Container>
      {data?.map((user) => (
        <Card key={user.id}>
          <StyledName>
            {user.name}
            <StyledUsername>({user.username})</StyledUsername>
          </StyledName>

          <p>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>

          <p>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </p>
        </Card>
      ))}
    </Container>
  );
}
