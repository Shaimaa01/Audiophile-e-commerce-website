const SocialLinks = () => {
  return (
    <>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shaimaa-kamel-818bab31b/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-burnt-orange cursor-pointer text-white  hover:scale-105"
        aria-label="LinkedIn profile"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.5C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.75V1.75C24 .77 23.21 0 22.23 0zM7.06 20.44H3.56V9h3.5v11.44zM5.31 7.56c-1.12 0-2.02-.91-2.02-2.03 0-1.11.91-2.02 2.02-2.02s2.02.91 2.02 2.02c0 1.12-.91 2.03-2.02 2.03zM20.44 20.44h-3.5v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66h-3.5V9h3.36v1.56h.05c.47-.88 1.62-1.8 3.34-1.8 3.57 0 4.23 2.34 4.23 5.38v6.3z" />
        </svg>
      </a>

      {/* Twitter (X) */}
      <a
        href="https://x.com/shaimaa385863"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-burnt-orange cursor-pointer text-white pt-1"
        aria-label="Visit my Twitter (X) profile"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 4.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Shaimaa01/Audiophile-e-commerce-website"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-burnt-orange cursor-pointer text-white "
        aria-label="Visit my GitHub profile"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.092.68-.216.68-.482v-1.74c-2.78.603-3.37-1.34-3.37-1.34-.455-1.155-1.11-1.463-1.11-1.463-.91-.622.07-.61.07-.61 1.004.07 1.53 1.034 1.53 1.034.89 1.526 2.34 1.086 2.91.83.09-.648.35-1.086.635-1.337-2.22-.252-4.56-1.112-4.56-4.94 0-1.092.39-1.985 1.03-2.683-.103-.253-.446-1.27.097-2.645 0 0 .84-.27 2.75 1.026a9.543 9.543 0 015.01 0c1.91-1.296 2.75-1.026 2.75-1.026.54 1.375.2 2.392.1 2.645.64.698 1.03 1.59 1.03 2.683 0 3.84-2.34 4.684-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10.002 10.002 0 0022 12c0-5.52-4.48-10-10-10z"
          />
        </svg>
      </a>
    </>
  );
};

export default SocialLinks;
