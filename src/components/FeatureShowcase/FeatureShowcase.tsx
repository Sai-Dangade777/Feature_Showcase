import React, { useState, useEffect, useRef } from 'react';
import { features } from './data';
import './FeatureShowcase.css';

const FeatureShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, features.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const showcaseNode = showcaseRef.current;
    if (!showcaseNode) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(showcaseNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeFeature = features[activeIndex];

  return (
    <div className="feature-showcase-wrapper">
      <div ref={showcaseRef} className="feature-showcase">
        <div className="showcase-container">
          <div className="showcase-left">
            <div className="text-block">
              <p className="feature-id">{activeFeature.featureId}</p>
              <h2 className="feature-heading">{activeFeature.title}</h2>
              <ul className="feature-bullets">
                {activeFeature.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="nav-inline">
                <button className="nav-arrow" onClick={handlePrev} disabled={activeIndex === 0}>
                  &larr;
                </button>
                <div className="divider"></div>
                <button className="nav-arrow" onClick={handleNext} disabled={activeIndex === features.length - 1}>
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className="phone-frame">
            <div className="phone-screen">
              <div className="gradient-bg" style={{ background: activeFeature.gradient }}></div>
            </div>
          </div>

          <div className="showcase-right">
            <h3 className="panel-heading">Feature Showcase</h3>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li
                  key={feature.id}
                  className={`feature-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div className="feature-marker"></div>
                  <div className="feature-content">
                    <p>{feature.featureName}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div style={{height: '100vh'}}></div>
    </div>
  );
};

export default FeatureShowcase;
