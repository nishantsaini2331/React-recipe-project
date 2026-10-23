import { Link } from "react-router";

function RecipeCard({ recipe }) {
  const {
    id,
    prepTimeMinutes,
    cookTimeMinutes,
    image,
    name,
    cuisine,
    difficulty,
    rating,
  } = recipe;
  const totalTime = prepTimeMinutes + cookTimeMinutes;

  return (
    <Link
      to={`/recipe/${id}`}
      className="bg-card border border-border rounded-md hover:border-accent overflow-hidden flex flex-col"
    >
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-lg text-text mb-1">{name}</h3>
        <p className="text-sm text-muted mb-3">
          {cuisine} - {difficulty}
        </p>
        <div className="mt-auto flex justify-between items-center text-sm">
          <span className="flex items-center gap-1 font-medium">
            <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {rating}
          </span>
          <span className="flex items-center gap-1 text-muted">
            <svg
              className="w-4 h-4 stroke-muted fill-none"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {totalTime} mins
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
