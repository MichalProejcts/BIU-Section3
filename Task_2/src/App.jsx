import "./App.css";

const FILMS = [
  {
    id: 1,
    title: "Oppenheimer",
    year: 2023,
    genre: "Dramat",
    rating: 5,
    watched: true,
  },
  {
    id: 2,
    title: "Dune: Część druga",
    year: 2024,
    genre: "Sci-Fi",
    rating: 4,
    watched: false,
  },
  {
    id: 3,
    title: "Past Lives",
    year: 2023,
    genre: "Romans",
    rating: 5,
    watched: true,
  },
  {
    id: 4,
    title: "Poor Things",
    year: 2023,
    genre: "Komedia",
    rating: 4,
    watched: false,
  },
];

const colors = {
  Dramat: "#6c757d",
  "Sci-Fi": "#0d6efd",
  Romans: "#e83e8c",
  Komedia: "#ffc107",
};

function RatingStars({ rating }) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  return <span className="stars">{stars}</span>;
}

function GenreBadge({ genre }) {
  const bg = colors[genre] ?? "#999";

  return (
    <span style={{ backgroundColor: bg, padding: "3px 6px", color: "white" }}>
      {genre}
    </span>
  );
}

function WatchedBadge({ watched }) {
  if (!watched) { 
    return null;
  }
  return <p className="badge">✓ Obejrzany</p>;
}

function FilmCard({ title, year, genre, rating, watched }) {
  return (
    <div className="film">
      <h3>
        {title} ({year})
      </h3>
      <p>
        Gatunek: <GenreBadge genre={genre} />
      </p>
      <RatingStars rating={rating} />
      <WatchedBadge watched={watched} />
    </div>
  );
}

function FilmList({ title, films }) {
  return (
    <div>
      <h2>{title}</h2>
      {films.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
}

export default function App() {
  const watched = FILMS.filter((f) => f.watched);
  const toWatch = FILMS.filter((f) => !f.watched);

  return (
    <div>
      <h1>🎬 Biblioteka Filmów</h1>
      <FilmList title="Obejrzane" films={watched} />
      <FilmList title="Do obejrzenia" films={toWatch} />
    </div>
  );
}