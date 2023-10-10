import React from 'react'

export default function page() {
  return (
    <div>
      <p className="text-center  text-lg px-40 mt-5">
        We welcome contributions from researchers, academics, and industry
        experts in the fields of quantum computing and software engineering to
        submit their original papers to the Quantum Software Engineering Summit.
        This conference aims to facilitate the exchange of cutting-edge
        research, foster collaboration, and advance the field of quantum
        software engineering.
      </p>
      <div className="px-40 my-6 w-full h-full flex gap-6">
        <div className="border rounded-md shadow-lg p-4 flex-1 space-x-1">
          Authors are invited to submit their original research papers on a wide
          range of topics related to quantum software engineering, including but
          not limited to:{' '}
          <div className="mt-1">
            • Quantum algorithms and their practical applications
          </div>
          <div>• Quantum programming languages, libraries, and frameworks</div>
          <div>
            • Quantum software development methodologies and best practices
          </div>{' '}
          <div>• Quantum machine learning and optimization algorithms </div>
          <div>
            • Quantum cryptography, security, and post-quantum cryptography{' '}
          </div>
          <div>
            • Interdisciplinary research at the intersection of quantum
            computing and software engineering{' '}
          </div>{' '}
          • Quantum hardware and software co-design
          <div>• Quantum simulation and quantum computing in the cloud</div>
        </div>
        <div className="space-y-3 flex-1 ">
          <div className="border rounded-md shadow-lg p-4">
            Here are the submission guidelines:
            <div>
              • Paper Length: Papers should not exceed 20 pages, including
              figures, tables, and references.
            </div>
            <div>
              • Formatting: Please use the conference template for formatting
              your paper.
            </div>
            <div>
              {' '}
              • Review Process: All submissions will undergo a rigorous
              peer-review process.
            </div>
            <div>
              • Publication: Accepted papers will be included in the conference
              proceedings and may be considered for publication in a special
              issue of a reputable journal.
            </div>
          </div>
          <div className="border rounded-md shadow-lg p-4">
            {' '}
            Important Dates{' '}
            <div>• Expected Paper Submission Deadline: July 2024</div>{' '}
            <div>• Expected Notification of Acceptance: September 2024</div>
            <div> • Expected Conference Dates: December 2024</div>
          </div>
        </div>
      </div>
    </div>
  )
}
