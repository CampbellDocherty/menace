import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import Devil from '../../assets/devil.png';
import { Cell, Heading, Multiplier, Table } from './styles';
import { UserDetails, getUsers } from '../../firebase/database';
import { ErrorText } from '../Captcha/styles';

export const Leaderboard = () => {
  const [users, setUsers] = useState<Record<string, UserDetails> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const populateUsers = async () => {
      const response = await getUsers();
      if (response.isError) {
        return setError('Oops! Something went wrong, try to refresh 🤷‍♂️');
      }
      if (!response.users) {
        return setUsers(null);
      }

      setUsers(response.users);
    };

    populateUsers();
  }, []);

  const normalizedUsers = useMemo(() => {
    if (!users) return null;
    const keys = Object.keys(users);
    const flattenedUsers = keys.map((id) => {
      return { id, ...users[id] };
    });
    const sortedArray = flattenedUsers.slice().sort((a, b) => {
      return b.result - a.result;
    });
    return sortedArray;
  }, [users]);

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <Heading>Rank</Heading>
          <Heading>Name</Heading>
          <Heading>Score</Heading>
          <Heading>Multiplier</Heading>
          <Heading>Submitted</Heading>
        </tr>
      </thead>
      <tbody>
        {normalizedUsers &&
          normalizedUsers.map((user, index) => {
            const rank = index + 1;
            const { name, multiplier, result, completed } = user;
            return (
              <tr key={user.id}>
                <Cell>#{rank}</Cell>
                <Cell>{name}</Cell>
                <Cell>{result}%</Cell>
                <Cell>
                  <Multiplier>
                    <p>x{multiplier}</p>
                    <img src={Devil} alt="Abolaji as a devil" />
                  </Multiplier>
                </Cell>
                <Cell>{format(completed, 'dd MMM yy')}</Cell>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
