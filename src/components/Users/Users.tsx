import { useFlag, useFlagsStatus } from '@unleash/proxy-client-react';

import { useGetUsersQuery } from '@/store/usersSlice';
import { formUrl } from '@/utilities';

import {
  Card,
  Container,
  StyledName,
  StyledUsername,
} from './Users.styled';

export function Users() {
  const { flagsReady } = useFlagsStatus();
  const isWebRequired = useFlag('web.instead.email');
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading || !flagsReady) {
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
            {isWebRequired
              ? <a href={formUrl(user.website)}>{user.website}</a>
              : <a href={`mailto:${user.email}`}>{user.email}</a>}
          </p>

          <p>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </p>
        </Card>
      ))}
    </Container>
  );
}
