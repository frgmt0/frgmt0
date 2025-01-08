import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Transform Your Code into Beautiful Images
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Instantly create stunning code screenshots with syntax highlighting,
          without the need to save files or render markdown.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Codeshot API</h2>
            <p className="text-gray-600 mb-6">
              A powerful API that lets you generate beautiful code screenshots programmatically.
              Perfect for documentation, tutorials, and social media sharing.
            </p>
            <ul className="space-y-4">
              {[
                'Instant code to image conversion',
                'Support for 100+ programming languages',
                'Customizable themes and styles',
                'Adjustable window controls and shadows',
                'Multiple export formats',
                'Simple REST API integration'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
              <pre className="whitespace-pre-wrap">
                {`// Example API Request
fetch('https://api.frgmt.xyz/v1/codeshot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    code: 'console.log("Hello, World!");',
    language: 'javascript',
    theme: 'dracula',
    backgroundColor: '#282a36'
  })
})`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">
          Sign up now to get your API key and start creating beautiful code screenshots.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign Up for Free
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
