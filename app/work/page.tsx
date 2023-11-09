import React from 'react'

export default function work() {
  return (
    <div className="p-10">
      <div className="font-bold text-center">
        Join the Quantum Software Engineering Summit and contribute to our
        esteemed conference through insightful workshops. Workshops offer an
        interactive platform for in-depth discussions, skill development, and
        collaborative learning. Submit your workshop proposals today!
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="shadow border rounded p-4 my-2">
            Choose from two workshop formats: <br />
            Half-Day Workshops <br />
            Ideal for concise and focused discussions. Duration: approximately
            half a day. <br />
            Full-Day Workshops <br />
            Suitable for comprehensive coverage of topics. Duration: full day
            for in-depth exploration.
          </div>{' '}
          <div className="shadow border rounded p-4 my-2">
            Submission Format <br />
            Workshop proposals must be submitted in PDF format. Adhere to the
            submission guidelines available on our conference website.
          </div>{' '}
          <div className="shadow border rounded p-4 my-2">
            Important Dates <br />
            Workshop Proposal Submission Deadline <br />
            [Insert Deadline] <br />
            Notification of Acceptance <br />
            [Insert Notification Date] <br />
            Conference Dates <br />
            [Insert Conference Dates]
          </div>{' '}
        </div>
        <div className="flex-1">
          <div className="shadow border rounded p-4 my-2 ">
            Workshop Proposal Content <br />
            Description of the Workshop and Relevant Topics <br />
            Provide a clear and concise overview of the workshops objectives and
            the topics it will cover. <br />
            Program Committee (PC) Chairs and PC Members <br />
            Include information about the workshops organizing committee,
            including the chairs and members of the Program Committee. <br />
            Publication (if any) <br />
            Indicate any plans for publication and provide details. <br />
            Information for Authors <br />
            Specify the length, format, and template for workshop papers or
            materials. <br />
            Suggested Important Dates (Tentatively) <br />
            Propose a timeline for your workshop, including submission
            deadlines, review dates, and other relevant milestones. <br />
          </div>
          <div className="shadow border rounded p-4 my-2 ">
            Workshop Publications <br /> Publication of workshop materials will
            be negotiated individually by the workshop chairs. Reach out to the
            workshop chairs for more details regarding publication
            opportunities.
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        We look forward to receiving your exciting workshop proposals and
        welcoming your workshops to our conference. Join us and contribute to
        the advancement of quantum software engineering!
      </div>
    </div>
  )
}
