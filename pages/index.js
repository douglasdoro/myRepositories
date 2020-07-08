import React from 'react'; 

export async function getStaticProps() {

  const repositories = await fetch('https://api.github.com/users/douglasdoro/repos')
  .then( response => response.json()); 

  return {
    props: { repositories }
  }
}


const Home = ({ repositories }) => {
  return (
    <div>
      <h1> My repositories</h1>
      <ul>
        {
          repositories.map(repository => (
          <li key={repository.id }>{repository.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home; 