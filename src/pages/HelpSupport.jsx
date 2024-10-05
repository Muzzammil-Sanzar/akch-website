
export default function HelpSupport() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <h2 className="text-2xl md:text-4xl font-bold text-orange-150">Help & Support</h2>
        <p className="md:text-lg font-medium">How Can We Help You?</p>
        <textarea
          rows={8}
          className="rounded-2xl bg-[#F1F1F1] w-full p-4"
          placeholder="Type here"
        />
        <input
          type="email"
          placeholder="Email where we can send you reply"
          className="placeholder:text-sm text-sm rounded-2xl w-full px-4 py-5 border"
        />
      </div>
      <div>
        <button className="bg-orange-150 rounded-full text-white md:text-lg font-medium w-full py-3 md:py-5">Send Help Request</button>
      </div>
    </div>
  )
}
