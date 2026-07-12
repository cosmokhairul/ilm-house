import { Link } from "react-router";

const SectionCard = ({ to, title, excerpt, badge }) => (
  <Link
    to={to}
    className="card bg-base-100 border border-base-300 hover:border-primary transition-colors"
  >
    <div className="card-body p-4">
      {badge && <span className="badge badge-outline badge-sm self-start">{badge}</span>}
      <h3 className="card-title font-heading text-lg">{title}</h3>
      {excerpt && <p className="text-base-content/70 line-clamp-2 text-sm">{excerpt}</p>}
    </div>
  </Link>
);

export default SectionCard;
