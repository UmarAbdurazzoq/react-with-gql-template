import './App.css';
import { gql, useQuery } from '@apollo/client';

const Users = gql`
  query{
    users{
      data {
        name
        username
        phone
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(Users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
    {data.users.data.map((d) => (
    <li key={d.id}>
      <h1>
        {d.name}
      </h1>
      <p>
        {d.phone}
      </p>
    </li>
   ))}

   </ul>
  )

}
export default App;
