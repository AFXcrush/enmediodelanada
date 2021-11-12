export default function BlogLinks({ title, desc, clase }) {
  return (
    <div className={`blog-sector ${clase}`}>
      <span className="title">{title}</span>
      <span className="description">{desc}</span>
    </div>
  );
}
