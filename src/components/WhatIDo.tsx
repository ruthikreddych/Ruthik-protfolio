import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DATA ANALYSIS & BI</h3>
              <h4>Turning Data into Decisions</h4>
              <p>
                Crafting executive-level dashboards and deep-dive analyses with
                Power BI, Tableau, and Looker. From EDA to KPI frameworks, I
                transform complex datasets into clear, actionable insights that
                drive business strategy.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">R</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Tableau</div>
                <div className="what-tags">Looker</div>
                <div className="what-tags">Looker Studio</div>
                <div className="what-tags">DOMO</div>
                <div className="what-tags">Matplotlib</div>
                <div className="what-tags">Seaborn</div>
                <div className="what-tags">Plotly</div>
                <div className="what-tags">Excel Advanced</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA ENGINEERING & ML</h3>
              <h4>Scalable Pipelines & Predictive Models</h4>
              <p>
                Building robust ETL pipelines and predictive models using dbt,
                Airflow, Snowflake, and scikit-learn. From data warehousing to
                anomaly detection, I deliver analytics infrastructure that
                scales.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Snowflake</div>
                <div className="what-tags">BigQuery</div>
                <div className="what-tags">Amazon Redshift</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">SQL Server</div>
                <div className="what-tags">dbt</div>
                <div className="what-tags">Apache Airflow</div>
                <div className="what-tags">Fivetran</div>
                <div className="what-tags">ETL Pipelines</div>
                <div className="what-tags">scikit-learn</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">Keras</div>
                <div className="what-tags">Jupyter</div>
                <div className="what-tags">Git / GitHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
