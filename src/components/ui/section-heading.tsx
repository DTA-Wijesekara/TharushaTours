export function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}
