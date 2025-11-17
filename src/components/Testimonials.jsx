function Testimonials() {
  const testimonials = [
    {
      quote: "India Avenue's deep understanding of local markets and grassroots research approach sets them apart. Their insights are invaluable.",
      author: "Advisor Name",
      role: "Financial Advisor",
      firm: "Advisory Firm Name"
    },
    {
      quote: "The team's on-the-ground research in India provides a level of insight you simply can't get from desk-based analysis.",
      author: "Consultant Name",
      role: "Investment Consultant",
      firm: "Consulting Firm Name"
    },
    {
      quote: "Their modern approach to accessing India opportunities has been a game-changer for our client portfolios.",
      author: "Advisor Name",
      role: "Senior Financial Planner",
      firm: "Planning Firm Name"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-4 text-gray-900">What Advisors Say</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Trusted by financial advisors and consultants across Australia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-saffron-500 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.firm}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

