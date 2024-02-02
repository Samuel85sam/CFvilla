import React from 'react';

// Composant fonctionnel PostsList
const PostsList = ({ posts }) => {
  return (
    <ul>
      {/* Utilisation de la méthode map() pour itérer à travers chaque poste */}
      {posts.map((post, index) => (
        <li key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

// Exemple d'utilisation du composant PostsList
const App = () => {
  // Tableau de posts
  const posts = [
    { id: 1, title: 'Premier Post', body: 'Contenu du premier post...' },
    { id: 2, title: 'Deuxième Post', body: 'Contenu du deuxième post...' },
    { id: 3, title: 'Troisième Post', body: 'Contenu du troisième post...' },
  ];

  return (
    <div>
      {/* Utilisation du composant PostsList avec les données posts */}
      <PostsList posts={posts} />
    </div>
  );
};

export default App;
