import { useEffect, useRef, useState } from "react";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
  ...props
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
