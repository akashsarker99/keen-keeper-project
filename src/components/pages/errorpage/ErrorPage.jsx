import { Link } from "react-router";

;

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        
        <h1 className="text-7xl font-bold text-[#244D3F] mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold mb-2">
          Oops! Page not found
        </h2>
        
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button className="btn bg-[#244D3F] text-white hover:bg-[#1b3a2f]">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;