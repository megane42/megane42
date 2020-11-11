export default function Footer() {
  return (
    <footer className="w-full h-24 border-t border-solid border-gray-300 flex justify-center items-center">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
        className="flex justify-center items-center"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 mx-1" />
      </a>
    </footer>
  )
}
