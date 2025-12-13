import React, { useEffect, useRef } from "react";
import "./Fadewords.css";

function Fadewords({ text, className = "" }) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll(".word");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("show");
              }, index * 150);
            });
            observer.unobserve(ref.current);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const wordsArray =
    typeof text === "string"
      ? text.split(" ")
      : React.Children.toArray(text.props.children);

  return (
    <div ref={ref} className={`fade-word-container ${className}`}>
      {wordsArray.map((word, i) => (
        <span key={i} className="word">
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
}

export default Fadewords;
