import { motion } from "framer-motion";

const SectionHeader = ({ label, title, description, align = "center" }) => {
  const isCenter = align === "center";

  return (
    <motion.div
      className={`mb-14 md:mb-16 ${isCenter ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
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
    </motion.div>
  );
};

export default SectionHeader;
