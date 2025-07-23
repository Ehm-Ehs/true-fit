export default function NewsletterForm() {
  return (
    <div className="text-center">
      <p className="text-sm mb-2 font-medium">Stay up to date</p>
      <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="border px-3 py-2 rounded text-sm w-full"
        />
        <button className="bg-purple-500 text-white text-sm px-4 py-2 rounded">
          Subscribe
        </button>
      </div>
    </div>
  );
}
