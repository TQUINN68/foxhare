import { useState } from "react";
import "./App.css";

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export default function App() {
  const publicAsset = (path) => `${process.env.PUBLIC_URL}${path}`;

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 17;

  const goBack = () => {
    setCurrentSlide((s) => Math.max(0, s - 1));
  };

  const goNext = () => {
    setCurrentSlide((s) => Math.min(totalSlides - 1, s + 1));
  };

  return (
    <main className="app">
      <section className="slide slide-dark">
        <div className="right-logo-wrap">
          <img
            src={publicAsset("/foxhare.svg")}
            alt="Fox & Hare"
            className="foxhare-logo"
          />
        </div>
        {currentSlide === 0 && (
          <div className="slide-content">
            <div className="left-content">
              <Tag>Prepared for Fox &amp; Hare Financial Advice</Tag>

              <h1 className="hero">
                The Future of<br />
                <span className="orange">Fox &amp; Hare</span><br />
                is Automated.
              </h1>

              <p className="sub muted">
                A proposal to eliminate manual work, connect your tools, and let your team
                focus on what matters.
              </p>

              <div className="logo-row">
                <div className="logo-box">
                  <img src={publicAsset("/teams.png")} alt="Microsoft Teams" />
                </div>

                <div className="logo-box">
                  <img src={publicAsset("/paradino.png")} alt="Paradino" />
                </div>

                <div className="logo-box">
                  <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                </div>

                <div className="logo-box">
                  <img src={publicAsset("/fileinvite.png")} alt="FileInvite" />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="slide-content system-slide">
            <Tag>System proposal</Tag>

            <div className="system-header">
              <div>
                <h1 className="page-title">Connected automation system</h1>
                <div className="title-divider" />
                <p className="page-sub muted">
                  A lightweight custom platform that connects Fox &amp; Hare’s existing tools,
                  automates repetitive work, and keeps staff in control of every client workflow.
                </p>
              </div>
            </div>

            <div className="system-layout">
              <div className="automation-card">
                <div className="dash-label">Automations</div>

                <div className="automation-list">
                  <button className="automation-item automation-link" onClick={() => setCurrentSlide(3)}>
                    <span>01</span>
                    <p>Meeting Recording → File Note</p>
                    <strong>Slide 4</strong>
                  </button>

                  <button className="automation-item automation-link" onClick={() => setCurrentSlide(5)}>
                    <span>02</span>
                    <p>Client Document Collection &amp; Extraction</p>
                    <strong>Slide 6</strong>
                  </button>

                  <button className="automation-item automation-link" onClick={() => setCurrentSlide(7)}>
                    <span>03</span>
                    <p>Statement of Advice Generation</p>
                    <strong>Slide 8</strong>
                  </button>

                  <button className="automation-item automation-link" onClick={() => setCurrentSlide(9)}>
                    <span>04</span>
                    <p>Client Follow-Ups</p>
                    <strong>Slide 10</strong>
                  </button>

                  <button className="automation-item automation-link" onClick={() => setCurrentSlide(11)}>
                    <span>05</span>
                    <p>Financial Projections &amp; Modelling</p>
                    <strong>Slide 12</strong>
                  </button>

                  <button className="automation-item automation-link" onClick={() => setCurrentSlide(13)}>
                    <span>06</span>
                    <p>Client Portals</p>
                    <strong>Slide 14</strong>
                  </button>
                </div>
              </div>

              <div className="tech-card">
                <div className="dash-label">Tech Stack</div>

                <div className="tech-section">
                  <h3>Frontend</h3>
                  <div className="tech-logo-row">
                    <div className="tech-logo-box">
                      <img src={publicAsset("/react.png")} alt="React" />
                      <span>React</span>
                    </div>
                    <div className="tech-logo-box">
                      <img src={publicAsset("/nextjs.png")} alt="Next.js" />
                      <span>Next.js</span>
                    </div>
                    <div className="tech-logo-box">
                      <img src={publicAsset("/tailwind.png")} alt="Tailwind CSS" />
                      <span>Tailwind</span>
                    </div>
                  </div>
                </div>

                <div className="tech-section">
                  <h3>Backend</h3>
                  <div className="tech-logo-row">
                    <div className="tech-logo-box">
                      <img src={publicAsset("/python.png")} alt="Python" />
                      <span>Python</span>
                    </div>
                    <div className="tech-logo-box">
                      <img src={publicAsset("/flask.png")} alt="Flask" />
                      <span>Flask</span>
                    </div>
                  </div>
                </div>

                <div className="tech-section">
                  <h3>API Integrations</h3>
                  <div className="tech-logo-row">
                    <div className="tech-logo-box">
                      <img src={publicAsset("/teams.png")} alt="Microsoft Teams" />
                      <span>Teams</span>
                    </div>
                    <div className="tech-logo-box">
                      <img src={publicAsset("/fileinvite.png")} alt="FileInvite" />
                    </div>
                    <div className="tech-logo-box">
                      <img src={publicAsset("/paradino.png")} alt="Paradino" />
                    </div>
                    <div className="tech-logo-box">
                      <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    </div>
                  </div>
                </div>

                <div className="tech-section">
                  <h3>AI Layer</h3>
                  <div className="tech-logo-row">
                    <div className="tech-logo-box">
                      <img src={publicAsset("/claude.svg")} alt="Claude" />
                      <span>Claude</span>
                    </div>
                    <div className="tech-logo-box">
                      <img src={publicAsset("/openai.png")} alt="OpenAI" />
                      <span>OpenAI</span>
                    </div>
                  </div>
                </div>

                <div className="tech-section">
                  <h3>Hosting</h3>
                  <div className="tech-logo-row">
                    <div className="tech-logo-box">
                      <img src={publicAsset("/aws.png")} alt="AWS" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="slide-content dashboard-slide">
            <Tag>Staff UI</Tag>

            <div className="dashboard-header">
              <div>
                <h1 className="page-title">Staff-Facing Dashboard</h1>
                <div className="title-divider" />
                <p className="page-sub muted">
                  A centralised internal web app where staff monitor automation activity,
                  action AI outputs, and manage client workflows - without jumping between
                  Teams, FileInvite, Paradino and Intelliflo.
                </p>
              </div>

              <div className="confirm-hover">
                <span className="info-icon">i</span>
                <span>What needs confirming</span>

                <div className="confirm-popover">
                  <p>Confirm Intelliflo developer/API access.</p>
                  <p>Check available API scopes: clients, financial data, documents, tasks and adviser data.</p>
                  <p>Confirm webhook support vs scheduled polling.</p>
                  <p>Check client/adviser search reliability for matching.</p>
                  <p>Confirm write-back permissions for notes, tasks, documents and fact-find fields.</p>
                  <p>Check API rate limits for live mirror approach.</p>
                  <p>Confirm Microsoft SSO availability.</p>
                  <p>Define staff roles and permission levels.</p>
                  <p>Decide whether notifications also go to Teams/email.</p>
                  <p>Confirm mobile requirements, hosting, retention policy and compliance sign-off process.</p>
                </div>
              </div>
            </div>

            <div className="dashboard-grid">
              <div className="dash-card">
                <div className="dash-label">Login</div>
                <h3>Microsoft SSO</h3>
                <p>
                  Staff sign in using their existing M365 accounts. Role-based access keeps
                  each person’s view relevant to their responsibilities.
                </p>
              </div>

              <div className="dash-card">
                <div className="dash-label">My Action Items</div>
                <h3>Priority task list</h3>
                <p>
                  Each adviser sees what needs attention today, automatically generated
                  from client activity and AI outputs.
                </p>
              </div>

              <div className="dash-card">
                <div className="dash-label">Notifications Feed</div>
                <h3>Automation audit trail</h3>
                <p>
                  Every trigger, output and status change is logged in one place, with full
                  client context available on click.
                </p>
              </div>
            </div>

            <div className="sync-panel">
              <div>
                <div className="dash-label">Intelliflo Sync</div>
                <h3>One source of truth</h3>
                <p>
                  The dashboard mirrors Intelliflo client data through its API. Client names,
                  IDs and adviser assignments come directly from the CRM, and confirmed actions
                  write back to the real client record.
                </p>
              </div>

              <div className="sync-flow">
                <span>Intelliflo CRM</span>
                <span>↔</span>
                <span>Dashboard</span>
                <span>↔</span>
                <span>Staff Actions</span>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 3 && (
          <div className="slide-content flow-slide">
            <Tag>Meeting Automation</Tag>

            <div className="flow-header">
              <h1 className="page-title">Meeting Recording → File Note</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                Replacing the manual Teams-to-Paradino-to-Intelliflo workflow with a cleaner,
                adviser-approved automation path.
              </p>
            </div>

            <div className="flow-comparison">
              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title red-title">Current Flow</div>
                  <div className="flow-metrics bad-metrics">
                    20–30 minutes · 30–40 human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box bad-flow">
                    <span>Client meeting on Teams</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Manual recording download</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Manual upload to Paradino</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Wait for file note</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Manual copy into Intelliflo</span>
                  </div>
                </div>
              </div>

              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title green-title">Automated Flow</div>
                  <div className="flow-metrics good-metrics">
                    3–4 minutes · 5 human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box good-flow">
                    <img src={publicAsset("/teams.png")} alt="Teams" />
                    <span>Meeting ends</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/onedrive.png")} alt="OneDrive" />
                    <span>Saves to OneDrive/SharePoint</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">🔔</div>
                    <span>Dashboard notifies adviser</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                    <span>Adviser confirms client match</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/paradino.png")} alt="Paradino" />
                    <span>Paradino accesses recording</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">📝</div>
                    <span>File note is generated</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>Auto-pushed into Intelliflo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 4 && (
          <div className="slide-content feasibility-slide">
            <Tag>Meeting Automation</Tag>

            <div className="feasibility-header">
              <h1 className="page-title">Meeting Recording → File Note</h1>
              <div className="title-divider" />
              <h2 className="big-question">Feasability Check - Possible ✅</h2>
            </div>

            <div className="feasibility-grid">
              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/teams.png")} alt="Microsoft Teams" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Fox &amp; Hare use Microsoft 365 with Teams recording enabled.</p>
                      <p>Recordings are stored in OneDrive/SharePoint.</p>
                      <p>Admin can grant Microsoft Graph API permissions.</p>
                      <p>App registration is possible in Microsoft Entra/Azure.</p>
                      <p>Recording-ready detection can be handled via webhook or polling.</p>
                    </div>
                  </div>
                </div>

                <h3>Microsoft Teams → Recording auto-downloaded to OneDrive</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — when a Teams meeting ends, the recording is saved to OneDrive or
                  SharePoint. Microsoft Graph can detect the file and retrieve the recording
                  and/or transcript once processing is complete.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/paradino.png")} alt="Paradino" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Paradino’s Microsoft 365 connector is included in their plan.</p>
                      <p>It can automatically pick up new recordings.</p>
                      <p>It can associate recordings with the correct client.</p>
                      <p>Direct API uploads are available as a fallback option.</p>
                      <p>No manual trigger is required.</p>
                    </div>
                  </div>
                </div>

                <h3>OneDrive → Recording auto-sent to Paradino</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — if Paradino’s Microsoft 365 integration is enabled, it can access
                  files in OneDrive/SharePoint and use them for meeting summaries or file
                  notes. A custom API pipeline may also be possible as a fallback.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Paradino–Intelliflo integration is enabled and configured.</p>
                      <p>Intelliflo allows third-party app integrations.</p>
                      <p>File notes sync automatically rather than requiring manual push.</p>
                      <p>Notes are mapped to the correct client reliably.</p>
                      <p>Outputs can update the required record type: documents, notes or structured CRM fields.</p>
                    </div>
                  </div>
                </div>

                <h3>File note auto-generated → auto-pushed into Intelliflo</h3>
                <p>
                  <div className="will-it-work">Will it work?</div>
                  Yes — Paradino has an Intelliflo integration where generated outputs, such
                  as file notes, can sync into the corresponding client record, removing the
                  need for manual copy/paste.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 5 && (
          <div className="slide-content flow-slide">
            <Tag>Client Document Collection</Tag>

            <div className="flow-header">
              <h1 className="page-title">Client Document Collection</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                Replacing manual document chasing, reading and data entry with an adviser-approved extraction workflow.
              </p>
            </div>

            <div className="flow-comparison">
              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title red-title">Current Flow</div>
                  <div className="flow-metrics bad-metrics">
                    30-60 minutes · 100+ human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box bad-flow">
                    <span>Staff send FileInvite request</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Client uploads documents</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Staff manually read each document</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Manually key all the client data into Intelliflo</span>
                  </div>
                </div>
              </div>

              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title green-title">Automated Flow</div>
                  <div className="flow-metrics good-metrics">
                    4-6 minutes · 5 human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box good-flow">
                    <img src={publicAsset("/fileinvite.png")} alt="FileInvite" />
                    <span>Client uploads documents</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">🔔</div>
                    <span>Dashboard notification triggered</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/claude.svg")} alt="FileInvite" />
                    <span>AI extracts all structured data from client</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                    <span>Adviser confirms or edits extracted data</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>Data pushed into Intelliflo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 6 && (
          <div className="slide-content feasibility-slide">
            <Tag>Client Document Collection</Tag>

            <div className="feasibility-header">
              <h1 className="page-title">Client Document Collection</h1>
              <div className="title-divider" />
              <h2 className="big-question">Feasability Check - Possible ✅</h2>
            </div>

            <div className="feasibility-grid document-feasibility-grid">
              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/fileinvite.png")} alt="FileInvite" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>FileInvite plan includes API/webhooks.</p>
                      <p>Webhooks can fire on document upload events.</p>
                      <p>API allows uploaded files to be retrieved programmatically.</p>
                      <p>Authentication/access method for pulling files.</p>
                      <p>Whether polling is needed if webhooks are limited.</p>
                    </div>
                  </div>
                </div>

                <h3>FileInvite upload → trigger detected</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — when a client uploads a document in FileInvite, the system can detect the new file
                  through webhooks or API polling and retrieve it for processing.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/claude.svg")} alt="AI extraction" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>What document types clients upload.</p>
                      <p>Required data fields for Intelliflo.</p>
                      <p>Accuracy requirements and compliance tolerance.</p>
                      <p>Whether documents are consistent or highly variable.</p>
                      <p>Whether staff are happy with review-before-submit.</p>
                    </div>
                  </div>
                </div>

                <h3>AI extracts data from documents</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — once documents are retrieved, AI and OCR can extract structured fields from PDFs,
                  images, statements and other financial documents.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Fox &amp; Hare have Intelliflo API access enabled.</p>
                      <p>Which client fields can be written via API.</p>
                      <p>Data structure/format required by Intelliflo endpoints.</p>
                      <p>Whether updates overwrite or append existing data.</p>
                      <p>Rate limits and permission scopes on the API.</p>
                    </div>
                  </div>
                </div>

                <h3>Data auto-populated into Intelliflo</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — once extracted fields are reviewed and approved, Intelliflo’s API can update
                  the correct client record instead of staff manually entering each field.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                </div>

                <h3>Staff verify instead of manually inputting</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — the dashboard can show extracted fields beside the source document, allowing staff
                  to edit, confirm and approve before anything is pushed into Intelliflo.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 7 && (
          <div className="slide-content flow-slide">
            <Tag>Statement of Advice</Tag>

            <div className="flow-header">
              <h1 className="page-title">Statement of Advice</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                Replacing manual SOA drafting with an adviser-reviewed, template-driven document workflow.
              </p>
            </div>

            <div className="flow-comparison">
              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title red-title">Current Flow</div>
                  <div className="flow-metrics bad-metrics">
                    5-8 hours · 1000+ human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box bad-flow">
                    <span>Adviser starts SOA from scratch</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Pulls client data from multiple places</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Manually writes ~100 page document</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Repeats process for every client</span>
                  </div>
                </div>
              </div>

              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title green-title">Automated Flow</div>
                  <div className="flow-metrics good-metrics">
                    30-40 minutes · ~10 human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>AI pulls client data from Intelliflo</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/claude.svg")} alt="AI" />
                    <span>SOA drafted using firm template</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">🔔</div>
                    <span>Dashboard notifies adviser</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                    <span>Adviser approves and signs off</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>Final SOA pushed to client record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 8 && (
          <div className="slide-content feasibility-slide">
            <Tag>Statement of Advice</Tag>

            <div className="feasibility-header">
              <h1 className="page-title">Statement of Advice</h1>
              <div className="title-divider" />
              <h2 className="big-question">Feasability Check - Possible ✅</h2>
            </div>

            <div className="feasibility-grid">
              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Intelliflo API access is enabled.</p>
                      <p>All required SOA data exists in structured form.</p>
                      <p>Required data is not scattered across notes or PDFs.</p>
                      <p>Endpoints exist for fact find, goals and strategy inputs.</p>
                      <p>Permissions/scopes allow reading all required client data.</p>
                    </div>
                  </div>
                </div>

                <h3>AI pulls all client data from Intelliflo</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — Intelliflo stores structured client data such as fact find, assets,
                  income and goals. With API access, that data can be pulled into one payload
                  for downstream SOA drafting.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/claude.svg")} alt="AI drafting" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Fox &amp; Hare use a consistent SOA template.</p>
                      <p>Compliance requirements are clearly documented.</p>
                      <p>Required wording, disclosures and disclaimers are known.</p>
                      <p>How much variation exists between client scenarios.</p>
                    </div>
                  </div>
                </div>

                <h3>AI drafts full SOA document</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — once structured data is available, AI can draft a full structured SOA
                  using strict templates, rules and required sections such as strategy,
                  recommendations, risks and disclosures.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                </div>

                <h3>Adviser reviews and approves</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — the generated SOA can be shown in a structured review interface where
                  advisers edit, validate and approve before final use, keeping human control
                  over the advice.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 9 && (
          <div className="slide-content flow-slide">
            <Tag>Client Follow-Ups</Tag>

            <div className="flow-header">
              <h1 className="page-title">Client Follow-Ups</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                Replacing manual chasing with automated follow-up sequences and dashboard-based escalation.
              </p>
            </div>

            <div className="flow-comparison">
              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title red-title">Current Flow</div>
                  <div className="flow-metrics bad-metrics">
                    30-50 minutes · 50+ human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box bad-flow">
                    <span>Staff checks who has not sent documents</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Writes follow-up email manually</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Sends message manually</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Repeats until resolved</span>
                  </div>
                </div>
              </div>

              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title green-title">Automated Flow</div>
                  <div className="flow-metrics good-metrics">
                    ~3 minutes · 2-3 human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box good-flow">
                    <img src={publicAsset("/fileinvite.png")} alt="FileInvite" />
                    <span>System detects missing documents</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">✉️</div>
                    <span>Automated follow-up sequence begins</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">🔔</div>
                    <span>Dashboard tracks sequence phase</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/fileinvite.png")} alt="FileInvite" />
                    <span>Client completes upload</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                    <span>Sequence stops automatically</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">👤</div>
                    <span>Manual outreach only if client remains unresponsive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 10 && (
          <div className="slide-content feasibility-slide">
            <Tag>Client Follow-Ups</Tag>

            <div className="feasibility-header">
              <h1 className="page-title">Client Follow-Ups</h1>
              <div className="title-divider" />
              <h2 className="big-question">Feasability Check - Possible ✅</h2>
            </div>

            <div className="feasibility-grid document-feasibility-grid">
              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/fileinvite.png")} alt="FileInvite" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>FileInvite API access is enabled.</p>
                      <p>How “missing” is defined: per document vs whole request.</p>
                      <p>How often the system should poll for updates.</p>
                      <p>Whether webhooks exist for status changes.</p>
                    </div>
                  </div>
                </div>

                <h3>System detects missing documents</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — FileInvite tracks document request status, so the system can check which
                  items are uploaded, pending or incomplete and flag them as missing.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <div className="process-icon">✉️</div>

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Whether FileInvite’s native reminder system is sufficient.</p>
                      <p>If custom messaging is needed for tone, branding and personalisation.</p>
                      <p>Preferred channel: email, SMS or portal notification.</p>
                      <p>Timing rules, such as 2 days, 5 days or weekly.</p>
                      <p>Compliance requirements around client communications.</p>
                    </div>
                  </div>
                </div>

                <h3>Automatically sends follow-ups at set intervals</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — once missing items are detected, the system can trigger reminder emails,
                  SMS or FileInvite-native reminders at defined intervals until completion.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Reliable way to detect “fully complete” status.</p>
                      <p>Whether partial completion should pause or continue follow-ups.</p>
                      <p>How to handle wrong or invalid document uploads.</p>
                      <p>Sync timing: instant vs slight delay.</p>
                      <p>Whether manual overrides are needed.</p>
                    </div>
                  </div>
                </div>

                <h3>Stops when client completes</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — once FileInvite shows that required items are completed, the system can
                  stop further reminders automatically.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <div className="process-icon">🔔</div>

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>What qualifies as unresponsive, such as 7 or 14 days.</p>
                      <p>Who should be notified: adviser, admin or team inbox.</p>
                      <p>Preferred notification method: email, Teams or CRM task.</p>
                      <p>Whether tasks should be created inside Intelliflo.</p>
                      <p>Priority or severity levels for escalation.</p>
                    </div>
                  </div>
                </div>

                <h3>Staff notified only if client is unresponsive long-term</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — escalation logic can create a dashboard task, internal alert or manual
                  outreach recommendation only after a client remains incomplete past the threshold.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 11 && (
          <div className="slide-content flow-slide">
            <Tag>Financial Projections</Tag>

            <div className="flow-header">
              <h1 className="page-title">Financial Projections &amp; Modelling</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                Replacing manual spreadsheet modelling with dashboard-triggered projections using live client data.
              </p>
            </div>

            <div className="flow-comparison">
              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title red-title">Current Flow</div>
                  <div className="flow-metrics bad-metrics">
                    90-160 minutes · 100+ human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box bad-flow">
                    <span>Adviser builds model manually</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Pulls client data by hand</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Runs projections in spreadsheets</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Manually prepares report/output</span>
                  </div>
                </div>
              </div>

              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title green-title">Automated Flow</div>
                  <div className="flow-metrics good-metrics">
                    10-20 minutes · ~10 human clicks
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box good-flow">
                    <div className="process-icon">📊</div>
                    <span>Adviser opens dashboard</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">🔎</div>
                    <span>Selects client and modelling type</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>System pulls client data</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">⚙️</div>
                    <span>Projection model runs</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">📄</div>
                    <span>Formatted report presented</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                    <span>Adviser approves or adjusts</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>Final report saved to Intelliflo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 12 && (
          <div className="slide-content feasibility-slide">
            <Tag>Financial Projections</Tag>

            <div className="feasibility-header">
              <h1 className="page-title">Financial Projections &amp; Modelling</h1>
              <div className="title-divider" />
              <h2 className="big-question">Feasability Check - Possible ✅</h2>
            </div>

            <div className="feasibility-grid">
              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Intelliflo API access is enabled.</p>
                      <p>Required modelling inputs exist in structured fields.</p>
                      <p>Inputs are not trapped in PDFs or notes.</p>
                      <p>Endpoints exist for cashflow, assets, liabilities, super and goals.</p>
                      <p>Data is complete and consistent across clients.</p>
                      <p>Permission scope allows reading full client financial data.</p>
                    </div>
                  </div>
                </div>

                <h3>AI pulls client data from Intelliflo</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — Intelliflo stores key financial inputs such as income, expenses,
                  assets, liabilities, super and goals. These can be retrieved via API and
                  structured for modelling.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <div className="process-icon">📈</div>

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>What models advisers currently use.</p>
                      <p>Whether existing modelling tools should be integrated instead.</p>
                      <p>Assumptions required: inflation, returns, tax rates and fees.</p>
                      <p>Which calculations must be deterministic and rules-based.</p>
                    </div>
                  </div>
                </div>

                <h3>Runs projections and models automatically</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — once data is structured, projections can run through deterministic,
                  rule-based financial modelling logic such as cashflow, compounding and
                  retirement projections.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Preferred output format: PDF, Word or dashboard.</p>
                      <p>Branding/template requirements.</p>
                      <p>Whether charts, tables and written summaries are all needed.</p>
                      <p>Where the final report should be stored in Intelliflo.</p>
                    </div>
                  </div>
                </div>

                <h3>Outputs formatted report for adviser review</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Yes — model outputs can be converted into structured reports with tables,
                  charts and written summaries, then presented to the adviser for review
                  before saving.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 13 && (
          <div className="slide-content flow-slide">
            <Tag>Client Portal</Tag>

            <div className="flow-header">
              <h1 className="page-title">Client Portal Consolidation</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                Exploring whether FileInvite can be replaced by Intelliflo’s client portal for a cleaner client and staff experience.
              </p>
            </div>

            <div className="flow-comparison">
              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title red-title">Current Flow</div>
                  <div className="flow-metrics bad-metrics">
                    Two portals · double handling
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box bad-flow">
                    <span>Client uses separate FileInvite portal</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>FileInvite is disconnected from Intelliflo portal</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Staff manually reconcile client activity</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box bad-flow">
                    <span>Double handling across systems</span>
                  </div>
                </div>
              </div>

              <div className="flow-section">
                <div className="flow-section-header">
                  <div className="flow-section-title green-title">Automated Flow</div>
                  <div className="flow-metrics good-metrics">
                    One portal · CRM-native experience
                  </div>
                </div>

                <div className="process-row">
                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>Client uses Intelliflo portal</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">📄</div>
                    <span>Uploads documents directly inside portal</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">📍</div>
                    <span>Tracks progress and missing items</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <div className="process-icon">💬</div>
                    <span>Communicates in one place</span>
                  </div>

                  <div className="process-arrow">→</div>

                  <div className="process-box good-flow">
                    <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />
                    <span>Everything syncs directly into CRM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 14 && (
          <div className="slide-content feasibility-slide">
            <Tag>Client Portal</Tag>

            <div className="feasibility-header">
              <h1 className="page-title">Client Portal Consolidation</h1>
              <div className="title-divider" />
              <h2 className="big-question">Feasability Check - Maybe Possible ⚠️</h2>
            </div>

            <div className="feasibility-grid">
              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/intelliflo.png")} alt="Intelliflo" />

                  <div className="confirm-hover confirm-small">
                    <span className="info-icon">i</span>
                    <span>What needs confirming</span>

                    <div className="confirm-popover">
                      <p>Whether Intelliflo supports structured document request workflows.</p>
                      <p>Whether it can enforce required documents and track completion.</p>
                      <p>Whether reminders/follow-ups are comparable to FileInvite.</p>
                      <p>Client UX quality: upload ease and clarity of missing items.</p>
                      <p>Whether staff can manage and monitor all requests efficiently in one place.</p>
                    </div>
                  </div>
                </div>

                <h3>Everything inside Intelliflo client portal</h3>
                <div className="will-it-work">Will it work?</div>
                <p>
                  Maybe — Intelliflo’s client portal may handle document uploads and communication
                  natively, which would keep everything tied to the CRM. But it may not fully replace
                  FileInvite’s structured workflows, progress tracking, required items and reminder logic.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <div className="process-icon">⚠️</div>
                </div>

                <h3>Recommended approach</h3>
                <div className="will-it-work">What should we do?</div>
                <p>
                  Hold off initially. Keep FileInvite in the first automation build, then assess whether
                  Intelliflo can replace it later once API access, portal functionality and workflow quality
                  are confirmed.
                </p>
              </div>

              <div className="feasibility-card">
                <div className="feasibility-card-top">
                  <img src={publicAsset("/foxhare.svg")} alt="FoxHare" />
                </div>

                <h3>Best short-term path</h3>
                <div className="will-it-work">Practical next step</div>
                <p>
                  Build around FileInvite first because it already handles document requests. If Intelliflo’s
                  portal proves strong enough, the workflow can later be consolidated into one client-facing
                  experience.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 15 && (
          <div className="slide-content before-after-slide">
            <Tag>Before vs After</Tag>

            <div className="flow-header">
              <h1 className="page-title">What changes for Fox &amp; Hare?</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                The core shift is simple: staff move from chasing, copying and checking systems manually
                to reviewing clean automation outputs in one place.
              </p>
            </div>

            <div className="before-after-grid">
              <div className="before-after-card before-card">
                <div className="before-after-title red-title">Today</div>

                <div className="compare-line">
                  <span className="compare-cross">×</span>
                  <p>Meeting recordings are downloaded, uploaded and tracked manually.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-cross">×</span>
                  <p>Client documents are opened, read and keyed into Intelliflo field by field.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-cross">×</span>
                  <p>SOAs are drafted from scratch by pulling data from multiple systems.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-cross">×</span>
                  <p>Follow-ups rely on staff remembering, checking and chasing manually.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-cross">×</span>
                  <p>Financial projections are built manually in spreadsheets using hand-pulled client data.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-cross">×</span>
                  <p>Clients and staff move between separate portals with duplicated effort.</p>
                </div>
              </div>

              <div className="before-after-card after-card">
                <div className="before-after-title green-title">With Automation</div>

                <div className="compare-line">
                  <span className="compare-check">✓</span>
                  <p>Meeting recordings flow into file-note generation with adviser approval.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-check">✓</span>
                  <p>Client data is extracted from documents and reviewed before CRM update.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-check">✓</span>
                  <p>SOA drafts are generated from structured client data and firm templates.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-check">✓</span>
                  <p>Follow-ups run automatically, with staff alerted only when action is needed.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-check">✓</span>
                  <p>Financial models are generated from live client data and reviewed before saving.</p>
                </div>

                <div className="compare-line">
                  <span className="compare-check">✓</span>
                  <p>Staff work from one dashboard that keeps the CRM as the source of truth.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentSlide === 16 && (
          <div className="slide-content timeline-slide">
            <Tag>Project Approach</Tag>

            <div className="timeline-header">
              <h1 className="page-title">Project Timeline</h1>
              <div className="title-divider" />
              <p className="page-sub muted">
                Start with a focused discovery phase, then build the automation system in clear stages.
              </p>
            </div>

            <div className="timeline-layout">
              <div className="timeline-discovery">
                <div className="timeline-phase-label">Phase 1</div>
                <h2>Discovery &amp; Scoping</h2>
                <div className="timeline-duration">3–4 weeks</div>

                <p>
                  Confirm every assumption before build. This phase audits the APIs, maps real staff workflows,
                  checks compliance requirements, and produces the formal delivery plan for sign-off.
                </p>

                <ul>
                  <li>Audit Intelliflo, FileInvite, Paradino and Microsoft Graph APIs</li>
                  <li>Confirm Teams recording behaviour and Microsoft Entra setup</li>
                  <li>Walk through real workflows with Fox &amp; Hare staff</li>
                  <li>Map SOA structure and compliance requirements</li>
                  <li>Define dashboard structure, roles and approval flows</li>
                  <li>Produce a full delivery plan for sign-off before build</li>
                </ul>
              </div>

              <div className="timeline-phases">
                <div className="timeline-mini-card">
                  <span>Phase 2</span>
                  <h3>Foundation &amp; Dashboard</h3>
                  <p>Build the core dashboard, Microsoft SSO, role access, notifications and live Intelliflo connection.</p>
                </div>

                <div className="timeline-mini-card">
                  <span>Phase 3</span>
                  <h3>Meeting Recording Automation</h3>
                  <p>Automate the Teams recording → Paradino file note → Intelliflo client record workflow.</p>
                </div>

                <div className="timeline-mini-card">
                  <span>Phase 4</span>
                  <h3>Document Collection &amp; Extraction</h3>
                  <p>Retrieve FileInvite uploads, extract structured data, and let staff verify before CRM update.</p>
                </div>

                <div className="timeline-mini-card">
                  <span>Phase 5</span>
                  <h3>Client Follow-Ups</h3>
                  <p>Automate missing-document reminders and only escalate to staff when manual outreach is needed.</p>
                </div>

                <div className="timeline-mini-card">
                  <span>Phase 6</span>
                  <h3>SOA Generation</h3>
                  <p>Draft SOAs from client data and firm templates, with adviser review, edits and approval built in.</p>
                </div>

                <div className="timeline-mini-card">
                  <span>Phase 7</span>
                  <h3>Financial Modelling</h3>
                  <p>Generate projections from live client data and output adviser-reviewed reports.</p>
                </div>

                <div className="timeline-mini-card wide">
                  <span>Phase 8</span>
                  <h3>Testing, Compliance Review &amp; Handover</h3>
                  <p>Run end-to-end testing, complete compliance checks, train staff and hand over the final system.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mini-nav">
          <button className="mini-nav-btn" onClick={goBack} disabled={currentSlide === 0}>
            ← Back
          </button>

          <span className="mini-nav-page">
            {currentSlide + 1} / {totalSlides}
          </span>

          <button className="mini-nav-btn" onClick={goNext} disabled={currentSlide === totalSlides - 1}>
            Next →
          </button>
        </div>
      </section>
    </main>
  );
}
