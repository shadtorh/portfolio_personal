import Reveal from "./Reveal";

const SectionHeader = ({ label, title, description, align = "center" }) => {
  const isCenter = align === "center";

  return (
    <Reveal
      className={`mb-14 md:mb-16 ${isCenter ? "text-center" : "text-left"}`}
    >
      {label && (
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={`text-base-content/65 text-lg leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeader;
