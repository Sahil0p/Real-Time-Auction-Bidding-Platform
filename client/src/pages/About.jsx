import { Link } from "react-router";
import { useSelector } from "react-redux";

export const About = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-sm shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Real-Time Auction & Bidding Platform
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Welcome — this repository implements{" "}
            <strong>“Real-Time Auction & Bidding Platform”</strong>, a
            full-stack real-time web application demonstrating concurrency,
            scalability, and maintainability with modern web technologies.
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Project Snapshot
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Frontend:</strong> React (responsive UI, dashboard for
                ongoing, upcoming, and completed auctions).
              </li>
              <li>
                <strong>Real-time:</strong> WebSockets / Socket.IO for live
                bidding, synchronized timers, and user activity feed.
              </li>
              <li>
                <strong>Backend:</strong> Node.js with JWT-based authentication
                and centralized auction state management.
              </li>
              <li>
                <strong>Database:</strong> MongoDB with schemas for Users,
                Items, Auctions, and Bids including historical bid storage.
              </li>
              <li>
                <strong>Validation & Audit:</strong> bid validation (reject
                lower/equal bids, block expired ones) and audit logging for all
                bidding activities.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Implementation Overview
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p>
                The <strong>frontend</strong> provides a clean, intuitive UI
                built with React. Users can explore auctions categorized as
                ongoing, upcoming, and completed. Each auction dynamically
                updates with real-time bid information, item details, and
                countdown timers synced with the server.
              </p>

              <p>
                The <strong>backend</strong> uses Node.js and Express to manage
                API routes, user authentication (JWT), and auction lifecycle
                logic. It handles real-time bid events using Socket.IO and
                ensures consistent auction states across connected clients.
              </p>

              <p>
                The <strong>database layer</strong> uses MongoDB for scalable
                data management with well-structured collections for Users,
                Auctions, Items, and Bids. Each auction’s historical bidding
                data is persisted for reporting and analysis.
              </p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Key Features
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>User registration and secure JWT authentication</li>
              <li>Live bidding with instant updates across clients</li>
              <li>
                Auction lifecycle management — create, start, countdown, and
                close
              </li>
              <li>Server-side bid validation and complete audit logging</li>
              <li>
                Admin panel for managing auctions (create/edit/delete) — optional
              </li>
              <li>Unit and integration testing for critical endpoints</li>
              <li>Docker configuration for seamless local deployment</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Developer
            </h2>
            <p className="text-gray-700">
              This project was developed by <strong>Sahil Ahmed</strong> as part
              of a full-stack real-time web application assessment to demonstrate
              end-to-end system design, scalability, and code quality.
            </p>

            <div className="mt-4 p-4 bg-gray-50 rounded-sm">
              <p className="font-medium text-gray-900 mb-2">Connect with the Developer:</p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">GitHub Profile:</span>{" "}
                  <a
                    href="https://github.com/Sahil0p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    github.com/Sahil0p
                  </a>
                </p>
                <p>
                  <span className="font-medium">Project Repository:</span>{" "}
                  <a
                    href="https://github.com/Sahil0p/Real-Time-Auction-Bidding-Platform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    https://github.com/Sahil0p/Real-Time-Auction-Bidding-Platform
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Getting Started
            </h2>
            <p className="text-gray-700">
              The repository includes a complete README file with setup
              instructions, architecture overview, Docker configuration, and test
              commands. Explore the folders to understand each layer:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                <strong>/client</strong> — React frontend with real-time updates
                and responsive UI
              </li>
              <li>
                <strong>/server</strong> — Node.js APIs, Socket.IO, authentication
                logic, and data models
              </li>
              <li>
                <strong>/tests</strong> — integration and unit tests for key
                endpoints
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-700">
              Have questions or feedback?{" "}
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                Contact us
              </Link>{" "}
              anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
