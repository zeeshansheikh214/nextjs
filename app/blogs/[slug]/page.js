export default function BlogPost({ params }) {
    return (
      <div>
        <h1>My Post: {params.slug}</h1>
      </div>
    );
  }