import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { categories } from "./data";
import { companyResources, generalResources } from "./resources";
import type { Company, Expert } from "./types";

function App() {
  // Initialize state from URL parameters
  const initialParams = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      category: params.get("category"),
      company: params.get("company") as Company | null,
    };
  }, []);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    initialParams.category
  );
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(
    initialParams.company
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategoryId) params.set("category", selectedCategoryId);
    if (selectedCompany) params.set("company", selectedCompany);

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.replaceState({}, "", newUrl);
  }, [selectedCategoryId, selectedCompany]);

  const selectedCategory = categories.find(
    (cat) => cat.id === selectedCategoryId
  );

  const companies: Company[] = [
    "Square",
    "Cash App",
    "Tidal",
    "Afterpay",
    "Bitkey",
    "Proto",
  ];

  const filterExperts = useMemo(
    () => (experts: Expert[]) => {
      if (!selectedCompany) return experts;
      return experts.filter((expert) =>
        expert.companies.includes(selectedCompany)
      );
    },
    [selectedCompany]
  );

  // Determine which resources to show
  const activeResources = useMemo(() => {
    if (selectedCompany && companyResources[selectedCompany]) {
      return companyResources[selectedCompany];
    }
    if (selectedCategoryId) {
      return generalResources;
    }
    return null;
  }, [selectedCompany, selectedCategoryId]);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="header">
        <h1 className="title">🤔 Who to Bother</h1>
        <p className="subtitle">Find the right Block experts on Twitter</p>
        <p className="company-tagline">
          Square • Cash App • Tidal • Afterpay • Bitkey • Proto
        </p>
        <div className="notice" role="alert">
          <strong>⚠️ Please be respectful!</strong> These experts volunteer
          their time. Always try official support channels first for account,
          billing, or urgent issues.
        </div>
        <a
          href="https://github.com/athammer/who-to-bother-block"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="View source code on GitHub (opens in new window)"
        >
          <svg
            className="github-icon"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span>View on GitHub</span>
        </a>
      </header>

      <div
        className="filters-section"
        role="search"
        aria-label="Filter experts"
      >
        <fieldset className="filter-group">
          <legend className="filter-label">Category:</legend>
          <div
            className="categories"
            role="group"
            aria-label="Category filters"
          >
            <button
              type="button"
              className={`category-btn ${
                selectedCategoryId === null ? "active" : ""
              }`}
              onClick={() => setSelectedCategoryId(null)}
              aria-pressed={selectedCategoryId === null}
              aria-label="Show all categories"
            >
              <span className="category-icon" aria-hidden="true">
                📋
              </span>
              <span className="category-name">All</span>
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`category-btn ${
                  selectedCategoryId === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategoryId(category.id)}
                aria-pressed={selectedCategoryId === category.id}
                aria-label={`Filter by ${category.name}`}
              >
                <span className="category-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="filter-group">
          <legend className="filter-label">Company:</legend>
          <div
            className="company-filters"
            role="group"
            aria-label="Company filters"
          >
            <button
              type="button"
              className={`company-btn ${
                selectedCompany === null ? "active" : ""
              }`}
              onClick={() => setSelectedCompany(null)}
              aria-pressed={selectedCompany === null}
              aria-label="Show all companies"
            >
              All Companies
            </button>
            {companies.map((company) => (
              <button
                type="button"
                key={company}
                className={`company-btn ${
                  selectedCompany === company ? "active" : ""
                }`}
                onClick={() => setSelectedCompany(company)}
                aria-pressed={selectedCompany === company}
                aria-label={`Filter by ${company}`}
              >
                {company}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <main id="main-content" className="content">
        {activeResources && (
          <div className="official-resources">
            <h2 className="resources-title">
              <span className="resources-icon" aria-hidden="true">
                🔗
              </span>
              Official Resources
            </h2>
            <div className="resources-grid">
              {activeResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card"
                  aria-label={`${resource.title} - ${resource.description} (opens in new window)`}
                >
                  <span className="resource-card-icon" aria-hidden="true">
                    {resource.icon}
                  </span>
                  <div className="resource-card-content">
                    <h3 className="resource-card-title">{resource.title}</h3>
                    <p className="resource-card-description">
                      {resource.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {selectedCategory ? (
          <>
            <h2 className="category-title">{selectedCategory.name}</h2>
            <div className="subject-areas">
              {selectedCategory.subjectAreas.map((subjectArea, index) => {
                const filteredExperts = filterExperts(subjectArea.experts);
                if (filteredExperts.length === 0) return null;
                return (
                  <div key={index} className="subject-area">
                    <h3 className="subject-area-title">{subjectArea.name}</h3>
                    <div className="experts">
                      {filteredExperts.map((expert, expertIndex) => (
                        <a
                          key={expertIndex}
                          href={`https://twitter.com/${expert.twitterHandle.replace(
                            "@",
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="expert-card"
                          aria-label={`Contact ${expert.name} on Twitter at ${expert.twitterHandle} (opens in new window)`}
                        >
                          <img
                            src={expert.avatarUrl}
                            alt=""
                            className="expert-avatar"
                            role="presentation"
                          />
                          <div className="expert-info">
                            <div className="expert-name">{expert.name}</div>
                            <div className="expert-handle">
                              {expert.twitterHandle}
                            </div>
                            <div className="expert-companies">
                              {expert.companies.map(
                                (company: Company, i: number) => (
                                  <span key={i} className="company-tag">
                                    {company}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <h2 className="category-title">All Experts</h2>
            {categories.map((category) => {
              const hasExperts = category.subjectAreas.some(
                (sa) => filterExperts(sa.experts).length > 0
              );
              if (!hasExperts) return null;
              return (
                <div key={category.id} className="category-section">
                  <h3 className="category-section-title">
                    <span className="category-section-icon">
                      {category.icon}
                    </span>
                    {category.name}
                  </h3>
                  <div className="subject-areas">
                    {category.subjectAreas.map((subjectArea, index) => {
                      const filteredExperts = filterExperts(
                        subjectArea.experts
                      );
                      if (filteredExperts.length === 0) return null;
                      return (
                        <div key={index} className="subject-area">
                          <h3 className="subject-area-title">
                            {subjectArea.name}
                          </h3>
                          <div className="experts">
                            {filteredExperts.map((expert, expertIndex) => (
                              <a
                                key={expertIndex}
                                href={`https://twitter.com/${expert.twitterHandle.replace(
                                  "@",
                                  ""
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="expert-card"
                                aria-label={`Contact ${expert.name} on Twitter at ${expert.twitterHandle} (opens in new window)`}
                              >
                                <img
                                  src={expert.avatarUrl}
                                  alt=""
                                  className="expert-avatar"
                                  role="presentation"
                                />
                                <div className="expert-info">
                                  <div className="expert-name">
                                    {expert.name}
                                  </div>
                                  <div className="expert-handle">
                                    {expert.twitterHandle}
                                  </div>
                                  <div className="expert-companies">
                                    {expert.companies.map(
                                      (company: Company, i: number) => (
                                        <span key={i} className="company-tag">
                                          {company}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </main>

      <footer className="footer" role="contentinfo">
        <p className="footer-text">
          Want to update or add new people?{" "}
          <a
            href="https://twitter.com/ahammer__"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            DM @ahammer__ on Twitter
          </a>
        </p>
        <p className="footer-attribution">
          Built by{" "}
          <a
            href="https://block.github.io/goose/"
            target="_blank"
            rel="noopener noreferrer"
            className="goose-link"
          >
            🪿 Goose
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
