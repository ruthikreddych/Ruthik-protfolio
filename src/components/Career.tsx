import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Science in Data Science</h4>
                <h5>Lewis University, Romeoville, IL, USA</h5>
              </div>
              <h3>Dec 2024</h3>
            </div>
            <p>
              GPA 3.67/4.0. Coursework in advanced analytics, machine learning,
              statistical modelling, data engineering, and big data technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Data Analyst</h4>
                <h5>Velden Health, Chicago, IL</h5>
              </div>
              <h3>Jan 2026 – Present</h3>
            </div>
            <p>
              Lead end-to-end analytics engagements with senior leadership,
              architecting executive-facing dashboards across Power BI, Tableau,
              and Looker. Conduct deep-dive EDA and statistical modelling on
              10M+ records. Design and deploy ETL pipelines using dbt and SQL.
              Develop predictive models and anomaly detection frameworks to
              proactively flag revenue leakage and operational bottlenecks.
              Mentor junior analysts and embed best practices across the
              analytics function.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst · Financial Services</h4>
                <h5>Charles Schwab, Chicago, IL</h5>
              </div>
              <h3>Jul 2024 – Jan 2026</h3>
            </div>
            <p>
              Queried and analyzed large-scale financial datasets (15M+ records)
              in Snowflake using advanced SQL. Built structured analytical
              datasets and reusable data models to support self-serve reporting.
              Designed and maintained Tableau dashboards to track core KPIs and
              operational trends. Presented findings to technical and
              non-technical audiences, shaping operational strategy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst · Healthcare</h4>
                <h5>Citius Tech, Ahmedabad, India</h5>
              </div>
              <h3>Jan 2020 – Nov 2022</h3>
            </div>
            <p>
              Cleaned, joined, and analyzed 5M+ patient records using SQL and
              Python. Designed and maintained 10+ Tableau dashboards tracking
              utilization rates and operational KPIs. Migrated manual reports
              into automated Power BI and SQL Server pipelines, cutting
              reporting turnaround by 45%. Built ETL workflows processing 3TB+
              of data across six business networks. Conducted demand forecasting
              that improved resource allocation accuracy by 22%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
